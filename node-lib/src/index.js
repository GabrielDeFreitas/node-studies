import fs from 'fs'
import chalk from 'chalk'

function extractLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm
    const catches = [...text.matchAll(regex)]
    const results = catches.map(cat => ({ [cat[1]]: cat[2] }))
    return results
}

function handleError(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

async function getFile(pathFile) {
    try {
        const encoding = 'utf-8'
        const text = await fs.promises.readFile(pathFile, encoding)
        console.log(extractLinks(text))
    } catch (erro) {
        handleError(erro)
    }
}

export default getFile