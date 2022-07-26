import buscaArquivo from "../index.mjs";

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('buscaArquivo:', () => {
  it('deve ser uma função', () => {
    expect(typeof buscaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await buscaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos/texto1.md') 
    expect(resultado).toEqual(arrayResult)
  })
  it('deve retornar mensagem "não há links"', async () => {
    const resultado = await buscaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('não há links');
  })
  it('deve lançar um erro na falta de arquivo', () => {
    async function capturaErro() {
      await buscaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')
      expect(capturaErro).toThrowError(/não há arquivo no caminho/)
    }
  })
})