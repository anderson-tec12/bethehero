import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import React from 'react';

//div pra tudo 
//view no lugar da div "container"
//text usada pra qualquer tipo de texto
// não tem semantica
// tag style que recebe um obj com os estilos
//todos os elementos são display:flex
//propriedade nao pode ter -
//não existe ereança de estilo

import Router from './src/routes'
export default function App() {
  return (
    <Router />
  );
}
