// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { expertClient } from './services/expert/expert.shared.js'

import { topicsClient } from './services/topics/topics.shared.js'

import { questionsClient } from './services/questions/questions.shared.js'

import { messagesClient } from './services/messages/messages.shared.js'

import { helloClient } from './services/hello/hello.shared.js'

/**
 * Returns a  client for the feathers-app app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = (connection, authenticationOptions = {}) => {
  const client = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(helloClient)

  client.configure(messagesClient)

  client.configure(questionsClient)

  client.configure(topicsClient)

  client.configure(expertClient)

  return client
}
