# www.diez.org

This project holds the source code for the diez.org website.  It includes a static site build with [VuePress](https://vuepress.vuejs.org) and a Diez design language used to power it.

### Getting started

You'd need the following to be installed in order to build this project locally:

- Node v10.16.3
- yarn v1.19.1

After cloning, run `yarn install` to install dependencies and set-up the repo as the [setup.sh](./scripts/setup.sh) is run as a preinstall hook.

### Deploying

1. Be sure to set up the repo by running `yarn`, which will also build and link the Diez design language.
2. Ensure everything is working fine locally and that the built site works fine.
3. Ensure you have the aws CLI installed.
3. Ensure you have set up the following env variables:

```bash
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
export DIEZ_WWW_DISTRIBUTION_SECRET=""
export DIEZ_WWW_DISTRIBUTION=""
```

4. Run `yarn deploy`
