import React, { useState } from 'react';

import { View, Text } from 'react-native';

import CampoInteiro from '../../../componentes/CampoInteiro';
import Botao from '../../../componentes/Botao';

import estilos from './estilos';

export default function Item({nome, preco, descricao, quantidade: quantidadeinicial}) {
  const [quantidade, setQuantidade] = useState(quantidadeinicial);
  const [total, setTotal] = useState(preco);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    calculaTotal(novaQuantidade)
    setQuantidade(novaQuantidade);
  }

  const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
  }

  return <>
    <View style={estilos.informacao} >
      <Text style={estilos.nome}>{ nome }</Text>
      <Text style={estilos.descricao}>{ descricao }</Text>
      <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).format(preco)}</Text>
    </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total:</Text>
            <Text style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(total)}</Text>
          </View>
        </View>
        <Botao valor="Remover do carrinho" acao={() => {}} />
      </View>
    
    <View style={estilos.divisor} />
  </>
}

/*
             
       { Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(preco)}
*/
  