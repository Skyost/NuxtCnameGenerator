import { defineNuxtModule, createResolver, useLogger } from '@nuxt/kit'
import * as fs from 'fs'
import * as path from 'path'

/**
 * Module options TypeScript interface definition.
 */
export interface ModuleOptions {
  /**
   * The hostname to be used in the generated CNAME file.
   */
  host: string;
}

/**
 * The name of the CNAME generator module.
 */
const name = 'cname-generator'

/**
 * The logger instance.
 */
const logger = useLogger(name)

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'cname',
    compatibility: { nuxt: '^3.0.0' }
  },
  defaults: {
    host: 'localhost:3000'
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const filePath = resolver.resolve(nuxt.options.srcDir, 'node_modules/.cache/cname/CNAME')
    const fileDirectory = path.dirname(filePath)

    // Create directory if it doesn't exist.
    if (!fs.existsSync(fileDirectory)) {
      fs.mkdirSync(fileDirectory, { recursive: true })
    }

    // Add public asset configuration.
    nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || []
    nuxt.options.nitro.publicAssets.push({
      baseURL: '/',
      dir: path.dirname(filePath)
    })

    // Write CNAME file.
    let host = options.host
    try {
      host = (new URL(options.host)).host
    } catch (_) {
      // No need to log this as we still have an host name.
    }
    fs.writeFileSync(filePath, host)
    logger.success(`Generated CNAME for ${host}.`)
  }
})
