import { expert } from './expert/expert.js'

import { topics } from './topics/topics.js'

import { questions } from './questions/questions.js'

import { messages } from './messages/messages.js'

import { hello } from './hello/hello.js'

export const services = (app) => {
  app.configure(expert)

  app.configure(topics)

  app.configure(questions)

  app.configure(messages)

  app.configure(hello)

  // All services will be registered here
}
