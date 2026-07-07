# Hoja de Plantillas — Nivel 2 — Una Página para Guardar

Imprímela, pégala cerca de tu escritorio y tienes el Nivel 2 de un vistazo. La gran idea: deja de
reescribir prompts. Construye **plantillas** — prompts con las partes que cambian marcadas como
`{variables}` — para que cualquiera en tu equipo las reutilice igual, cada vez.

---

## De prompt a plantilla (el paso)

Una plantilla es solo un buen prompt con dos cosas añadidas: **`{variables}`** para lo que cambia, y un
**marco fijo** (rol, tono, idioma, formato) para lo que se queda.

| | Prompt de un solo uso | Plantilla reutilizable |
|---|---|---|
| Lo que cambia | Escrito directo | Marcado como `{variables}` |
| Rol, tono, formato | Cambian cada vez | **Fijos** en la plantilla |
| Dónde vive | Un chat que perderás | Una **tarjeta** en el kit del equipo |
| ¿Probada? | Probada una vez | **Probada en dos casos** |

**Constrúyela en cuatro pasos:** 1) escribe un buen prompt (Rol · Tarea · Contexto · Formato), 2) marca
lo que cambia como `{variables}`, 3) pruébala en dos casos distintos, 4) guárdala como tarjeta.

> **Refina, no rehagas.** Si un resultado casi está bien, arregla lo único que falla en el mismo chat —
> "más corto", "más cálido", "agrega un próximo paso" — en vez de empezar de nuevo.

---

## La tarjeta de plantilla (guarda cada plantilla así)

```text
Nombre:               {nombre corto y buscable}
Para qué tarea:       {qué hace, en una línea}
Plantilla:            {el prompt, con {variables} entre llaves}
Cuándo usarla:        {el disparador / la situación}
Revisar antes enviar: {qué debe verificar una persona}
Idioma(s):            {EN / ES / ambos}
Responsable:          {quién mantiene esta tarjeta}
```

---

## 6 plantillas listas para usar

Copia una, cambia las partes entre `{llaves}` y listo. Usa **datos de ejemplo (no sensibles)** para practicar.

**1 · Respuesta por email**
```text
Actúa como nuestro {rol}. Redacta un email {tono} a {destinatario} sobre {propósito}.
Datos clave: {viñetas}. En {idioma}, máx. {extensión} líneas, cerrando con un próximo paso claro.
```

**2 · Resumen (texto largo → puntos clave + próximos pasos)**
```text
Resume el texto de abajo en {número} puntos clave para {audiencia}, luego lista los próximos pasos.
Mantén todas las fechas, nombres y cifras exactamente como están. Contexto: {pega texto no sensible}. En {idioma}.
```

**3 · Hoja de cálculo / tabla (texto desordenado → tabla limpia)**
```text
Convierte el texto de abajo en una tabla con columnas {col1}, {col2}, {col3}, ordenada por {regla}.
Marca cualquier fila sin {campo requerido}. Contexto: {pega datos no sensibles}.
```

**4 · Fórmula explicada en palabras simples**
```text
Explica, en palabras simples, una fórmula de hoja de cálculo para {objetivo — p. ej., un total acumulado / % del total}.
Dime qué celdas usar y qué hace cada parte. Yo la construyo y verifico en mi hoja real.
```

**5 · Brief de imagen**
```text
Crea una imagen {orientación} de {sujeto}, estilo {estilo}, colores {paleta} con acentos en rojo de marca #E5002B,
con espacio para el texto "{texto}". Mantenla simple y acorde a la marca. La revisaré antes de publicar.
```

**6 · Reescribir por tono / traducir (EN ⇄ ES)**
```text
Reescribe el texto de abajo en un tono {tono} para {audiencia}, conservando mi significado y todos los nombres y números exactos.
Luego dame la versión en {español/inglés}. Texto: {pega aquí}.
```

---

## Elegir un modelo (regla simple)

- **Texto diario** (un email corto, una reescritura rápida) → cualquier asistente moderno sirve; prioriza **velocidad**.
- **Largo, con muchos datos o de mayor riesgo** (un resumen grande, una carta cuidadosa a un cliente,
  una tabla con muchos datos) → cambia al modo **"más capaz"**; prioriza **calidad**.
- **Verifica siempre** datos, cifras, nombres y fechas — sin importar qué modelo usaste.

---

## Las 4 revisiones antes de que algo salga

Pégalas donde las veas. Mantienen las plantillas útiles *y* seguras.

1. **Sin datos sensibles.** Las plantillas usan `{variables}`, no PHI, PII ni info confidencial real.
   Nunca pegues datos privados en una herramienta pública sin una política aprobada.
2. **Persona en el circuito.** La IA redacta; **tú** revisas, corriges y respondes por el resultado.
   Esa es la línea de revisar-antes-de-enviar en cada tarjeta.
3. **Verifica datos y cifras.** La IA puede sonar segura y aun así equivocarse. Revisa cualquier
   número, nombre, fecha o afirmación contra tus registros reales.
4. **También para imágenes.** Antes de publicar una imagen, revisa exactitud, derechos/licencias y
   coherencia de marca (colores correctos, texto bien escrito).

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
