# Doc Page Feature (BusinessWith) — Step-by-step

Este documento explica cómo funciona el feature de documentación ubicado en:

- `src/features/doc-page/screens/DocPage.jsx`
- `src/features/doc-page/components/DocDetails.jsx`

---

## 1) Flujo general (user journey)

1. El usuario entra a la pantalla `DocPage`.
2. Ve:
   - Hero (pill + título + subtítulo)
   - Input de búsqueda
   - Secciones con cards (Start Here, Recent Updates, Browse by Category, All Documentation)
3. El usuario puede:
   - **Buscar** (escribir y presionar Enter) → se renderiza el modo Search Results
   - **Filtrar por categoría** (clic en un chip) → se renderiza el modo Category
   - **Abrir un documento** (clic en una card) → se abre `DocDetails` en overlay/modal
4. Desde `DocDetails` puede:
   - Volver atrás (“Back to Documentation” / “Back to all documentation”)
   - Usar el sidebar “On this page” para scroll a secciones
   - Marcar/desmarcar items del checklist

---

## 2) `DocPage.jsx` — Estructura y responsabilidades

### 2.1 Imports y dependencias

`DocPage` consume:

- **Assets**: `docPageAssets` desde `../Data/docPageAssets.js`
- **Data**: `categories`, `docsData`, `getFeaturedDocs`, `getRecentDocs` desde `../Data/docs-data.js`
- **UI**:
  - `DocPageCard` (card clickable)
  - `DocPageMode` (modo reutilizable para Search/Category: título + clear + grid)
  - `DocSearchEmpty` (empty state de búsqueda)
  - `DocDetails` (detalle en overlay)
- **Lógica**: `HERO` y `useDocPageModel` desde `../model/DocPage.js`

### 2.2 Estado y lógica (hook `useDocPageModel`)

`DocPage` no implementa filtros/búsqueda “a mano”; delega al hook:

- **state**:
  - `selectedDoc`: doc seleccionado (cuando no es `null`, se muestra el overlay)
  - `selectedCategory`: label (ej. `"All"`, `"API Reference"`)
  - `query`: texto que el usuario escribe en el input
  - `submittedQuery`: texto confirmado al presionar Enter (búsqueda real)
- **derived**:
  - `startHere`: lista de cards destacadas
  - `recentUpdates`: lista de cards recientes
  - `allDocumentation`: lista de cards filtrada por categoría (si aplica)
  - `browseByCategory`: chips de categorías (con `"All"` primero)
  - `isSearching`: `submittedQuery.trim().length > 0`
  - `isCategoryMode`: `!isSearching && selectedCategory !== "All"`
  - `searchResults`: cards filtradas por `submittedQuery`
- **handlers**:
  - `setSelectedDoc(card)` / `closeDetails()`
  - `setQuery(value)`
  - `submitSearch()` (copiar `query -> submittedQuery`, y cerrar details)
  - `clearSearch()` (limpiar `query` + `submittedQuery`)
  - `selectCategory(label)` (set category + limpia búsqueda + cierra details)
  - `clearCategory()` (vuelve a `"All"` + limpia búsqueda + cierra details)

### 2.3 Input de búsqueda (Enter-to-search)

En el `<input />`:

- `value={query}` (controlado)
- `onChange` actualiza `query`
- `onKeyDown`: si `e.key === "Enter"` → `submitSearch()`

Esto garantiza que **no busca mientras escribe**, solo al presionar Enter.

### 2.4 Render por modos (Search / Category / Default)

En el `<main />`, la pantalla decide qué renderizar:

1. **Search mode** (`isSearching`)
   - Si `searchResults.length > 0`: renderiza `DocPageMode` con:
     - `title = Search Results for "..."`  
     - `cards = searchResults`
     - `onClearFilters = clearSearch`
   - Si no hay resultados: renderiza `DocSearchEmpty`

2. **Category mode** (`isCategoryMode`)
   - Renderiza `DocPageMode` con:
     - `title = selectedCategory`
     - `cards = allDocumentation`
     - `onClearFilters = clearCategory`

3. **Default mode**
   - Renderiza secciones:
     - Start Here
     - Recent Updates
     - Browse by Category (chips)
     - All Documentation

### 2.5 “Browse by Category” (chips)

Los chips renderizan `browseByCategory`.

Al hacer click:

- `onClick={() => selectCategory(label)}`

Esto cambia inmediatamente el modo a **Category mode** (si no es `"All"`), y limpia cualquier búsqueda activa.

### 2.6 Overlay de `DocDetails`

Si `selectedDoc` no es `null`:

- Se renderiza un `<div className="fixed inset-0 ...">`
- Click en el backdrop (si `e.target === e.currentTarget`) cierra el modal.
- `DocDetails` recibe:
  - `doc={selectedDoc}`
  - `assets={docPageAssets}`
  - `onClose={closeDetails}`

---

## 3) `DocDetails.jsx` — Estructura y secciones

### 3.1 Props esperadas

`DocDetails({ doc, assets, onClose })`

- **doc**: card seleccionada (incluye `title`, `description`, `content`, etc.)
- **assets**: íconos (clock/calendar/etc.)
- **onClose**: callback para cerrar overlay

### 3.2 Contenido dinámico (desde `doc.content`)

Se consumen:

- `doc.content.context`
- `doc.content.problem`
- `doc.content.steps` → “Step-by-step setup”
- `doc.content.realCase` → “Real-world example”
- `doc.content.bestPractices` → “Best practices”
- `doc.content.checklist` → “Setup checklist”
- `doc.content.sections` → Sidebar “On this page”

Si `sections` no existe, hay fallbacks en el componente.

### 3.3 Sidebar “On this page”

- Se construye desde `tocSections`
- Click en un item ejecuta `scrollToSection(id)`:
  - `document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })`

### 3.4 Checklist interactivo (check/uncheck)

El checklist es interactivo con:

- `checkedItems` como `Set`
- Click en un item:
  - si está en el set → se elimina
  - si no está → se agrega

Visualmente se alterna el “checkbox” (en azul `#155dfc` cuando está checked).

### 3.5 Link final

Al final del artículo se muestra un botón:

- “Back to all documentation”
- llama `onClose()`

---

## 4) Resumen

- `DocPage.jsx` orquesta UI y delega lógica a `useDocPageModel`.
- `DocPageMode` evita duplicación (Search Results y Category mode).
- `DocDetails.jsx` renderiza contenido completo desde `docs-data` y agrega interactividad (TOC + checklist).

