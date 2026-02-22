"use client"

import { useState } from "react";
import Categorias from "../categorias";
import Itens from "../itens";

export default function Cardapio() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")

    return (
        <section className="w-full flex items-center justify-center flex-col pb-5">
            <Categorias 
                setCategoria={setCategoriaSelecionada}
                categoriaSelecionada={categoriaSelecionada}
            />
            <div className="w-full sm:w-215 h-full min-h-screen my-4 px-3">
                <h1 className="text-2xl font-bold text-gray-300">Cardápio</h1>
                <h2 className="text-lg font-medium text-gray-500 mb-4">14 itens disponíveis</h2>

                <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-115 gap-y-5">
                    <Itens categoria={categoriaSelecionada} />
                </div>
            </div>
        </section>
    );
}