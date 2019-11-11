## Integrating a Diez Project into an existing Android application

### Requirements and installation

Diez works in macOS, Windows, and Linux and only requires Node.js >= 7.10.1. For specific instructions on how to install Diez please refer to the [Set Up guide](/getting-started/#set-up).

This guide assumes that you already have a Diez project.

### Diez as a library

In a typical setup, you'll have a folder that contains your design system definitions and a separate folder with your Android project.

After you [compile](#compiling), a library module with your design system will be generated in a location relative to the current working directory at `build/diez-<name>-android`, where `<name>` is the name of your Diez project in kebab case.

After that, you can consume your Design System depending on it in your `build.gradle`:

```gradle
implementation project(':diez_project_name')
```

### Compiling

The Diez compiler can compile your design system in two modes: _normal_ and _hot_.

#### Development flow

`hot` mode is used for development and will watch your Diez project for file changes and hot reload your code.

`hot` mode also comes with an integrated development server that will take care of serving assets like images and fonts for you.

To start your development server you can run:

```bash
$ diez hot -t android
```

#### Build flow

Once you are ready to build your application, you need to compile your files:

```bash
$ diez compile -t android
```

You can always inspect the output by digging into the `build` folder after building.

### Accessing Components

Diez comes packaged with many prefabs that you can use to define your [Design Tokens](/glossary#tokens). All of the properties defined on prefabs are available to you along with a number of extensions and helpers to make interacting with them as seamless as possible.

```kotlin
import org.diez.projectname.*

class MainActivity ... {
  override fun onCreate(...) {
    // ...
    Diez(
      DesignSystem(),
      viewGroup
    ).attach(fun(component) {
      runOnUiThread {
          // ...
      }
    })
  }
}
```
