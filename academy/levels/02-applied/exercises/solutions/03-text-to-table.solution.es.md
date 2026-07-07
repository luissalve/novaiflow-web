# Solución — Ejercicio 3: Convierta texto desordenado en una tabla limpia

Esta es una **respuesta modelo**, no la única correcta. Una buena plantilla de texto a tabla (1)
devuelve sus columnas nombradas en orden, una fila por ítem, (2) marca los valores faltantes como "POR
DEFINIR" en vez de adivinar, y (3) se verifica en una hoja de cálculo real. Use esto para revisar su
tarjeta y su salida.

> **Para facilitadores:** el momento de enseñanza es el paso de reconstruir y verificar. La IA
> estructura rápido pero falla; la hoja de cálculo —no el chat— es la fuente de verdad.

---

## Una salida modelo (ejecutada sobre el texto de muestra)

```text
| Referencia | Cliente           | Desde | Hacia        | Pallets | ETA     |
|------------|-------------------|-------|--------------|---------|---------|
| SH-4471    | Importaciones Riverside | Miami | Atlanta | 12      | Jueves  |
| SH-4502    | Delgado Trading   | Miami | Tampa        | 8       | Jueves  |
| SH-4490    | Coastal Supply    | Miami | Orlando      | 4       | Viernes |
| POR DEFINIR| Northside         | Miami | Jacksonville | 2       | Lunes   |
```

Explicación de fórmula en palabras sencillas (como la podría dar la IA):

```text
Para sumar la columna Pallets: haga clic en la celda vacía debajo de ella y sume todas las celdas de
pallets de esa columna. En Excel o Google Sheets escribiría =SUMA( y luego selecciona las celdas de
pallets, p. ej. =SUMA(E2:E5), y presiona Enter. La celda mostrará 26.
```

---

## Por qué funciona — parte por parte

| Elemento | En el modelo | Por qué importa |
|---|---|---|
| **Columnas nombradas, orden fijo** | Referencia, Cliente, Desde, Hacia, Pallets, ETA | Se pega directo en una hoja de cálculo, igual cada vez. |
| **Una fila por ítem** | 4 envíos → 4 filas | Sin entradas fusionadas ni perdidas. |
| **"POR DEFINIR" para huecos** | Referencia de Northside = POR DEFINIR | La ref faltante se marca, no se inventa. |
| **Ordenada** | ETA, lo más pronto primero (jue, jue, vie, lun) | Orden útil, no el aleatorio en que se escribió. |
| **Fórmula sencilla** | "=SUMA(E2:E5) … muestra 26" | Puede actuar sin ser experto en hojas de cálculo. |

---

## El paso de verificar en la hoja de cálculo (no lo salte)

| Chequeo | En la muestra |
|---|---|
| ¿La cantidad de filas coincide con la de ítems? | 4 ítems → 4 filas ✓ |
| ¿Los números de pallets son correctos? | 12, 8, 4, 2 coinciden con el texto ✓ |
| ¿El total cuadra? | 12 + 8 + 4 + 2 = **26** ✓ |
| ¿Datos faltantes marcados, no adivinados? | Ref de Northside = POR DEFINIR ✓ |

Reconstruya la tabla en Excel/Sheets, escriba usted mismo la fórmula y confirme el total. Si el número
de la IA y el de su hoja de cálculo no concuerdan, **gana la hoja de cálculo**.

---

## Errores comunes y arreglos rápidos

| Error | Por qué duele | Arreglo |
|---|---|---|
| Dejó que la IA inventara una referencia faltante | El dato erróneo parece oficial en una tabla | Regla: "si falta, escribe POR DEFINIR; no adivines" |
| No corrigió el orden | La tabla queda tan desordenada como la entrada | Agregue una regla clara (p. ej. "ETA, lo más pronto primero") |
| Confió en el total de la IA | La IA puede contar mal | Calcule siempre los totales en la hoja de cálculo |
| Columnas distintas en cada ejecución | No es reutilizable | Fije los nombres y el orden de columnas en la plantilla |

---

## Fundamento (la gran idea)

Convertir texto en tabla es **estructura más confianza**: la plantilla fija la estructura (columnas
nombradas, una fila por ítem, una regla de orden, "POR DEFINIR" para huecos) y la hoja de cálculo aporta
la confianza (allí reconstruye y verifica). La IA es un veloz primer borrador de datos, nunca el libro
mayor final. Fije la estructura, verifique los números, y tendrá una tarjeta que todo el equipo puede
reutilizar con seguridad.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
