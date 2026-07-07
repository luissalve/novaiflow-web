# Solución — Ejercicio 2: Resuma un documento largo en una plantilla

Esta es una **respuesta modelo**, no la única correcta. Una buena plantilla de resumen (1) devuelve las
mismas secciones fijas cada vez, (2) mantiene exacto cada nombre, fecha y cifra, y (3) marca lo que
falta como "no indicado" en vez de adivinar. Use esto para revisar su tarjeta y su salida.

> **Para facilitadores:** el hábito de mayor valor aquí es la verificación. Felicite a quien detecte una
> cifra perdida o alterada: esa es la destreza que evita errores reales.

---

## Una salida modelo (ejecutada sobre el texto de muestra)

```text
En resumen: El corredor Miami–Atlanta va ~1 día atrasado por el clima del fin de semana; horario normal previsto para el miércoles.

Puntos clave:
- Dos envíos afectados por la demora.
- SH-4471 (Importaciones Riverside) ahora previsto para el jueves.
- SH-4490 (Coastal Supply) ahora previsto para el viernes.
- Los recargos de combustible del carrier suben el próximo mes.

Decisiones tomadas:
- Enviar a Riverside una actualización diaria cada mañana.
- Avisar la demora a Coastal de forma proactiva (no lo ha pedido).

Tareas:
- Dana · revisar el contrato para elegibilidad de créditos de servicio · antes del fin del día martes.
- Equipo · revisar cotizaciones frente a los nuevos recargos de combustible · antes del próximo mes.
- Equipo · reagruparse sobre el corredor · miércoles (cuando vuelvan los camiones).

Preguntas abiertas / riesgos:
- Si la demora activa créditos de servicio (pendiente de la revisión de contrato de Dana).
```

---

## Por qué funciona — parte por parte

| Elemento | En el modelo | Por qué importa |
|---|---|---|
| **Secciones fijas** | En resumen / Puntos clave / Decisiones / Tareas / Riesgos | Misma forma en cada ejecución: se escanea al instante. |
| **Cifras exactas** | SH-4471 → jueves, SH-4490 → viernes | Fechas e IDs trasladados sin tocar. |
| **Responsables + plazos** | "Dana · …· antes del fin del día martes" | Las tareas son accionables, no vagas. |
| **Sin invención** | Solo aparecen datos de la fuente | La regla "No inventes" la mantiene confiable. |
| **Reutilizable** | Plantilla guardada sin el texto pegado | Un colega rellena el espacio `{pegar}` y sigue. |

---

## El paso de verificación (la parte que la gente salta)

Después de que la IA devuelve el resumen, haga un cotejo de 30 segundos contra la fuente:

| Chequeo | En la muestra |
|---|---|
| ¿Envío correcto → fecha correcta? | SH-4471 = jueves ✓ · SH-4490 = viernes ✓ |
| ¿Responsable correcto en cada tarea? | Dana es responsable de la revisión del contrato ✓ |
| ¿Cambió algún número? | "cerca de un día atrasado" se mantuvo igual ✓ |
| ¿Inventó algo? | No "confirmó" créditos: correctamente lo dejó como riesgo pendiente ✓ |

Si algún chequeo falla, corrija las reglas de la plantilla ("mantén cifras exactas", "marca lo faltante
como no indicado") y vuelva a ejecutar: no parche la salida a mano y siga.

---

## Errores comunes y arreglos rápidos

| Error | Por qué duele | Arreglo |
|---|---|---|
| Pidió un "resumen corto" sin estructura | La forma de la salida cambia cada vez | Especifique las secciones exactas |
| No verificó las cifras | Una fecha cambiada puede llegar a un cliente | Coteje nombres/fechas/números cada vez |
| Dejó que afirmara una suposición como hecho | La información erróneamente segura se difunde | Agregue "si no se indica, escribe 'no indicado'" |
| Pegó un documento confidencial | Datos sensibles en una herramienta pública | Use texto no sensible o siga la política de la empresa |

---

## Fundamento (la gran idea)

Una buena plantilla de resumen hace dos trabajos a la vez: **fija la forma** para que la salida siempre
sea escaneable, y **acota los datos** para que la IA no cambie en silencio una fecha ni invente una
decisión. La estructura le ahorra tiempo; las reglas ("mantén cifras exactas", "no inventes") lo
mantienen seguro. La persona igual verifica, pero ahora hay mucho menos que revisar.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
