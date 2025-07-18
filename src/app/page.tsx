import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">
          ¡Hola desde GitHub Pages con Next.js!
        </h1>
        <p className="text-lg">
          Tu despliegue está funcionando{" "}
          <span className="font-semibold text-green-600">perfectamente</span>.
        </p>
        <a
          href="https://github.com/ElkinSanchez23/github-pages-test"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ver código en GitHub
        </a>
        <h1 className="text-xl text-purple-700 font-medium">
          ✅ Cuarta Prueba: ¡todo va no tan bien!
        </h1>
        <h1 className="text-xl text-purple-700 font-medium">
          ✅ Quinta Prueba: ¡todo va bien!
        </h1>
      </div>
    </main>
  );
}
