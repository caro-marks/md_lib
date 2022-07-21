import buscaArquivo from "./index.mjs";
import { validaURLs } from "./validacaoHttp.mjs";

const args = process.argv

async function processaTexto(caminho) {
  const resultado = await buscaArquivo(caminho[2])
  if (caminho[3] === 'validar') return await validaURLs(resultado)
  return resultado
}

console.log(await processaTexto(args))