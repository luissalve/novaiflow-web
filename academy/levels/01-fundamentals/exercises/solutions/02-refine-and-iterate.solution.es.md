# Solución — Ejercicio 2: Refinar e iterar

Este modelo recorre las mismas tres rondas que ejecutaron sus participantes, para que comparen. La
lección no es el correo final, sino *ver cómo mejora el prompt* a medida que se agrega cada parte
faltante del esquema.

> **Para facilitadores:** pida a los participantes que lean las tres respuestas en voz alta y en orden.
> El salto de calidad es el momento de enseñanza.

---

## Ronda 0 — el prompt débil

```text
Escribe un correo sobre nuestro nuevo horario.
```

**Lo que el asistente tiene que adivinar:** el negocio, el horario, el público, el tono, el largo, el
idioma. Un resultado típico es un correo genérico y vacío con marcadores como `[Nombre del negocio]` e
`[insertar horario]`: prueba de que el prompt no aportó lo suficiente.

**Dos problemas que el participante debería notar:** (1) no conoce el horario real, (2) no sabe para
quién es ni qué tono usar.

---

## Ronda 1 — agregue Contexto y Rol

```text
Rol: Actúa como el gerente de oficina de Sunny Smiles Dental, una clínica pequeña en Miami.
Tarea: Escribe un correo breve a los clientes anunciando el nuevo horario de los sábados.
Contexto: A partir del 14 de junio abrimos los sábados de 9am a 1pm para limpiezas y chequeos. Los
clientes pidieron horarios de fin de semana, así que es buena noticia. Tono amable y acogedor.
```

**Qué mejoró:** el correo ahora es fiel al negocio y a la oferta. **Qué sigue fallando:** no hay límite
de largo (puede quedar extenso), no hay asunto, no hay una llamada a la acción explícita y el idioma no
está fijado.

---

## Ronda 2 — agregue Formato y restricciones

```text
Rol: Actúa como el gerente de oficina de Sunny Smiles Dental, una clínica pequeña en Miami.
Tarea: Escribe un correo breve a los clientes anunciando el nuevo horario de los sábados.
Contexto: A partir del 14 de junio abrimos los sábados de 9am a 1pm para limpiezas y chequeos. Los
clientes pidieron horarios de fin de semana, así que es buena noticia. Tono amable y acogedor.
Formato: Menos de 100 palabras, con asunto, en español. Termina con una invitación a reservar en línea.
```

### Una respuesta que esto podría producir

```text
Asunto: ¡Buena noticia: ahora abrimos los sábados!

Hola:

¡Lo pidió y lo escuchamos! A partir del 14 de junio, Sunny Smiles Dental abre los sábados de 9am a 1pm
para limpiezas y chequeos. Ahora es aún más fácil acomodar su visita en una semana ocupada.

¿Listo para tomar un turno de fin de semana? Reserve en línea cuando quiera en [enlace], o llámenos.

Nos vemos pronto,
El equipo de Sunny Smiles
```

---

## Por qué cada ronda salió mejor

| Ronda | Qué se agregó | Efecto |
|---|---|---|
| 0 → 1 | **Contexto + Rol** | El correo se vuelve específico y fiel al negocio en lugar de genérico. |
| 1 → 2 | **Formato + restricciones** | El resultado tiene el largo correcto, asunto y una llamada a la acción clara, en el idioma adecuado: listo para enviar tras una revisión rápida. |

---

## La gran idea: iterar es una conversación

Rara vez acierta un prompt al primer intento, y no hace falta. Dos movimientos rápidos lo logran:

1. **Reescriba** el prompt con la parte faltante agregada (lo que hicimos arriba), o
2. **Responda en el chat**, p. ej. *"Más corto, agrégale un asunto y termina con un enlace de reserva."*
   El asistente recuerda el hilo, así que un ajuste de una línea suele bastar.

De cualquier forma, **usted** sigue siendo el juez: decide cuándo está suficientemente bien, lo revisa
y responde por el correo final antes de enviarlo.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
