export const topicsPath = 'topics'

export const topicsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const topicsClient = (client) => {
  const connection = client.get('connection')

  client.use(topicsPath, connection.service(topicsPath), {
    methods: topicsMethods
  })
}
