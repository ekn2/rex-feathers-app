export const expertPath = 'expert'

export const expertMethods = ['find', 'get', 'create', 'patch', 'remove']

export const expertClient = (client) => {
  const connection = client.get('connection')

  client.use(expertPath, connection.service(expertPath), {
    methods: expertMethods
  })
}
