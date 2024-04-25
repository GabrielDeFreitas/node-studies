import fs from "fs"
import chalk from "chalk"

function handleError(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

function getFile(pathFile) {
    const enconding = "utf-8"
    fs.readFile(pathFile, enconding, (erro, text) => {
        if (erro) {
            handleError(erro)
        }
        console.log(chalk.green(text))
    })
}

getFile('./arquivos/texto.md')
