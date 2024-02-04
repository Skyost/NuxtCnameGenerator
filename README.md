# NuxtCnameGenerator

A Github Pages CNAME generator for Nuxt applications.

## Usage

First, add `nuxt-cname-generator` dependency to your project.

```bash
# Using pnpm
pnpm add -D nuxt-cname-generator

# Using yarn
yarn add --dev nuxt-cname-generator

# Using npm
npm install --save-dev nuxt-cname-generator
```

Then, add `nuxt-cname-generator` to the `modules` section of `nuxt.config.ts`.

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-cname-generator'
  ]
})
```

Finally, configure it in your `nuxt.config.ts`.

```ts
export default defineNuxtConfig({
  // Other config options.
  cname: {
    host: 'example.com'
  }
})
```

That's it !

## License

Licensed under the MIT license. See [here](https://github.com/Skyost/ThatLatexLib/blob/master/LICENSE).
