import { HelloService, getOptions } from './hello.class.js'
import { helloPath, helloMethods } from './hello.shared.js'

export * from './hello.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const hello = (app) => {
  // Register our service on the Feathers application
  app.use(helloPath, new HelloService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: helloMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(helloPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: [],
      get: [],
      create: [],
      patch: [],
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
