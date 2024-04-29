import getFile from './index.js'
import chalk from 'chalk'
import fs from 'fs'

const path = process.argv

function printList(result, identifier = '') {
    console.log(
        chalk.yellow('lista de links'),
        chalk.black.bgGreen(identifier),
        result)
}

async function processText(argument) {
    const path = argument[2]

    try {
        fs.lstatSync(path)
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('arquivo ou diretório não existe')
            return
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await getFile(argument[2])
        printList(result)
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path)
        files.forEach(async (fileName) => {
            const lista = await getFile(`${path}/${fileName}`)
            printList(lista, fileName)
        })
    }
}

processText(path)