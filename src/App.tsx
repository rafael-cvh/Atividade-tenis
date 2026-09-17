import { useEffect, useState } from "react";
import CardProduto from "./components/CardProduto";
import Carregando from "./components/Carregando";
import "./App.css";

interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados.products);
        setCarregando(false);
      })
      .catch((erro) => {
        console.log("Erro ao buscar produtos:", erro);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <Carregando />;
  }

  return (
    <div className="pagina">
      <header>
        <div className="topo">
          <div className="pesquisa">
            🔍 Pesquisar produtos
          </div>

          <div className="icones">
            ♡ 🛒
          </div>
        </div>
      </header>

      <main>
        <div className="titulo">
          <h2>Tênis masculinos</h2>

          <button>Ordenar por ▾</button>
        </div>

        <div className="produtos">
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;