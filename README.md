# EntGamers Panda Preset

Este repositorio proporciona un preset para el framework de CSS en JS llamado Panda CSS, que es una solución de estilo universal para la web moderna.

- [EntGamers Panda Preset](#entgamers-panda-preset)
  - [Tecnologías utilizadas](#tecnologías-utilizadas)
  - [Instalación y uso](#instalación-y-uso)
    - [Instala el preset](#instala-el-preset)
    - [Agrega el preset](#agrega-el-preset)
    - [Agrega las fuentes de Open Sans y Permanent Marker](#agrega-las-fuentes-de-open-sans-y-permanent-marker)
  - [Contribución](#contribución)
  - [Contacto](#contacto)


## Tecnologías utilizadas

- TypeScript
- Panda CSS

## Instalación y uso

### Instala el preset

Usando NPM:

```bash
npm install entgamers-panda-preset
```

Usando Yarn:

```bash
yarn add entgamers-panda-preset
```

Usando Bun:

```bash
bun add entgamers-panda-preset
```
### Agrega el preset

Agrega el preset a tu configuración en `panda.config.ts`.

```javascript
export default defineConfig({
  // Required
  presets: ['entgamers-panda-preset'],
  // Recommended
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: './src/styled-system',
  jsxFramework: 'react'
})
```

### Agrega las fuentes de Open Sans y Permanent Marker

Instala las fuentes de Open Sans y Permanent Marker en tu proyecto. Puedes hacerlo a traves de NPM, Yarn o Bun.

```bash
npm install @fontsource/open-sans @fontsource/permanent-marker
```

Este paso variara dependiendo de el framework que uses. En NEXT.js, puedes agregar las fuentes de Open Sans y Permanent Marker a tu `src/app/layout.tsx`

```tsx
import '@fontsource/open-sans/latin-300.css'
import '@fontsource/open-sans/latin-400.css'
import '@fontsource/open-sans/latin-700.css'
import '@fontsource/permanent-marker/latin-400.css'
```

## Contribución

Si deseas contribuir al proyecto, puedes hacerlo a través de la creación de issues o pull requests en el repositorio.

## Contacto

Puedes contactar al autor o al equipo de desarrollo a través del [Discord de EntGamers](http://discord.gg/SYnKcU5).