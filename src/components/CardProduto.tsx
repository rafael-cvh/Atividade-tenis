interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface Props {
  produto: Produto;
}

function CardProduto({ produto }: Props) {
  return (
    <div className="card">
      <div className="imagem-produto">
        <img
          src={produto.thumbnail}
          alt={produto.title}
        />
      </div>

      <div className="informacoes">
        <h3>{produto.title}</h3>
        <p>Tênis masculino</p>
        <strong>
          R$ {produto.price.toFixed(2).replace(".", ",")}
        </strong>
      </div>
    </div>
  );
}

export default CardProduto;