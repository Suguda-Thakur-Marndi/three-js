# THREE-JS

A small Vite + React project that renders a 3D dog model with React Three Fiber.

## Features

- Loads a GLB dog model from the public assets folder
- Applies a normal map with a custom red `MeshStandardMaterial`
- Uses orbit controls for interactive camera movement
- Renders the scene full screen

## Tech Stack

- Vite
- React
- Three.js
- @react-three/fiber
- @react-three/drei

## Project Structure

```text
.
|- App.jsx
|- App.css
|- main.jsx
|- components/
|  |- Dog.jsx
|- public/
|  |- dog_normals.jpg
|  |- models/
|     |- dog.drc.glb
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Notes

- The dog model is loaded from `/models/dog.drc.glb`.
- The normal texture is loaded from `/dog_normals.jpg`.
- The main scene logic lives in `components/Dog.jsx`.

## Requirements

- Node.js 18 or newer is recommended
- npm for dependency management