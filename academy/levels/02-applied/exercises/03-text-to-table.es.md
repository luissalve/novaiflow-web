# Ejercicio 3 — Convierta texto desordenado en una tabla limpia

Mucha información útil llega como un muro de texto: un correo pegado, una lista que alguien escribió con
prisa, notas de una llamada. La IA es excelente para desarmar ese desorden en una **tabla** ordenada con
columnas nombradas, lista para pegar en una hoja de cálculo. En este ejercicio escribirá una plantilla
que convierte texto desordenado en una tabla limpia y ordenada, y aprenderá a pedirle a la IA que
explique una fórmula de hoja de cálculo en palabras sencillas. Esto se vuelve una tarjeta de su **kit de
plantillas del área**.

> **Tiempo:** unos 15 minutos · **Necesita:** cualquier asistente de IA de chat, su programa de hojas de
> cálculo (Excel o Google Sheets) y una lista desordenada (use el ejemplo de abajo si no tiene una).

---

## Por qué vale la pena una plantilla

| A mano | Con una plantilla de tabla |
|---|---|
| Reescribir y realinear columnas | La IA la estructura en segundos |
| Fácil omitir o teclear mal un valor | Columnas consistentes cada vez |
| Forma distinta cada vez | Mismas columnas nombradas, mismo orden |
| Las dudas de fórmula quedan sin respuesta | La IA explica la fórmula en palabras sencillas |

Importante: la IA **describe** la tabla y la fórmula; **usted la reconstruye y verifica** en su hoja de
cálculo real. La IA puede contar mal; la hoja de cálculo es la fuente de verdad.

---

## El escenario

Elija un tipo de texto desordenado que convierte con regularidad en filas y columnas. Ejemplos por rol:

| Su mundo | Texto desordenado para volver tabla |
|---|---|
| Logística / freight | Una lista pegada de envíos con refs, clientes y ETAs |
| Retail | La lista de productos de un proveedor en un párrafo |
| Inmobiliaria | Notas sobre varias propiedades que visitó |
| Construcción | Una lista de materiales y cantidades de una nota de obra |
| Colegio | Inscripciones o confirmaciones escritas en un solo mensaje |
| Hotel | Un lote de solicitudes de huéspedes de distintos correos |

### Texto desordenado de muestra (úselo si no tiene uno)

```text
ok aquí va la corrida del jueves: Importaciones Riverside ref SH-4471 sale de Miami va a Atlanta, 12
pallets, ETA jueves. Coastal Supply SH-4490 Miami a Orlando 4 pallets eta viernes. luego tenemos a
Delgado Trading, ese es SH-4502, Miami a Tampa, 8 pallets, también jueves. ah y Northside, ref
pendiente, miami a jacksonville, 2 pallets, probablemente lunes.
```

---

## Su tarea

Construya una plantilla reutilizable de **texto a tabla**, ejecútela sobre el ejemplo (o su propio
texto) y luego pida una explicación de fórmula en palabras sencillas.

### Esquema para rellenar

```text
Rol: Actúa como un asistente de datos cuidadoso.
Tarea: Convierte el texto desordenado de abajo en una tabla limpia.
Columnas (en este orden): {col 1, p. ej. Referencia}, {col 2, p. ej. Cliente}, {col 3, p. ej. Desde}, {col 4, p. ej. Hacia}, {col 5, p. ej. Pallets}, {col 6, p. ej. ETA}.
Reglas: Una fila por ítem. Si falta un valor, escribe "POR DEFINIR"; no adivines. Mantén cada número y nombre tal cual está escrito. Ordena por {regla, p. ej. ETA, lo más pronto primero}.
Formato: Solo una tabla en Markdown, en {idioma}.

Luego, en palabras sencillas, explica la fórmula de hoja de cálculo que usaría para {objetivo, p. ej. sumar la columna Pallets}.

Texto desordenado:
{pegar aquí el texto no sensible}
```

---

## Pasos

1. Decida sus **nombres y orden de columnas**, y su **regla de orden**.
2. Pegue la muestra (o su propio texto no sensible) y ejecute la plantilla.
3. Lea la tabla: ¿hay **una fila por ítem**? ¿Los valores faltantes están marcados "POR DEFINIR", no
   inventados?
4. **Reconstruya la tabla en su hoja de cálculo** y coteje 2–3 valores contra el texto original.
5. Pruebe la fórmula que la IA describió (p. ej. un total de columna) en su hoja de cálculo y confirme
   el resultado.
6. Guarde la plantilla (sin el texto pegado) como tarjeta del kit con el nombre "Texto → tabla — [su uso]".

---

## Así se ve el éxito

- [ ] La tabla tiene sus **columnas nombradas en el orden que pidió**, una fila por ítem.
- [ ] Los valores faltantes están marcados **"POR DEFINIR"**: no se inventó nada para llenar un hueco.
- [ ] Cada número y nombre de la tabla **coincide exactamente con el texto fuente**.
- [ ] La **reconstruyó en su hoja de cálculo real** y cotejó algunos valores.
- [ ] La fórmula que la IA explicó produce el resultado correcto al probarla.

> **Recuerde (IA responsable):** la IA **describe** estructura y fórmulas; **usted las verifica** en la
> hoja de cálculo real, porque la IA puede contar mal o etiquetar mal. Use solo datos **no sensibles**, y
> una persona responde por la tabla final antes de que alguien dependa de ella.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
