import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function AddContent({conteudo, bloco, status}) {
  return (
    <div className="container">
      <main>
        <h2>O conteúdo é: {conteudo}</h2>
        <h3>O status é: {status}</h3>
        <h3>O bloco é: {bloco}</h3>
      </main>
    </div>
  )
}
class Content extends React.Component {
  render() {
    return (
      conteudos.map((element) => AddContent(element))
    );
  };
}
export default Content;