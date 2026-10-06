import java.util.Properties

plugins {
    id("com.android.application")
}

// Clé de signature : lue depuis android/keystore.properties, jamais versionné.
val signature = rootProject.file("keystore.properties").takeIf { it.exists() }?.let { f ->
    Properties().apply { f.inputStream().use { load(it) } }
}

android {
    namespace = "fr.zaidoumhd.brigadierchef"
    compileSdk = 37

    defaultConfig {
        applicationId = "fr.zaidoumhd.brigadierchef"
        minSdk = 24
        targetSdk = 37
        versionCode = 3
        versionName = "1.2.0"
    }

    signingConfigs {
        if (signature != null) {
            create("publication") {
                storeFile = file(signature.getProperty("storeFile"))
                storePassword = signature.getProperty("storePassword")
                keyAlias = signature.getProperty("keyAlias")
                keyPassword = signature.getProperty("keyPassword")
            }
        }
    }

    buildTypes {
        release {
            signingConfig = signingConfigs.findByName("publication")
            isMinifyEnabled = false
        }
    }
}

dependencies {
    implementation("androidx.webkit:webkit:1.14.0")
}

// Copie le site (racine du dépôt) dans les assets de l'APK, sous assets/site/.
abstract class CopierSite : DefaultTask() {
    @get:InputFiles
    abstract val source: ConfigurableFileCollection

    @get:OutputDirectory
    abstract val sortie: DirectoryProperty

    @get:Inject
    abstract val fs: FileSystemOperations

    @TaskAction
    fun copier() {
        fs.sync {
            from(source.asFileTree)
            into(sortie.dir("site"))
        }
    }
}

val copierSite = tasks.register<CopierSite>("copierSite") {
    // Seul le jeu 3D part dans l'APK, avec les questions (data.js).
    source.from(rootProject.fileTree("..") {
        include("data.js", "jeu3d/**")
    })
    sortie.set(layout.buildDirectory.dir("generated/site"))
}

androidComponents {
    onVariants { variant ->
        variant.sources.assets?.addGeneratedSourceDirectory(copierSite, CopierSite::sortie)
    }
}
