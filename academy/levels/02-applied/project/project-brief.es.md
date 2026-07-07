# Nivel 2 · Aplicado — Brief del Proyecto: El Kit de Plantillas del Equipo

Este es tu entregable del Nivel 2: **un kit compartido de plantillas de prompt reutilizables que
cualquier compañero pueda usar igual, cada vez.** Es el paso de "cada quien improvisa" a "todos usamos
los mismos moldes probados" — el primer *estándar* de IA de tu equipo.

Ya empezaste las tarjetas en el workshop. Aquí las reúnes en un solo documento, llenas el kit hasta el
tamaño mínimo, pruebas cada plantilla y nombras un responsable para mantenerlo al día.

> **Entregable en una línea:** un solo documento compartido con **5 o más plantillas de prompt
> probadas y reutilizables**, cada una como una tarjeta que un colega pueda tomar y ejecutar sin ayuda extra.

---

## Objetivo

Convertir las plantillas que tu equipo construyó durante el workshop en un **kit de plantillas del
equipo**: una biblioteca compartida y confiable de plantillas reutilizables para las tareas que más repites.

Sabrás que terminaste cuando:

- El kit tenga **5 o más plantillas**, cubriendo al menos **3 de los 4 tipos** (email, resumen, hoja de cálculo, imagen).
- Cada plantilla use **`{variables}`** para las partes que cambian — nunca detalles fijos.
- Cada plantilla se haya **probado en dos casos reales (no sensibles)** antes de agregarla.
- Cada tarjeta cierre con una línea de **revisar antes de enviar** (persona en el circuito).
- El kit tenga un **responsable nombrado** y viva en un solo lugar al que todo el equipo pueda llegar.

Este kit también es la base del **Nivel 3 · Avanzado**, donde estas plantillas se encadenan en flujos automatizados.

---

## Alcance

**Dentro del alcance — los cuatro tipos de plantilla de alto valor:**

| Tipo | Qué hace | Tareas de ejemplo |
|---|---|---|
| **Email** | Redacta respuestas a clientes, avisos, seguimientos | Respuesta por retraso, recordatorio de cita, seguimiento de cotización |
| **Resumen** | Convierte texto largo en puntos clave + próximos pasos | Hilo de correos, notas de reunión, documento largo |
| **Hoja de cálculo** | Convierte texto desordenado en una tabla limpia; explica una fórmula en palabras simples | Limpiar lista de contactos, total acumulado, "% del total" |
| **Imagen** | Encarga un gráfico o foto simple | Banner de campaña, aviso, publicación en redes |

**Fuera del alcance de este nivel:** automatización, integraciones con herramientas y encadenado de
varios pasos (eso es Nivel 3). Mantén cada plantilla en una sola tarea autónoma.

---

## Qué entregar — el formato exacto

Un solo documento compartido (el que tu equipo ya use — un doc, una página wiki o una nota
compartida). Contiene una intro corta, el **nombre del responsable del kit** y **una tarjeta por
plantilla**. Cada tarjeta usa esta estructura exacta:

```text
Nombre:               {nombre corto y buscable}
Para qué tarea:       {qué hace, en una línea}
Plantilla:            {el prompt, con {variables} marcadas entre llaves}
Cuándo usarla:        {el disparador / la situación}
Revisar antes enviar: {qué debe verificar una persona antes de que salga}
Idioma(s):            {EN / ES / ambos}
Responsable:          {quién mantiene esta tarjeta}
```

**Notas de los campos:**

- **Nombre** — corto y buscable, para que un compañero lo encuentre rápido (p. ej., "Respuesta por retraso").
- **Plantilla** — el prompt completo, listo para pegar. Usa `{llaves}` para todo lo que cambia cada vez.
- **Cuándo usarla** — el disparador, para que un compañero sepa *cuándo* recurrir a ella.
- **Revisar antes de enviar** — el paso de persona-en-el-circuito: qué debe verificar una persona antes de usar el resultado.

---

## Dos ejemplos completos (distintos roles / industrias)

### Ejemplo A — Logística / Despacho

```text
Nombre:               Respuesta por retraso del transportista
Para qué tarea:       Responder a un cliente que pregunta por qué su envío está retrasado
Plantilla:            Actúa como representante de servicio al cliente bilingüe y amable de una
                      empresa de carga. Redacta una respuesta a {cliente} cuyo envío está retrasado.
                      Contexto: pedido {número de pedido}, prometido para {fecha original}, nueva ETA
                      {fecha nueva}, motivo {motivo}. En {idioma}, menos de {extensión} palabras,
                      cálido y profesional, cerrando con un próximo paso claro.
Cuándo usarla:        Un cliente pregunta por qué su envío está retrasado
Revisar antes enviar: Número de pedido, fechas y motivo son correctos; una persona revisa antes de enviar
Idioma(s):            EN / ES
Responsable:          Líder de despacho
```

```text
Nombre:               Limpieza de lista de transportistas
Para qué tarea:       Convertir una lista de transportistas desordenada y pegada en una tabla limpia
Plantilla:            Convierte el texto de abajo en una tabla con columnas {transportista},
                      {servicio}, {tiempo de tránsito}, {contacto}. Ordena por {tiempo de tránsito}.
                      Marca cualquier fila sin contacto. Contexto: {pega la lista no sensible}.
Cuándo usarla:        Recibes una hoja de tarifas o lista como texto plano y necesitas organizarla
Revisar antes enviar: Reconstruye y verifica la tabla en la hoja de cálculo real; la IA describe, tú verificas
Idioma(s):            EN
Responsable:          Líder de despacho
```

### Ejemplo B — Clínica dental / Recepción

```text
Nombre:               Seguimiento por inasistencia
Para qué tarea:       Mensaje a un paciente que faltó a una cita de rutina
Plantilla:            Actúa como coordinador(a) de recepción bilingüe y cálido(a) de una clínica
                      dental. Redacta un mensaje de seguimiento por inasistencia a {nombre del
                      paciente}. Contexto: faltó a una {tipo de cita}; ofrece dos opciones para
                      reagendar: {opción 1}, {opción 2}. En {idioma}, menos de {extensión} palabras,
                      amable y respetuoso, listo para enviar por mensaje de texto. Sin consejo médico.
Cuándo usarla:        Un paciente falta a una cita de rutina
Revisar antes enviar: Los horarios para reagendar son reales y están libres; una persona revisa; sin consejo médico añadido
Idioma(s):            EN / ES
Responsable:          Líder de recepción
```

```text
Nombre:               Resumen de nota de visita
Para qué tarea:       Resumir una nota administrativa larga en puntos clave + próximos pasos
Plantilla:            Resume el texto de abajo en {número} puntos clave para {audiencia},
                      luego lista los próximos pasos. Mantén todas las fechas y nombres exactamente
                      como están escritos. Contexto: {pega el texto no sensible}. En {idioma}.
Cuándo usarla:        Una nota interna larga necesita un resumen rápido y compartible
Revisar antes enviar: El resumen conservó los detalles importantes y no cambió fechas, nombres ni cifras
Idioma(s):            EN / ES
Responsable:          Gerente de oficina
```

> **Nota sobre las cuatro tarjetas:** las plantillas usan `{variables}` en vez de números de pedido o
> nombres de pacientes reales. Eso es justo lo que las hace seguras de reutilizar y de compartir. Nunca
> pegues datos reales de pacientes o clientes en una herramienta pública sin una política aprobada.

---

## Requisitos

1. **Al menos 5 plantillas**, cubriendo al menos **3 de los 4 tipos** (email, resumen, hoja de cálculo, imagen).
2. Cada plantilla usa **`{variables}`** para las partes que cambian.
3. Cada plantilla se probó en **dos casos reales (no sensibles)** antes de agregarla.
4. Cada tarjeta incluye una línea de **revisar antes de enviar** (persona en el circuito).
5. El kit nombra un **responsable** del documento para mantenerlo al día.
6. El kit respeta el uso responsable: **sin datos sensibles**, con verificación anotada donde haga falta.

---

## Criterios de aceptación

El proyecto del Nivel 2 se acepta cuando **todo** lo siguiente es verdadero:

| # | Criterio | Cómo se verifica |
|---|---|---|
| 1 | 5+ plantillas, 3+ tipos | Contar las tarjetas y sus tipos |
| 2 | Variables marcadas `{así}` | Inspeccionar cada plantilla |
| 3 | Cada una probada en 2 casos reales | El grupo lo confirma en la revisión |
| 4 | Cada tarjeta tiene una línea de revisar-antes-de-enviar | Inspeccionar cada tarjeta |
| 5 | Un compañero puede usar cualquier tarjeta sin ayuda extra | Prueba rápida entre pares de una tarjeta |
| 6 | Sin datos sensibles en ninguna parte del kit | Escanear el documento |
| 7 | El kit tiene un responsable nombrado | Revisar el encabezado/pie |

Cumplir los siete otorga el **certificado del Nivel 2** y desbloquea el Nivel 3. Consulta
`assessment/rubric.es.md` para ver cómo se califican el kit y tu participación.

---

## Cómo se apoya en los niveles anteriores

Tu kit no parte de cero — crece directamente del Nivel 1 y apunta justo al Nivel 3.

| Nivel 1 (hecho) | → | Nivel 2 (aquí) | → | Nivel 3 (siguiente) |
|---|---|---|---|---|
| 3 prompts personales, una fila cada uno | → | Un **kit del equipo** compartido de 5+ plantillas | → | Plantillas encadenadas en flujos automatizados |
| `{placeholders}` que llenas a mano | → | `{variables}` estándar, tono y formato fijos | → | Variables que pasan automáticamente entre pasos |
| Notas de "cuándo lo uso" | → | Tarjetas con cuándo-usarla **y** revisar-antes-de-enviar | → | Condiciones de disparo para cada paso |
| Los activos de una persona | → | Un estándar de equipo con responsable nombrado | → | Un flujo de equipo documentado y probado |

**Lleva tus prompts del Nivel 1 a clase** — cada uno es candidato a convertirse en plantilla (marca
las partes que cambian como `{variables}`, fija el resto, pruébala dos veces y escribe la tarjeta).
Mientras más limpios eran tus tres prompts, más rápido se arma tu kit.

---

## Cronograma sugerido

- **En clase (bloque de proyecto de 12 minutos):** reunir las tarjetas del workshop de cada grupo en un documento; asignar un responsable.
- **Semana 1 tras la clase:** llenar el kit a 5+ plantillas; probar cada una en dos casos reales.
- **Continuo:** agregar una tarjeta cada vez que el equipo encuentre una nueva tarea repetida. El responsable lo mantiene ordenado.

---

## Guardarraíles de uso responsable (obligatorios)

- Nunca pegues datos de PHI, PII o confidenciales en herramientas públicas sin una política aprobada.
- La IA redacta; **una persona revisa y responde** por cada resultado — esa es la línea de revisar-antes-de-enviar.
- Verifica datos, cifras, nombres y fechas antes de enviar o publicar nada.
- Divulga la asistencia de IA cuando tu industria o cliente lo requiera; respeta la confidencialidad y el privilegio.
- Un kit que incrusta datos sensibles en una plantilla **no aprueba**, por bien que se vea.

---

## Checklist rápido antes de entregar

1. [ ] 5+ plantillas en un solo documento compartido, cubriendo 3+ tipos.
2. [ ] Cada plantilla usa `{variables}` para las partes que cambian.
3. [ ] Cada plantilla probada en dos casos reales no sensibles.
4. [ ] Cada tarjeta cierra con una línea de revisar antes de enviar.
5. [ ] Un compañero usó una tarjeta sin ayuda extra.
6. [ ] Sin datos sensibles en ninguna parte del kit.
7. [ ] El kit nombra un responsable.

Ese es el primer estándar de IA de tu equipo. Bien hecho — nos vemos en el Nivel 3.

---

## ¿Necesitas ayuda?

NovAIFlow puede facilitar la construcción del kit en sitio o en vivo en línea, y adaptar las
plantillas a tu industria (logística, clínicas, despachos legales, colegios, gobierno, inmobiliaria,
retail, hoteles, construcción).

**info@novaiflow.com** · **novaiflow.com** · NovAIFlow, Miami, FL ·
novaiflow.com


---

— NovAIFlow · AI Training & Enablement · novaiflow.com
