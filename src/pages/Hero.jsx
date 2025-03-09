import '../global.css'



function Hero(){
    return(
        <>
            <div className="relative w-full h-screen bg-[url('./images/fondo.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center">
                    <h1 className="text-6xl font-bold text-white">Taller QuickFix</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
                <h3 className="text-5xl font-bold text-primary border-b-4 pb-2">¿Quiénes somos?</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                QuickFix es un taller mecánico que busca ser uno de los mejores talleres mecánicos de la capital. Estamos ubicados en Avenida San Jerónimo 914, 10200 La Magdalena Contreras, Distrito Federal.
                Estamos especializados en dar mantenimiento preventivo a automóviles, garantizando que el servicio que damos es de alta calidad.
                </p>

                <h3 className="text-5xl font-bold text-primary border-b-4 pb-2">Misión</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                Brindar soluciones integrales y confiables en el mantenimiento y reparación de automóviles, garantizando la satisfacción del cliente mediante un servicio de calidad y atención personalizada.
                </p>

                <h3 className="text-5xl font-bold text-primary border-b-4 pb-2">Visión</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                Ser reconocidos como el taller mecánico de referencia en la región, destacando por nuestra innovación tecnológica, compromiso con el medio ambiente y excelencia en el servicio.
                </p>

                <h3 className="text-5xl font-bold text-primary border-b-4 pb-2">Objetivo General</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                Implementar un sistema eficiente de gestión para optimizar la administración de clientes, vehículos y servicios ofreciendo un proceso transparente y confiable que eleve la calidad del taller y la fidelidad del cliente.
                </p>
            </div>

        </>
    )
}

export default Hero