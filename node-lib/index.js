import fs from "fs"
import chalk from "chalk"

function handleError(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

async function getFile(pathFile) {
    try {
        const enconding = 'utf-8'
        const text = await fs.promises.readFile
            (pathFile, enconding)
        console.log(chalk.green(text))
    } catch (erro) {
        handleError(erro)
    }
}

/*
promise com then()

function getFile(pathFile) {
    const enconding = 'utf-8'
    fs.promises
        .readFile(pathFile, enconding)
        .then((text) => console.log(chalk.green(text)))
        .catch(handleError)
}
*/

getFile('./arquivos/texto.md')
getFile('./arquivos/')