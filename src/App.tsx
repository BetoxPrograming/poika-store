import './App.css'

// App es un componente de React escrito con TypeScript/TSX.
// Un componente es una función que devuelve contenido visual.
function App() {
  // El return devuelve JSX.
  // JSX es una sintaxis parecida a HTML, pero escrita dentro de TypeScript.
  return (
      <main className="app">
        {/* className se usa en React en lugar de class. */}

        <section className="hero">
          {/* Esta sección funciona como el bloque principal de presentación. */}

          <p className="hero__label">Proyecto paralelo de práctica</p>

          <h1>Póika Store</h1>

          <p className="hero__description">
            Tienda desarrollada con React, TypeScript y Vite, siguiendo como guía
            el proyecto Java del curso Web y Patrones.
          </p>
        </section>
      </main>
  )
}

// export default permite que este componente sea usado desde otro archivo.
// En este proyecto, main.tsx importa App y lo monta en el navegador.
export default App