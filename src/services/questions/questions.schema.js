// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const questionsSchema = {
  $id: 'Questions',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    title: { type: 'string' },
    body: { type: 'string' },
    author: { type: 'string'},
    timestamp: { type: 'number' },
    interested_count: { type: 'number' },
    answers_count: { type: 'number'},
    views_count: { type: 'number' },
    topics: {type: 'string'},
    answers: {
      type: 'array',
      items: {
        type: 'object'
      },
    },
    $push: { type: 'object' },
  },
}
export const questionsValidator = getValidator(questionsSchema, dataValidator)
export const questionsResolver = resolve({})

export const questionsExternalResolver = resolve({})

// Schema for creating new data
export const questionsDataSchema = {
  $id: 'QuestionsData',
  type: 'object',
  additionalProperties: false,
  required: ['title', 'body', 'author', 'timestamp', 'interested_count', 'answers_count', 'views_count'],
  properties: {
    ...questionsSchema.properties
  }
}
export const questionsDataValidator = getValidator(questionsDataSchema, dataValidator)
export const questionsDataResolver = resolve({})

// Schema for updating existing data
export const questionsPatchSchema = {
  $id: 'QuestionsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...questionsSchema.properties
  }
}
export const questionsPatchValidator = getValidator(questionsPatchSchema, dataValidator)
export const questionsPatchResolver = resolve({})

// Schema for allowed query properties
export const questionsQuerySchema = {
  $id: 'QuestionsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(questionsSchema.properties)
  }
}
export const questionsQueryValidator = getValidator(questionsQuerySchema, queryValidator)
export const questionsQueryResolver = resolve({})
