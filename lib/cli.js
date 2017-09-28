#!/usr/bin/env node
const nextatic = require('./')
const capitano = require('capitano')
const pkg = require('../package.json')

if (pkg.peerDependencies) {
  Object.keys(pkg.peerDependencies).forEach(dependency => {
    try {
      // When 'npm link' is used it checks the clone location. Not the project.
      require.resolve(dependency)
    } catch (err) {
      console.warn(
        `The module '${dependency}' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install --save ${dependency}'`
      )
    }
  })
}

const getConfig = () => {
  try () {
    return require(`${process.cwd()}/nextatic.config.js`)
  } catch (err) {
    console.log(`no nextatic.config.js found in ${process.cwd()}`)
  }
}

try {
  nextatic(getConfig())
} catch (error) {
  throw error
}

capitano.command({
  signature: '*',
  description: 'Run nextatic dev server',
  action: () => {
    try {
      nextatic.dev()
    } catch (error) {
      throw error
    }
  }
})

capitano.command({
  signature: 'export',
  description: 'Run nextatic dev server',
  action: async () => {
    try {
      console.log('exporting!')
      await nextatic.export()
      console.log('success!')
      process.exit(0)
    } catch (error) {
      throw error
    }
  }
})

capitano.run(process.argv, error => {
  if (error != null) {
    throw error
  }
})
