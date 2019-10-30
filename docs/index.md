---
layout: Home
---

::: slot developer-toolkit-example
```ts
import {Color, Image, Typograph, Font} from '@diez/prefabs'

const palette = {
  primary: Color.rgb(86, 35, 238)
}

const images = {
  logo: Image.responsive('assets/logo.png')
}

const typography = {
  heading1: new Typograph({
    font: Font.fromFile('assets/my-font.ttf'),
    fontSize: 24,
    color: palette.primary
  })
}

export const ds = {palette, images, typography}
```
:::
