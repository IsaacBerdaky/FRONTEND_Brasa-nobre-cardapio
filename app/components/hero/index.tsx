import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center text-white">
            <Image
                src="/assets/hero-background.jpg"
                alt="Imagem de um cardápio digital"
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Conteúdo do Hero */}
            <div className="relative z-10 text-center px-4 w-full md:w-3/4 lg:w-1/2 py-8">
                <h1 className="text-1xl md:text-2xl font-bold mb-4 text-yellow-400 italic tracking-widest">★ Desde 1987 ★</h1>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Bem-vindo a <span className="text-yellow-400">Brasa Nobre</span>
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Na Brasa Nobre, cada corte é preparado na brasa com excelência e sabor incomparável. Um cardápio selecionado que transforma cada refeição em uma experiência inesquecível.
                </p>

                <div className="mt-4 text-yellow-400 italic tracking-wide bg-black/60 inline-block px-4 py-2 rounded-lg">
                    ★★★★★<span className="text-white"> | 4.9/5 (4000+ avaliações)</span>
                </div>
            </div>
        </section>
    );
}