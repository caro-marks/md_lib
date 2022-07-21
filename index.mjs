import chalk from 'chalk'
import { promises } from 'fs'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const resultados = []
  let temp
  while((temp = regex.exec(texto)) !== null) {
    resultados.push({texto: temp[1], url: temp[2]})
  }
  return resultados.length === 0 ? 'Não há links' : resultados
}

function trataError(erro) {
  throw new Error(chalk.red(erro.code, 'algum erro lek'))
}

async function buscaArquivo(caminho) {
  try {
    const texto = await promises.readFile(caminho, 'utf-8')
    return extraiLinks(texto)
  } catch(erro) {
    trataError(erro)
  }
}

export default buscaArquivo