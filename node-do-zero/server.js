import fastify from "fastify"
import { DatabaseMemory } from './database.memory.js'

const server = fastify()

const database = new DatabaseMemory()

// Métodos HTTP:
// O protocolo HTTP, grande amigo de desenvolvedores backend, define os métodos de requisição responsáveis por executar os recursos de nossas APIs.
// GET (read) - Utilizado para ler ou recuperar uma representação de um recurso.
// POST (create) - Utilizado para criar novos recursos.
// PUT (update) - Cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados.
// DELETE (delete) - Utilizado para remover um recurso identificado por uma URI.
// PATCH -  Aplica modificações parciais a um recurso.

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.status(204).send
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send
})

server.listen({
    port: 3333
})