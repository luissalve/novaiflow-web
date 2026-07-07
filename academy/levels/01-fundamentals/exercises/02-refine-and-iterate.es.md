# Ejercicio 2 — Refinar e iterar

Un primer prompt casi nunca da la respuesta perfecta, y eso es normal. La verdadera habilidad es
**dialogar con el asistente**: mirar lo que salió, decidir qué falta y volver a pedir con un poco más
de detalle. En este ejercicio tomará un prompt débil a propósito y lo mejorará en **dos rondas**,
viendo cómo la respuesta se afina cada vez.

Piénselo como editar un borrador con un compañero: no empieza de cero, ajusta.

> **Tiempo:** unos 15 minutos · **Necesita:** cualquier asistente de IA de chat y el prompt débil de
> abajo.

---

## El escenario

Su jefe le pide "mandar algo a los clientes sobre nuestro nuevo horario de los sábados". Abre el
asistente y escribe lo primero que se le ocurre:

```text
Escribe un correo sobre nuestro nuevo horario.
```

Es vago. El asistente tiene que adivinarlo todo: su negocio, el tono, el horario real, para quién es.
El resultado será genérico. Vamos a arreglarlo, paso a paso.

---

## Su tarea

Mejore el prompt débil de arriba con **dos refinamientos**. En cada ronda agrega la parte del esquema
**Rol · Tarea · Contexto · Formato** que faltaba, vuelve a enviar y compara.

### Ronda 0 — el prompt débil (ejecútelo tal cual)

```text
Escribe un correo sobre nuestro nuevo horario.
```

Envíelo. Note qué *adivinó* o erró el asistente. Anote 2 cosas que cambiaría.

### Ronda 1 — agregue Contexto y Rol (complete y ejecute)

```text
Rol: Actúa como un {su rol, p. ej. gerente de oficina en un {tipo de negocio}}.
Tarea: Escribe un correo breve a los clientes anunciando el nuevo horario de los sábados.
Contexto: {los datos reales: nombre o tipo de su negocio, el nuevo horario, desde cuándo aplica,
por qué es buena noticia para los clientes, el tono que desea}.
```

Envíelo. ¿Mejor? Ahora busque qué sigue fallando: quizá es muy largo, está en otro idioma o no tiene
asunto.

### Ronda 2 — agregue Formato y restricciones (complete y ejecute)

```text
Rol: Actúa como un {su rol}.
Tarea: Escribe un correo breve a los clientes anunciando el nuevo horario de los sábados.
Contexto: {los datos reales, iguales que en la Ronda 1}.
Formato: {ahora delimítelo, p. ej. menos de 100 palabras, con asunto, tono amable, en español;
termina con una invitación a reservar}.
```

Envíelo. Este es su prompt terminado. Compare las tres respuestas lado a lado.

---

## Pasos

1. Ejecute el prompt débil de la **Ronda 0**. Anote 2 problemas de la respuesta.
2. Ejecute la **Ronda 1** con su Contexto y Rol reales. Anote qué mejoró y qué sigue fallando.
3. Ejecute la **Ronda 2** con Formato y restricciones agregados.
4. Alinee las tres respuestas. Escriba una frase sobre *por qué* cada ronda salió mejor.
5. Guarde el prompt de la Ronda 2: es reutilizable para cualquier anuncio futuro.

> **Consejo:** No siempre tiene que reescribir todo el prompt. También puede responder en el chat:
> *"Hazlo más corto y agrégale un asunto."* El asistente recuerda la conversación. Pruebe las dos
> formas y quédese con la que le resulte más rápida.

---

## Así se ve el éxito

- [ ] Ejecutó **tres** versiones (Ronda 0, 1, 2) y ve cómo mejoran las respuestas.
- [ ] Para la Ronda 2 el prompt tiene las cuatro partes: **Rol · Tarea · Contexto · Formato**.
- [ ] La respuesta final coincide con su situación real (horario, negocio, tono, idioma correctos).
- [ ] Puede explicar en una frase *qué* aportó cada refinamiento.
- [ ] Enviaría con tranquilidad el resultado de la Ronda 2 **tras una revisión humana rápida**.

> **Recuerde (IA responsable):** iterar significa que *usted* sigue juzgando el resultado; el
> asistente no es la autoridad final. Una persona revisa y responde por el correo antes de enviarlo.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
