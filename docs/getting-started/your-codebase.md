## How to adopt Diez into multiple codebases

While we have guides for integrating your Diez project into existing projects ([iOS](/existing-project-integration/ios), [JavaScript](/existing-project-integration/JavasScript), [CSS/Sass](/existing-project-integration/css-sass)), we'll use this guide as an overview on how to use your Diez project across multiple codebases both in development and production .

If you're going to use your Diez project's compiled libraries (SDKs) across multiple codebases, **we recommend placing you Diez project in its own stand-alone GitHub repo.** Doing so will make it easier to develop, maintain, and version as its own entity.

### Publishing your Diez project's SDKs to package managers
After you've created and compiled your [Diez project](/getting-started/#set-up) and placed it in its own repo, you'll want navigate into its build folder (`cd build/your-package-web|ios|android`) and publish the compiled SDKs to your team's private package manager solution for each of your application targets.  We recommend GitHub's new [package manager](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages) as an excellent way to distribute & version your native packages between projects. After your packages are published, you'll need to reference them from your application codebases (E.g. for web, list it in your `package.json`).

### Developing your design language and applications simultaneously
As you may have noticed, you've already solved your team's cross-platform, versioned design token needs! But what if you want to develop and experiment with your Diez project *while* you also develop on your applications that consume it?

Let's use JavaScript (web) as an example. From your Diez project, cd into the build folder and run:
```bash
yarn && yarn link
```

Then wander over to the root of your application codebase and run:
```bash
yarn link <your-package>
```

After following these steps, you'll be able to develop locally on both your Diez project and your application codebase while still maintaining a production version of your Diez project on GitHub (your token definitions) and NPM (the a compiled SDK/package).

For more info on how to use your Diez project SDKs within your applications please reference the following guides: ([iOS](/existing-project-integration/ios), [JavaScript](/existing-project-integration/javascript), [CSS/Sass](/existing-project-integration/css-sass)).