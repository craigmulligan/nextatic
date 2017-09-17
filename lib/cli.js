#!/usr/bin/env node
const capitano = require('capitano')
const nextatic = require('./')
const pkg = require('../package.json')
// const path = require('path')

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
  return require(`${process.cwd()}/nextatic.config.js`)
}

nextatic(getConfig())

// capitano.command({
//   signature: '*',
//   description: 'Run nextatic dev server',
//   action: () => {
//     nextatic.dev()
//   }
// })

capitano.command({
  signature: 'export',
  description: 'Run nextatic dev server',
  action: async () => {
    try {
      await nextatic.export()
      console.log('success')
      process.exit(0)
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }
})

capitano.run(process.argv, error => {
  if (error != null) {
    throw error
  }
})
