package fr.zaidoumhd.brigadierchef;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.webkit.WebViewAssetLoader;

import java.io.IOException;
import java.io.InputStream;

/**
 * Le site entier, embarqué dans l'APK et servi hors ligne depuis
 * https://appassets.androidplatform.net/ — ce qui garde les chemins absolus
 * (/icons/…) et le localStorage du jeu. Seul le jeu 3D est embarqué.
 */
public class MainActivity extends Activity {

    private static final String HOTE = "appassets.androidplatform.net";
    private static final String ACCUEIL = "https://" + HOTE + "/jeu3d/index.html";

    private WebView web;

    @Override
    protected void onCreate(Bundle etat) {
        super.onCreate(etat);

        WebViewAssetLoader chargeur = new WebViewAssetLoader.Builder()
                .setDomain(HOTE)
                .addPathHandler("/", new SiteHandler())
                .build();

        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView v, WebResourceRequest r) {
                return chargeur.shouldInterceptRequest(r.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
                Uri u = r.getUrl();
                if (HOTE.equals(u.getHost())) return false;
                // Liens externes : ouverts dans le navigateur du téléphone.
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignore) { }
                return true;
            }
        });

        setContentView(web);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        pleinEcran();
        if (etat != null) web.restoreState(etat);
        else web.loadUrl(ACCUEIL);
    }

    @Override
    public void onWindowFocusChanged(boolean focus) {
        super.onWindowFocusChanged(focus);
        if (focus) pleinEcran();
    }

    /** Jeu en plein écran : barres système masquées, rappelées d'un glissement. */
    private void pleinEcran() {
        if (Build.VERSION.SDK_INT >= 30) {
            WindowInsetsController c = getWindow().getInsetsController();
            if (c != null) {
                c.hide(WindowInsets.Type.systemBars());
                c.setSystemBarsBehavior(WindowInsetsController.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
            }
        } else {
            getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                    | View.SYSTEM_UI_FLAG_FULLSCREEN | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION);
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle etat) {
        super.onSaveInstanceState(etat);
        web.saveState(etat);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    /** Sert assets/site/, avec les URL propres du site : / → index.html, /fiches → fiches.html. */
    private class SiteHandler implements WebViewAssetLoader.PathHandler {
        @Override
        public WebResourceResponse handle(String chemin) {
            if (chemin.isEmpty() || chemin.endsWith("/")) chemin += "index.html";
            WebResourceResponse rep = ouvrir(chemin);
            if (rep == null && !chemin.contains(".")) rep = ouvrir(chemin + ".html");
            return rep != null ? rep : new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", null, null);
        }

        private WebResourceResponse ouvrir(String chemin) {
            try {
                InputStream in = getAssets().open("site/" + chemin);
                return new WebResourceResponse(type(chemin), null, in);
            } catch (IOException e) {
                return null;
            }
        }

        private String type(String c) {
            c = c.toLowerCase();
            if (c.endsWith(".html")) return "text/html";
            if (c.endsWith(".js")) return "application/javascript";
            if (c.endsWith(".css")) return "text/css";
            if (c.endsWith(".png")) return "image/png";
            if (c.endsWith(".jpg") || c.endsWith(".jpeg")) return "image/jpeg";
            if (c.endsWith(".webp")) return "image/webp";
            if (c.endsWith(".svg")) return "image/svg+xml";
            if (c.endsWith(".webmanifest")) return "application/manifest+json";
            if (c.endsWith(".glb")) return "model/gltf-binary";
            return "application/octet-stream";
        }
    }
}
