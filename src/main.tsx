import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importa los estilos generales de toda la aplicación.
import './index.css'

// Importa el componente principal App desde App.tsx.
import App from './App.tsx'

// Busca en index.html el elemento con id="root".
// Ese root es donde React va a montar la aplicación.
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* App es el componente principal que se muestra en pantalla. */}
        <App />
    </StrictMode>,
)