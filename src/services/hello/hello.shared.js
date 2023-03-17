export const helloPath = 'hello'

export const helloMethods = ['find', 'get', 'create', 'patch', 'remove']

export const helloClient = (client) => {
  const connection = client.get('connection')

  client.use(helloPath, connection.service(helloPath), {
    methods: helloMethods
  })
}
