import fastify from "fastify"

const server = fastify()

server.get('/', () => {
    return 'Lorem ipsum'
})

server.get('/node', () => {
    return 'Node.js'
})

server.listen({
    port: 3333
})