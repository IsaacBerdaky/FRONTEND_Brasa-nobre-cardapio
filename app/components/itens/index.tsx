"use client"

import { useState, useEffect } from "react"

export default function MenuList({ categoria }: { categoria: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const itens = [
  // 🥩 Carnes
  {
    image: "/images/picanha.jpg",
    name: "Picanha na Brasa",
    ingredient: "Picanha grelhada com sal grosso",
    desc: "Corte nobre preparado na churrasqueira, macio e suculento.",
    price: "R$ 89,90",
    tag: "Carnes",
  },
  {
    image: "/images/fraldinha.jpg",
    name: "Fraldinha Assada",
    ingredient: "Fraldinha marinada e assada lentamente",
    desc: "Carne extremamente macia, temperada com ervas especiais.",
    price: "R$ 69,90",
    tag: "Carnes",
  },
  {
    image: "/images/costela.jpg",
    name: "Costela BBQ",
    ingredient: "Costela suína ao molho barbecue",
    desc: "Assada lentamente e finalizada com molho artesanal.",
    price: "R$ 74,90",
    tag: "Carnes",
  },

  // 🥘 Porcoes
  {
    image: "/images/batata-frita.jpeg",
    name: "Batata Frita",
    ingredient: "Porção de batata frita crocante",
    desc: "Batatas selecionadas, fritas até ficarem douradas e crocantes.",
    price: "R$ 25,00",
    tag: "Porcoes",
  },
  {
    image: "/images/mandioca.jpg",
    name: "Mandioca Frita",
    ingredient: "Mandioca crocante por fora e macia por dentro",
    desc: "Servida com molho especial da casa.",
    price: "R$ 29,90",
    tag: "Porcoes",
  },
  {
    image: "/images/anel-cebola.webp",
    name: "Anéis de Cebola",
    ingredient: "Cebola empanada e frita",
    desc: "Anéis crocantes acompanhados de molho agridoce.",
    price: "R$ 27,90",
    tag: "Porcoes",
  },

  // 🥗 Acompanhamentos
  {
    image: "/images/arroz.jpg",
    name: "Arroz Branco",
    ingredient: "Arroz soltinho temperado",
    desc: "Arroz preparado diariamente com tempero leve.",
    price: "R$ 15,00",
    tag: "Acompanhamentos",
  },
  {
    image: "/images/farofa.jpg",
    name: "Farofa Especial",
    ingredient: "Farofa com bacon e cebola",
    desc: "Mistura crocante com toque defumado.",
    price: "R$ 18,00",
    tag: "Acompanhamentos",
  },

  // 🥤 Bebidas
  {
    image: "/images/coca.jpg",
    name: "Coca-Cola 2L",
    ingredient: "Refrigerante de cola 2 litros",
    desc: "Bebida gelada perfeita para acompanhar seu prato.",
    price: "R$ 12,00",
    tag: "Bebidas",
  },
  {
    image: "/images/suco-laranja.jpeg",
    name: "Suco de Laranja",
    ingredient: "Suco natural feito na hora",
    desc: "Preparado com laranjas frescas e sem conservantes.",
    price: "R$ 14,00",
    tag: "Bebidas",
  },
  {
    image: "/images/agua.jpg",
    name: "Água Mineral",
    ingredient: "Garrafa 500ml",
    desc: "Água mineral sem gás, bem gelada.",
    price: "R$ 6,00",
    tag: "Bebidas",
  },

  // 🍰 Sobremesas
  {
    image: "/images/pudim.jpg",
    name: "Pudim de Leite",
    ingredient: "Pudim tradicional com calda caramelizada",
    desc: "Sobremesa clássica com textura cremosa.",
    price: "R$ 16,00",
    tag: "Sobremesas",
  },
  {
    image: "/images/mousse.jpg",
    name: "Mousse de Chocolate",
    ingredient: "Mousse leve e aerado",
    desc: "Feito com chocolate meio amargo de alta qualidade.",
    price: "R$ 18,00",
    tag: "Sobremesas",
  },
  {
    image: "/images/sorvete.jpg",
    name: "Taça de Sorvete",
    ingredient: "3 bolas de sorvete artesanal",
    desc: "Sabores variados com cobertura especial.",
    price: "R$ 19,90",
    tag: "Sobremesas",
  },
]

  const itensFiltrados =
    categoria === "Todos"
      ? itens
      : itens.filter((item) => item.tag === categoria)

  useEffect(() => {
    setOpenIndex(null)
  }, [categoria])

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-120 gap-y-5">
      {itensFiltrados.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={item.name}
            className="bg-[#0B1016] border border-[#1A2332] rounded-2xl overflow-hidden shadow-lg w-full sm:w-96"
          >
            {/* Imagem */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              {/* Badge categoria */}
              <span className="absolute top-4 right-4 bg-black/70 backdrop-blur px-3 py-1 text-xs rounded-full text-white border border-white/10">
                {item.tag}
              </span>

              {/* Overlay degradê */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1016] via-transparent to-transparent" />
            </div>

            {/* Conteúdo */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">
                {item.name}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {item.ingredient}
              </p>

              {isOpen && (
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              )}

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-red-500">
                  {item.price}
                </span>

                {item.desc && (
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="text-sm px-4 py-2 rounded-full border border-[#2A3548] text-gray-300 hover:bg-[#101926] transition"
                  >
                    {isOpen ? "Ver menos ←" : "Ver mais →"}
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}