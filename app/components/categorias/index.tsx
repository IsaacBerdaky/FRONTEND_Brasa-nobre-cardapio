"use client"

interface CategoriasProps {
  setCategoria: (categoria: string) => void
  categoriaSelecionada: string
}

export default function Categorias({
  setCategoria,
  categoriaSelecionada,
}: CategoriasProps) {
  const categorias = [
    { emoji: "🍽️", text: "Todos" },
    { emoji: "🥩", text: "Carnes" },
    { emoji: "🥘", text: "Porcoes" },
    { emoji: "🥗", text: "Acompanhamentos" },
    { emoji: "🥤", text: "Bebidas" },
    { emoji: "🍰", text: "Sobremesas" },
  ]

  return (
    <div className="w-full flex items-center justify-center border-b border-gray-500">
      <div className="w-full flex gap-4 py-3 px-4 scrollbar-hide overflow-x-auto">
        <div className="flex gap-4 mx-auto">
          {categorias.map((categoria) => (
            <button
              key={categoria.text}
              onClick={() => setCategoria(categoria.text)}
              className={`flex items-center justify-center gap-2 border rounded-full px-4 py-2 whitespace-nowrap transition-colors
                ${
                  categoriaSelecionada === categoria.text
                    ? "bg-white text-black border-white"
                    : "bg-black border-gray-500 hover:bg-gray-900 text-white"
                }`}
            >
              <span className="text-lg">{categoria.emoji}</span>
              <span className="text-sm font-medium">{categoria.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}