import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Carregando from "./Carregando.tsx";
import CardProduto from "./CardProduto.tsx";
import "/.App.css";

interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
}

