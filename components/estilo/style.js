import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgb(37, 24, 109)',
  },

  titulo: {
    fontSize: 23,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'rgb(254, 254, 255)',
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 23,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'rgb(222, 137, 255)',
    marginBottom: 15
  },

  secaoCadastro: {
    width: '80%'
  },

  campoTexto: {
    backgroundImage: 'linear-gradient(45deg, #f2d5fc, #b58dfffb)',
    boxShadow: '0px 0px 10px rgba(213, 167, 231, 0.75)',
    marginVertical: 8,
    fontSize: 14,
    fontWeight: 400,
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 10
  },

  botaoEnviar: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#4777fc',
    boxShadow: '0px 0px 10px rgba(72, 144, 252, 0.56)',
    marginTop: 12,
    borderRadius: 20
  },

  textoBotaoEnviar: {
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 16
  },

  secaoConsulta: {
    alignItems: 'center'
  },

  cardProduto: {
    backgroundImage: 'linear-gradient(45deg, #d483fd, #7001bb)',
    width: 300,
    paddingVertical: 10,
    borderRadius: 10
  },
  
  linha: {
    alignSelf: 'center',
    backgroundColor: '#d09dff8f',
    width: '92%',
    marginVertical: 5,
    height: 1
  },

  nomeProduto: {
    paddingLeft: 10,
    fontWeight: '600',
    fontSize: 18,
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },

  descricaoProduto: {
    paddingLeft: 10,
    marginBottom: 3,
    fontWeight: '500',
    fontSize: 14,
    color: '#f8d3ff',
    textShadowColor: 'rgba(0, 0, 0, 0.18)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  botaoExcluir: {
    top: '68%',
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: '40%',
    backgroundImage: 'linear-gradient(270deg, #b501e2, #9b00e2)',
    boxShadow: '0px 1px 3px rgba(65, 3, 116, 0.45)',
    marginRight: 10,
    borderRadius: 20,
    paddingVertical: 5
  },

  textoExcluir: {
    fontWeight: '200',
    color: '#fff',
    fontWeight: 'bold'
  },

  paragrafoVazio: {
    marginTop: 5,
    color: '#ffa4eb'
  }
})