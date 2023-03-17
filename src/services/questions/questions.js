// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  questionsDataValidator,
  questionsPatchValidator,
  questionsQueryValidator,
  questionsResolver,
  questionsExternalResolver,
  questionsDataResolver,
  questionsPatchResolver,
  questionsQueryResolver
} from './questions.schema.js'
import { QuestionsService, getOptions } from './questions.class.js'
import { questionsPath, questionsMethods } from './questions.shared.js'

export * from './questions.class.js'
export * from './questions.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const questions = (app) => {
  // Register our service on the Feathers application
  app.use(questionsPath, new QuestionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: questionsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(questionsPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(questionsExternalResolver),
        schemaHooks.resolveResult(questionsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(questionsQueryValidator),
        schemaHooks.resolveQuery(questionsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(questionsDataValidator),
        schemaHooks.resolveData(questionsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(questionsPatchValidator),
        schemaHooks.resolveData(questionsPatchResolver)
      ],
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
