import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

// 1. Simplificamos o tipo Props: Agora o container só precisa da lista de produtos da API
type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
