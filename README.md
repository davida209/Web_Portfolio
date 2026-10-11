# Lester David — Portafolio

Portafolio personal de Lester David Uicab Gongora, estudiante de décimo cuatrimestre de Ingeniería en Desarrollo y Gestión de Software. Reúne proyectos web de turismo, construcción, educación y contenido, junto con información de formación y contacto.

## Funcionalidades

- Diseño adaptable a escritorio, tablet y móvil.
- Proyectos organizados por categoría, con filtros y fichas de detalles.
- Enlaces a las versiones publicadas de cada proyecto.
- Contacto por correo electrónico y WhatsApp, con opción para copiar el correo.
- Navegación por teclado, enlaces de acceso al contenido y respeto a la preferencia de movimiento reducido.

## Tecnologías

Vite, JavaScript, HTML y CSS. La aplicación se ejecuta en el navegador y se publica como un sitio estático. Las fuentes DM Sans e Inter se cargan desde Google Fonts, con alternativas locales.

## Desarrollo local

Requiere Node.js 22.12 o superior. El archivo `.nvmrc` especifica Node.js 22.

```bash
npm ci
npm run dev
```

## Compilación y vista previa

```bash
npm run build
npm run preview
```

Los archivos de producción se generan en `dist/`. Esta carpeta y `node_modules/` no se incluyen en Git.

## Estructura

```text
.github/workflows/ci.yml  Validación automática de la compilación
public/                  Archivos estáticos
src/data.js              Perfil y proyectos
src/main.js              Estructura e interacciones
src/style.css            Diseño y estilos adaptables
index.html               Metadatos y punto de entrada
vercel.json              Configuración de publicación
vite.config.js           Configuración de Vite
```

## Actualizar el contenido

El perfil y los proyectos se mantienen en `src/data.js`. Cada proyecto define su nombre, categoría, descripción, enlace y composición gráfica. Las tarjetas utilizan ilustraciones CSS. El teléfono de WhatsApp incluye el código de país.

## Flujo de trabajo

- `main`: versión de producción, conectada a Vercel.
- `develop`: integración de cambios para la siguiente versión.
- `feature/*`: funcionalidades y ajustes, creados desde `develop`.
- `release/*`: preparación de versiones cuando sea necesario.
- `hotfix/*`: correcciones urgentes creadas desde `main`, integradas también en `develop`.

Los cambios se revisan mediante pull requests. Antes de integrar una rama, debe pasar la compilación automática. Los mensajes de commit usan prefijos como `feat:`, `fix:`, `docs:` y `chore:`. Después de publicar una versión, `develop` se sincroniza con `main`.

## Despliegue en Vercel

El repositorio está conectado al proyecto de Vercel. Los cambios integrados en `main` activan el despliegue de producción.

| Configuración        | Valor           |
| -------------------- | --------------- |
| Framework            | Vite            |
| Instalación          | `npm ci`        |
| Compilación          | `npm run build` |
| Directorio de salida | `dist`          |

No se requieren variables de entorno. El contacto abre correo o WhatsApp; no existe un servidor que almacene mensajes. La copia al portapapeles requiere HTTPS o localhost.

## Contacto

[Lester David Uicab Gongora](mailto:Davidlug209@gmail.com)
