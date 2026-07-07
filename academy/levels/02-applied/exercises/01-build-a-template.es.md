# Ejercicio 1 — Construya una plantilla reutilizable

En el Nivel 1 escribió buenos prompts de una sola vez. Ahora los hacemos **reutilizables**. Una
*plantilla* es un prompt con las partes cambiantes convertidas en espacios para rellenar —escritos como
`{variables}` entre llaves— para que usted (o cualquier colega) pueda ejecutar la misma tarea de alta
calidad cada vez, solo cambiando unas pocas palabras.

En este ejercicio tomará un correo o carta que escribe a menudo y lo convertirá en una plantilla
limpia y compartible. Esta es la primera tarjeta de su **kit de plantillas del área**: su entregable
del Nivel 2.

> **Tiempo:** unos 15 minutos · **Necesita:** cualquier asistente de IA de chat y un correo o carta que
> envíe con frecuencia (una respuesta a cliente, un aviso, un seguimiento, una carta de presentación de
> cotización, un mensaje de bienvenida).

---

## Qué hace distinta a una plantilla de un prompt

| Prompt de una sola vez | Plantilla reutilizable |
|---|---|
| Escrito para una situación y luego desechado | Escrito una vez, reutilizado en cada caso similar |
| Datos incrustados en el texto | Datos extraídos como `{variables}` que usted rellena |
| Solo usted sabe cómo repetirlo | Un colega lo usa sin explicación |
| La calidad varía cada vez | La calidad es consistente siempre |

El truco: **fije** las partes que se mantienen iguales (rol, tono, estructura, idioma) y **abra** las
partes que cambian (nombres, fechas, el motivo específico) como `{variables}`.

---

## El escenario

Elija **un** mensaje recurrente de su semana real. Ejemplos por industria:

| Su mundo | Un correo/carta recurrente para volver plantilla |
|---|---|
| Logística / freight | Una actualización de estado de envío a un cliente |
| Clínica (recepción) | Un mensaje de confirmación de cita |
| Despacho legal | Un acuse de "recibimos sus documentos" |
| Colegio | Un aviso de cambio de horario a los padres |
| Inmobiliaria | Una respuesta a un nuevo lead que pregunta por una propiedad |
| Retail | Una respuesta a un cliente que pregunta por su pedido |
| Hotel | Una respuesta a una solicitud especial de un huésped antes de llegar |
| Construcción | Una nota breve de "actualización de obra de hoy" al propietario |

Elija algo **sin datos sensibles** dentro de la plantilla en sí: los detalles sensibles se rellenan
después, a mano, siguiendo la política de su empresa.

---

## Su tarea

Construya una plantilla reutilizable para ese mensaje. Use el esquema **Rol · Tarea · Contexto ·
Formato**, pero esta vez convierta cada detalle cambiante en una `{variable}`.

### Esquema para rellenar

```text
Rol: Actúa como un {rol, p. ej. gestor de cuentas amable en una empresa de freight}.
Tarea: Escribe un correo {tono} a {destinatario} sobre {propósito}.
Contexto: Datos clave — {dato 1}; {dato 2}; {dato 3}. Público: {quiénes son}. Evita: {p. ej. exageración, jerga}.
Formato: {largo, p. ej. menos de 120 palabras}, {estructura, p. ej. asunto + 2 párrafos cortos}, en {idioma}.
Termina con: {un próximo paso claro o despedida}.
```

### Punto de partida resuelto (no lo copie: adáptelo a su mensaje)

```text
Rol: Actúa como un gestor de cuentas amable en una empresa de freight.
Tarea: Escribe un correo {tono} a {nombre del cliente} sobre el estado de su envío {número de referencia}.
Contexto: Datos clave — el estado actual es {estado}; entrega prevista {fecha}; el motivo de cualquier cambio es {motivo}.
Público: un cliente habitual que valora avisos rápidos y honestos. Evita la jerga y prometer de más.
Formato: Menos de 120 palabras, con asunto y dos párrafos cortos, en {idioma}.
Termina con: un ofrecimiento de ayuda y un próximo paso claro.
```

---

## Pasos

1. Elija su único mensaje recurrente.
2. Escríbalo una vez como un prompt normal con datos de muestra **reales pero no sensibles**, y
   ejecútelo.
3. Ahora encuentre cada parte que *cambia caso a caso* —nombres, fechas, el motivo, el idioma— y
   reemplace cada una con una `{variable}`.
4. Fije las partes que *nunca* cambian: el rol, el tono, la estructura, la regla de idioma.
5. Pruebe su plantilla rellenando las `{variables}` con **dos casos** de muestra distintos. ¿Produce un
   buen borrador las dos veces sin que tenga que reescribir la estructura?
6. Póngale un nombre corto (p. ej. "Correo de estado de envío") y guárdela. Esta es su primera tarjeta
   del kit.

---

## Así se ve el éxito

- [ ] Cada parte que cambia caso a caso está marcada como `{variable}`: nada importante queda fijo a mano.
- [ ] Las partes fijas (rol, tono, formato, idioma) están bloqueadas en el texto de la plantilla.
- [ ] La probó con **dos** casos de muestra distintos y ambos borradores fueron utilizables tras una
      revisión rápida.
- [ ] Un colega podría rellenar las `{variables}` y ejecutarla **sin preguntarle nada**.
- [ ] La plantilla en sí **no** contiene datos sensibles (nombres, números de cuenta, detalles
      confidenciales).

> **Recuerde (IA responsable):** la plantilla *borra*; **una persona revisa y responde** por cada
> mensaje antes de enviarlo. Rellene los datos sensibles a mano siguiendo la política de su empresa:
> nunca incruste datos personales o confidenciales reales en una plantilla compartida.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
