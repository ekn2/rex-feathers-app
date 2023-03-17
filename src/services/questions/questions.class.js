import { MongoDBService } from '@feathersjs/mongodb'

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class QuestionsService extends MongoDBService {
  async create(data, params) {
    console.log(data);
    return super._create(data);
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('questions')),
    operators: ['$push'],
  }
}
