# Ejercicio 4 — Detecte el riesgo, use la IA con seguridad

Los asistentes de IA son potentes, pero usarlos sin cuidado puede exponer datos privados, difundir
información errónea o enviar algo que ningún humano revisó. En este ejercicio hará de *editor*: mirará
**tres prompts del mundo real**, cada uno con un problema oculto, nombrará qué es inseguro y
**reescribirá cada uno de forma segura**. Este es el hábito más importante que construirá en el
Nivel 1.

No necesita memorizar reglas. Solo aprenda a hacer una pausa y preguntar: *"¿Hay datos sensibles aquí?
¿Está verificado este dato? ¿Lo revisó una persona?"*

> **Tiempo:** unos 20 minutos · **Necesita:** los tres prompts defectuosos de abajo y un lápiz (o un
> archivo de notas). No hace falta un asistente para *encontrar* los problemas, pero puede usar uno
> para probar sus reescrituras seguras.

---

## Los tres hábitos de IA responsable que evaluamos

| # | Principio | La pregunta que debe hacerse |
|---|---|---|
| 1 | **Proteger datos sensibles** | ¿Contiene PHI, PII o información confidencial que no debe ir a una herramienta pública? |
| 2 | **Verificar datos y cifras** | ¿Está confirmado este número/afirmación, o le creemos a la IA a ciegas? |
| 3 | **Humano en el proceso** | ¿Una persona revisará y responderá por el resultado antes de enviarlo o actuar? |

*(PHI = Información de Salud Protegida, como el diagnóstico de un paciente. PII = Información de
Identificación Personal, como un nombre completo con fecha de nacimiento o un número de cuenta.)*

---

## Su tarea

Para **cada** uno de los tres prompts de abajo: (a) anote qué es inseguro y **qué principio** rompe,
y luego (b) **reescriba el prompt** para que la tarea se cumpla igual, pero de forma segura.

### Prompt A — el mensaje de la clínica

```text
Escribe un mensaje de recordatorio para nuestra paciente María González, fecha de nacimiento
12/04/1985, SSN 234-56-7890, que tiene cita de control de diabetes el martes a las 3pm.
Su teléfono es 305-555-0148.
```

¿Qué es inseguro? __________  ·  ¿Qué principio? __________

Reescríbalo de forma segura abajo:

```text
(su versión segura aquí)
```

### Prompt B — el "dato" que no verificamos

```text
Escribe un post de LinkedIn diciendo que nuestro servicio de envíos es "el más rápido del Sur de
Florida, entregando el 100% de los paquetes en menos de 12 horas, con un 99.9% de puntualidad".
```

¿Qué es inseguro? __________  ·  ¿Qué principio? __________

Reescríbalo de forma segura abajo:

```text
(su versión segura aquí)
```

### Prompt C — el mensaje que nadie revisará

```text
Escribe el descargo legal final para el contrato de nuestro sitio web y publícalo tal cual.
Lo copiaré directo al sitio en vivo. No hace falta que me lo envíes primero.
```

¿Qué es inseguro? __________  ·  ¿Qué principio? __________

Reescríbalo de forma segura abajo:

```text
(su versión segura aquí)
```

---

## Pasos

1. Lea cada prompt despacio. Hágase las tres preguntas de la tabla.
2. Para cada uno, escriba **una frase** que nombre el riesgo y el principio que rompe.
3. Reescriba cada prompt para que cumpla la tarea **sin** el riesgo (quite o reemplace datos
   sensibles, agregue "borrador para mi revisión", pídale a la IA que marque afirmaciones no
   verificadas, etc.).
4. Opcional: ejecute sus reescrituras seguras en un asistente para confirmar que siguen siendo útiles.
5. Conserve sus reescrituras: son un modelo de cómo manejará tareas reales.

> **Pista para reescribir con seguridad:**
> - Reemplace datos personales reales con **marcadores** como `{nombre del paciente}` o `[hora de la cita]`.
> - Pídale al asistente que **marque lo que no esté seguro** para que usted lo verifique antes de publicar.
> - Termine los prompts sensibles con **"Genera un borrador para que yo lo revise; no lo tomes como final."**

---

## Así se ve el éxito

- [ ] En los tres prompts nombró el riesgo **y** el principio que rompe.
- [ ] La reescritura del Prompt A **no** contiene PHI/PII reales (usa marcadores o quita los datos).
- [ ] La reescritura del Prompt B **evita afirmar cifras no verificadas** como hechos (o pide verificar primero).
- [ ] La reescritura del Prompt C conserva un **paso de revisión humana** antes de publicar o enviar.
- [ ] Cada prompt reescrito sigue cumpliendo la tarea original y legítima.

> **Recuerde (IA responsable):** el asistente *borra*; una **persona revisa, verifica y responde** por
> el resultado. Nunca pegue datos confidenciales o personales en una herramienta pública sin la
> política aprobada de su empresa, y nunca publique una afirmación de la IA que no haya comprobado.
> Ante la duda, pregunte antes de enviar.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
