# BORA — GitHub Pages starter (serve under /BORA)

## Objectif
Publier ce repo sur `https://dylanlagrange.fr/BORA`

## Étapes (GitHub)
1. Crée un repo **BORA** (public)
2. Mets **ces fichiers** à la racine du repo
3. Dans le repo : **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Attends que GitHub Pages soit actif

## Pourquoi ça marche sous /BORA ?
Les chemins sont relatifs (`./assets/...`) donc pas besoin de config "base path".

## Si tu passes à un framework (Vite/React/Astro)
Là il faudra une config de base path (`/BORA/`).  
Mais pour commencer, ce starter est le plus simple.
