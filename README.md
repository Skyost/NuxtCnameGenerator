# NuxtCnameGenerator

A Github Pages CNAME generator for Nuxt applications.

## Usage

1. Add `nuxt-cname-generator` dependency to your project.

```bash
# Using pnpm
pnpm add -D nuxt-cname-generator

# Using yarn
yarn add --dev nuxt-cname-generator

# Using npm
npm install --save-dev nuxt-cname-generator
```

2. Add `nuxt-cname-generator` to the `modules` section of `nuxt.config.ts`.

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-cname-generator'
  ]
})
```

That's it !

## License

Licensed under the MIT license. See [here](https://github.com/Skyost/ThatLatexLib/blob/master/LICENSE).
