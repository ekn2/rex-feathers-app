export const questionsPath = 'questions'

export const questionsMethods = ['find', 'get', 'create', 'patch', 'update', 'remove']

export const questionsClient = (client) => {
  const connection = client.get('connection')

  client.use(questionsPath, connection.service(questionsPath), {
    methods: questionsMethods
  })
}
