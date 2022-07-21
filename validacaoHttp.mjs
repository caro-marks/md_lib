import fetch from "node-fetch"

const lidaErros = (erro) => {
  throw new Error(erro.message)
}

const checaStatus = async (urls) => {
  try {
    const statusArray = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url)
        return `${response.status} - ${response.statusText}`
      })
    )
    return statusArray
  } catch(erro) {
    lidaErros(erro)
  }
}

const buscaURLs = (links) => {
  return links.map(link => link.url)
}

export const validaURLs = async (links) => {
  const urls = buscaURLs(links)
  const statusArray = await checaStatus(urls)
  const resultados = links.map((objeto, indice) => {
    const validado = {...objeto, status: statusArray[indice]}
    return validado
  })
  return resultados
}