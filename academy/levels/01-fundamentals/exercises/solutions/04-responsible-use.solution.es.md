# Solución — Ejercicio 4: Detecte el riesgo, use la IA con seguridad

Esta es la clave de respuestas para los tres prompts defectuosos. Para cada uno nombramos **qué es
inseguro**, **qué principio rompe** y damos una **reescritura segura** que cumple igual el trabajo
legítimo. Aquí vive todo el sentido del hábito de IA responsable del Nivel 1.

> **Para facilitadores:** acepte toda reescritura que (a) elimine el riesgo real y (b) siga cumpliendo
> la tarea. La redacción exacta variará; el movimiento de seguridad debe estar presente.

---

## Prompt A — el mensaje de la clínica

**Original (inseguro):**

```text
Escribe un mensaje de recordatorio para nuestra paciente María González, fecha de nacimiento
12/04/1985, SSN 234-56-7890, que tiene cita de control de diabetes el martes a las 3pm.
Su teléfono es 305-555-0148.
```

**Qué es inseguro:** Pega **PHI/PII** reales —nombre completo, fecha de nacimiento, número de Seguro
Social, teléfono y una condición de salud (diabetes)— en una herramienta de IA pública.
**Principio roto:** #1 — *Proteger datos sensibles.* (El SSN es especialmente grave y nunca hace falta
para un recordatorio.)

**Reescritura segura:**

```text
Rol: Actúa como un asistente de recepción amable en una clínica.
Tarea: Escribe un mensaje breve y cálido de recordatorio de cita.
Contexto: El paciente tiene un control de rutina. Usa marcadores que yo mismo completaré; no inventes
datos personales. No menciones ninguna condición médica.
Formato: Menos de 40 palabras, amable, en español.
Plantilla a seguir:
"Hola {nombre}, le recordamos su cita el {día} a las {hora} con {nombre de la clínica}. Responda SÍ
para confirmar o llámenos para reprogramar. ¡Nos vemos pronto!"
```

**Por qué es segura:** ningún PHI/PII real sale de la clínica; usted completa los marcadores en su
propio sistema y se omite la condición de salud.

---

## Prompt B — el "dato" que no verificamos

**Original (inseguro):**

```text
Escribe un post de LinkedIn diciendo que nuestro servicio de envíos es "el más rápido del Sur de
Florida, entregando el 100% de los paquetes en menos de 12 horas, con un 99.9% de puntualidad".
```

**Qué es inseguro:** Le pide a la IA que publique **cifras y superlativos específicos** ("el más
rápido", "100%", "99.9%") como hechos, sin evidencia de que sean ciertos. Publicar afirmaciones no
verificadas o falsas puede engañar a los clientes y crear riesgo legal.
**Principio roto:** #2 (en la tabla del ejercicio, *Verificar datos y cifras*). (La IA escribirá con
gusto números seguros que pueden estar equivocados.)

**Reescritura segura:**

```text
Rol: Actúa como un asistente de marketing de una empresa de freight.
Tarea: Redacta un post de LinkedIn que destaque nuestros envíos rápidos y confiables.
Contexto: Enfócate en el beneficio para el cliente (rapidez y confianza). NO inventes estadísticas ni
superlativos. Si incluyes alguna cifra, márcala [VERIFICAR] para que yo la confirme antes de publicar.
Formato: Menos de 80 palabras, animado pero honesto, en español.
```

**Por qué es segura:** prohíbe estadísticas inventadas y marca todo dato numérico para verificación
humana antes de publicarlo.

---

## Prompt C — el mensaje que nadie revisará

**Original (inseguro):**

```text
Escribe el descargo legal final para el contrato de nuestro sitio web y publícalo tal cual.
Lo copiaré directo al sitio en vivo. No hace falta que me lo envíes primero.
```

**Qué es inseguro:** Trata el resultado de la IA como **texto legal final y publicable** **sin revisión
humana**, y nada menos que en un contrato. La IA puede producir lenguaje legal que suena plausible pero
es incorrecto o no cumple la normativa.
**Principio roto:** #3 — *Humano en el proceso* (se solapa con respetar la revisión legal y la
divulgación).

**Reescritura segura:**

```text
Rol: Actúa como un asistente de redacción legal.
Tarea: Redacta un descargo legal en lenguaje sencillo para que YO lo revise; esto es un BORRADOR, no
texto final.
Contexto: Es para la página de contrato de un sitio web de una pequeña empresa. Marca todo lo que pueda
necesitar la revisión de un abogado. No lo presentes como asesoría legal.
Formato: Un BORRADOR claramente rotulado, en español, con la nota: "Que un abogado calificado lo revise
antes de publicar".
```

**Por qué es segura:** obliga a un paso de borrador + revisión humana/de abogado antes de que algo
llegue al sitio en vivo.

---

## Los tres hábitos de un vistazo

| Prompt | Principio roto | El movimiento seguro |
|---|---|---|
| A — clínica | Proteger datos sensibles | Reemplazar PHI/PII reales con marcadores; omitir la condición. |
| B — cifras de envíos | Verificar datos y cifras | Prohibir números inventados; marcar toda cifra `[VERIFICAR]`. |
| C — descargo legal | Humano en el proceso | Convertirlo en un BORRADOR rotulado; exigir revisión humana/de abogado. |

---

## Fundamento (el hábito que lo protege)

La rapidez es la tentación; la seguridad es la disciplina. Antes de presionar enviar, haga la
verificación de tres preguntas: **¿Hay datos sensibles aquí? ¿Está verificado este dato? ¿Lo revisó una
persona?** Si alguna respuesta es "no", arréglelo primero. El asistente borra; una **persona revisa,
verifica y responde** por el resultado. Esa sola pausa evita casi todos los errores graves de IA que
una pequeña empresa puede cometer.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
