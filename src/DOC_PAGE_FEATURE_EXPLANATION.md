# Doc Page Feature (BusinessWith) — Step-by-step

Este documento describe la arquitectura actual del feature:

- `src/features/doc-page/screens/DocPage.jsx`
- `src/features/doc-page/screens/DocDetails.jsx`
- `src/features/doc-page/model/DocPage.js`
- `src/App.jsx`

---

## 1) Flujo general (user journey)

1. El usuario entra a `DocPage`.
2. Puede:
   - Buscar (solo al presionar Enter).
   - Filtrar por categoría.
   - Abrir una card.
3. Al abrir una card, **no se muestra modal/overlay**:
   - `App.jsx` cambia de pantalla y renderiza `DocDetails`.
4. Desde `DocDetails`, al presionar “Back to Documentation” o “Back to all documentation”:
   - Se ejecuta `onClose()`.
   - `App.jsx` vuelve a renderizar `DocPage`.

---

## 2) Navegación entre pantallas (sin router)

La navegación está manejada por estado en `App.jsx`:

- `selectedDoc` en `App`.
- Si `selectedDoc` existe: `App` renderiza `DocDetails`.
- Si `selectedDoc` es `null`: `App` renderiza `DocPage`.

Contratos:

- `DocPage` recibe `onOpenDetails(card)`.
- `DocDetails` recibe `doc`, `assets`, `onClose()`.

Esto reemplaza completamente el comportamiento anterior de overlay.

---

## 3) `DocPage.jsx` — Responsabilidades

`DocPage` concentra la pantalla de listado y filtros:

- Hero (pill, title, subtitle, search input).
- Search mode (`DocPageMode` o `DocSearchEmpty`).
- Category mode (`DocPageMode`).
- Default mode (Start Here, Recent Updates, Browse by Category, All Documentation).

Fuentes:

- Data: `../Data/docs-data.js`
- Assets: `../Data/docPageAssets.js`
- Lógica: `useDocPageModel`
- Theme tokens:
  - `DOC_COLORS` (`../theme/colors.js`)
  - `DOC_STRINGS` (`../theme/strings.js`)
  - `DOC_TYPO` (`../theme/typography.js`)

---

## 4) `useDocPageModel` — Estado y lógica

El hook `useDocPageModel` ahora maneja solo lógica de listado/filtros (ya no maneja details):

- Estado:
  - `selectedCategory`
  - `query`
  - `submittedQuery`
- Derivados:
  - `startHere`
  - `recentUpdates`
  - `allDocumentation`
  - `browseByCategory`
  - `isSearching`
  - `isCategoryMode`
  - `searchResults`
- Handlers:
  - `setQuery`
  - `submitSearch`
  - `clearSearch`
  - `clearCategory`
  - `selectCategory`

Importante:

- La búsqueda se ejecuta solo en Enter (`submitSearch` copia `query` a `submittedQuery`).
- Al seleccionar categoría se limpia búsqueda activa.

---

## 5) `DocDetails.jsx` — Pantalla de detalle

`DocDetails` está en `screens` porque ahora es pantalla completa:

- Ruta física: `src/features/doc-page/screens/DocDetails.jsx`
- Secciones dinámicas:
  - What is ...
  - Problem we solve
  - Step-by-step setup
  - Real-world example
  - Best practices
  - Setup checklist
- Sidebar “On this page” con `scrollIntoView`.
- Checklist interactivo con `Set` (`checkedItems`).
- Botones de regreso usan `onClose()`.

---

## 6) Tokens de tema usados en el feature

Archivos:

- `src/features/doc-page/theme/colors.js`
- `src/features/doc-page/theme/strings.js`
- `src/features/doc-page/theme/typography.js`

Exports actuales:

- `DOC_COLORS`
- `DOC_STRINGS`
- `DOC_TYPO`

Nota: la UI del feature ya consume estos tokens en `DocPage` y componentes compartidos del listado.

---

## 7) Resumen técnico

- `DocPage` = listado, filtros y búsqueda.
- `DocDetails` = pantalla dedicada de detalle.
- `App` = decide qué pantalla renderizar usando `selectedDoc`.
- `useDocPageModel` = lógica de búsqueda/categorías sin estado de modal.

