// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  expertDataValidator,
  expertPatchValidator,
  expertQueryValidator,
  expertResolver,
  expertExternalResolver,
  expertDataResolver,
  expertPatchResolver,
  expertQueryResolver
} from './expert.schema.js'
import { ExpertService, getOptions } from './expert.class.js'
import { expertPath, expertMethods } from './expert.shared.js'

export * from './expert.class.js'
export * from './expert.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const expert = (app) => {
  // Register our service on the Feathers application
  app.use(expertPath, new ExpertService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: expertMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(expertPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(expertExternalResolver), schemaHooks.resolveResult(expertResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(expertQueryValidator), schemaHooks.resolveQuery(expertQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(expertDataValidator), schemaHooks.resolveData(expertDataResolver)],
      patch: [schemaHooks.validateData(expertPatchValidator), schemaHooks.resolveData(expertPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
