export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          BretLab
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Bienvenido a tu plataforma de oficios y servicios
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Buscar Trabajadores
            </h2>
            <p className="text-gray-600">
              Encuentra profesionales calificados para tus proyectos
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Reservas
            </h2>
            <p className="text-gray-600">
              Agenda citas y reservas con trabajadores
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Autenticación
            </h2>
            <p className="text-gray-600">
              Inicia sesión o regístrate para acceder a todas las funciones
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
