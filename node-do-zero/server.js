import { createServer } from 'node:http'
import chalk from 'chalk'

const server = createServer((request, response) => {
    response.write("lorem ipsum lorem ipsum")

    return response.end()
})

server.listen(3333)