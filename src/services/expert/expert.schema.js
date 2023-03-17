// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const expertSchema = {
  $id: 'Expert',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name', 'profession', 'reputation'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    profession: { type: 'string' },
    reputation: { type: 'number' },
    bio: { type: 'string' },
    joined: { type: 'number' },
    city: { type: 'string' },
    services: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 1,
    },
  }
}
export const expertValidator = getValidator(expertSchema, dataValidator)
export const expertResolver = resolve({})

export const expertExternalResolver = resolve({})

// Schema for creating new data
export const expertDataSchema = {
  $id: 'ExpertData',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...expertSchema.properties
  }
}
export const expertDataValidator = getValidator(expertDataSchema, dataValidator)
export const expertDataResolver = resolve({})

// Schema for updating existing data
export const expertPatchSchema = {
  $id: 'ExpertPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...expertSchema.properties
  }
}
export const expertPatchValidator = getValidator(expertPatchSchema, dataValidator)
export const expertPatchResolver = resolve({})

// Schema for allowed query properties
export const expertQuerySchema = {
  $id: 'ExpertQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(expertSchema.properties)
  }
}
export const expertQueryValidator = getValidator(expertQuerySchema, queryValidator)
export const expertQueryResolver = resolve({})
