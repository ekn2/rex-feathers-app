// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const topicsSchema = {
  $id: 'Topics',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'text'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    udc_code: { type: 'string' },
    description: { type: 'string' }
  }
}
export const topicsValidator = getValidator(topicsSchema, dataValidator)
export const topicsResolver = resolve({})

export const topicsExternalResolver = resolve({})

// Schema for creating new data
export const topicsDataSchema = {
  $id: 'TopicsData',
  type: 'object',
  additionalProperties: false,
  required: ['name', 'description', 'udc_code'],
  properties: {
    ...topicsSchema.properties
  }
}
export const topicsDataValidator = getValidator(topicsDataSchema, dataValidator)
export const topicsDataResolver = resolve({})

// Schema for updating existing data
export const topicsPatchSchema = {
  $id: 'TopicsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...topicsSchema.properties
  }
}
export const topicsPatchValidator = getValidator(topicsPatchSchema, dataValidator)
export const topicsPatchResolver = resolve({})

// Schema for allowed query properties
export const topicsQuerySchema = {
  $id: 'TopicsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(topicsSchema.properties)
  }
}
export const topicsQueryValidator = getValidator(topicsQuerySchema, queryValidator)
export const topicsQueryResolver = resolve({})
