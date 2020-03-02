## Integrating a Diez Project into an existing Android application

### Requirements and installation

Diez works in macOS, Windows, and Linux and only requires Node.js >= 7.10.1. For specific instructions on how to install Diez please refer to the [Set Up guide](/getting-started/#set-up).

This guide assumes that you already have a Diez project.

### Diez as a library

For a simple setup, you can have a folder that contains your Diez project (design token definitions) and a separate folder with your Android project.

After you [compile](#compiling), a library module with your design tokens will be generated in a location relative to the current working directory at `build/diez-<name>-android`, where `<name>` is the name of your Diez project in kebab case.

After that, you can consume your design language by adding it as a dependency in your `build.gradle`:

```gradle
implementation project(':diez_project_name')
```

### Diez as a stand-alone repository

In a more robust setup, you should create a stand-alone repository for your Diez project and a separate repository for your Android project.  This is the recommended pattern when you have multiple codebases consuming a single Diez design language.

After you [compile](#compiling) your Diez project, a library module with your design tokens will be generated inside your Diez project.  We recommend using GitHub's recently launched [package registry](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages) for versioning and distributing your built modules to consuming codebases, though you can also use solutions like symlinking or `../../relative-paths`.

After that, you can consume your design language by adding it as a dependency in your `build.gradle`:

```gradle
implementation project(':diez_project_name')
```

### Compiling

The Diez compiler can compile your design tokens in two modes: _normal_ and _hot_.

#### Development flow

`hot` mode is used for development and will watch your Diez project for file changes and hot reload your code.

`hot` mode also comes with an integrated development server that will take care of serving assets like images and fonts for you.

To start your development server you can run:

```bash
$ diez hot -t android
```

#### Build flow

Once you are ready to build your application, you need to compile your Diez project:

```bash
$ diez compile -t android
```

You can always inspect the output by digging into the `build` folder after compiling.

### Accessing Components

Diez comes packaged with many prefabs that you can use to define your [Design Tokens](/glossary#tokens). All of the properties defined on prefabs are available to you along with a number of extensions and helpers to make interacting with them as seamless as possible.

```kotlin
import org.diez.projectname.*

class MainActivity ... {
  override fun onCreate(...) {
    // ...
    Diez(
      DesignLanguage(),
      viewGroup
    ).attach(fun(component) {
      runOnUiThread {
          // ...
      }
    })
  }
}
```
