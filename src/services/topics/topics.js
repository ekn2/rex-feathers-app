// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  topicsDataValidator,
  topicsPatchValidator,
  topicsQueryValidator,
  topicsResolver,
  topicsExternalResolver,
  topicsDataResolver,
  topicsPatchResolver,
  topicsQueryResolver
} from './topics.schema.js'
import { TopicsService, getOptions } from './topics.class.js'
import { topicsPath, topicsMethods } from './topics.shared.js'

export * from './topics.class.js'
export * from './topics.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const topics = (app) => {
  // Register our service on the Feathers application
  app.use(topicsPath, new TopicsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: topicsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(topicsPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(topicsExternalResolver), schemaHooks.resolveResult(topicsResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(topicsQueryValidator), schemaHooks.resolveQuery(topicsQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(topicsDataValidator), schemaHooks.resolveData(topicsDataResolver)],
      patch: [schemaHooks.validateData(topicsPatchValidator), schemaHooks.resolveData(topicsPatchResolver)],
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
