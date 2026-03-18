# THREE-JS

Small React + Vite scene that renders a 3D dog model using React Three Fiber.

## What This Project Does

- Loads a Draco-compressed GLB model from the public folder
- Applies a MatCap material to every mesh in the model
- Uses orbit controls so you can inspect the model interactively
- Runs in a full-viewport canvas

## Tech Stack

- React 19
- Vite 8
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
|- matcap/
|  |- mat-1.png ... mat-20.png
|- public/
|  |- dog_normals.jpg
|  |- models/
|     |- dog.drc.glb
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## How Rendering Is Set Up

- Entry point mounts React from `main.jsx` into `#root`
- `App.jsx` renders the `Dog` scene component
- `components/Dog.jsx`:
	- loads `/models/dog.drc.glb` with `useGLTF`
	- loads `matcap/mat-2.png` with `useTexture`
	- assigns a shared `THREE.MeshMatcapMaterial` to all meshes
	- sets renderer tone mapping to `THREE.ReinhardToneMapping`
	- enables `OrbitControls`

## Notes

- The model is preloaded with `useGLTF.preload("/models/dog.drc.glb")`.
- `public/dog_normals.jpg` exists but is not currently used by the active material pipeline.

## Requirements

- Node.js 18+
- npm