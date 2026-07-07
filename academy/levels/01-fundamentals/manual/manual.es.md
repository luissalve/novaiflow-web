# Nivel 1 · Fundamentos — Manual de Capacitación


*Primeros pasos con la IA — sus primeros prompts útiles, en equipo.*

Bienvenido a su primera hora con la inteligencia artificial generativa. Este manual es su compañero para el **Nivel 1 · Fundamentos**, parte del programa de Capacitación y Habilitación en IA de NovAIFlow. Está escrito para personas de negocios del día a día: sin formación técnica, sin programación, sin jerga. Todo aquí se hace en lenguaje natural, en español o inglés, con herramientas que puede abrir en un navegador web.

Al terminar este nivel entenderá qué es la IA generativa, cómo "conversar" con ella para que de verdad le ayude, y cómo escribir un prompt claro para las tareas que realiza cada semana. Terminará con **tres prompts listos para usar en su propio rol**: su primer paso hacia convertirse en un usuario de IA seguro y responsable.

---

## 1. Bienvenida y lo que logrará

Este es el nivel de fundamentos. Es corto a propósito: una hora enfocada, sin presión, sin necesidad de experiencia previa. Ya sea que trabaje en logística, una clínica, un despacho jurídico, un colegio, una oficina municipal, bienes raíces, retail, un hotel o una cuadrilla de construcción, las habilidades de aquí aplican a su trabajo diario.

**Lo que podrá hacer al terminar este nivel:**

| Resultado | Cómo se ve en la vida real |
|---|---|
| Explicar qué es la IA generativa | Puede describirla a un compañero en una frase, sin exageraciones |
| Tener una conversación útil con un asistente de IA | Usted pregunta, responde, usted refina, y obtiene algo aprovechable |
| Escribir un prompt claro y bien estructurado | Usa el patrón Rol · Tarea · Contexto · Formato |
| Aplicar la IA a tareas diarias | Correos, resúmenes, traducción EN/ES, ideas, tablas, explicaciones simples |
| Usar la IA de forma responsable | Protege datos sensibles, verifica hechos y mantiene a la persona al mando |

**Su entregable para este nivel:** tres prompts escritos para *su* rol, capturados para reutilizarlos mañana mismo.

---

## 2. Qué es la IA generativa

**En una frase:** la IA generativa es un asistente de computadora que crea texto nuevo (e imágenes, y más) prediciendo qué palabras suelen venir a continuación, basándose en haber "leído" una enorme cantidad de escritos.

Esa definición es correcta, pero un modelo mental es más útil en el día a día:

> **Imagínela como un colega rápido y muy leído que ha leído casi todo, pero que puede equivocarse con total seguridad.**

Este colega:

- **Es rápido.** Redacta un correo, un resumen o una lista en segundos.
- **Es muy leído.** Puede escribir en muchos estilos, en inglés y español, sobre casi cualquier tema general.
- **Está ansioso por ayudar.** Siempre le da una respuesta.
- **Puede equivocarse con seguridad.** A veces afirma datos incorrectos, nombres inventados o cifras falsas, y los dice con total confianza.

Ese último punto es lo más importante de todo este manual. La IA es un brillante compañero de *borradores*, no una fuente de verdad. Usted aporta el criterio; ella aporta la velocidad. Volveremos a esto en las reglas de oro.

---

## 3. Cómo conversar con ella

Los asistentes de IA modernos funcionan como un **chat**: usted escribe un mensaje, el asistente responde y ambos siguen en la misma conversación. El asistente recuerda lo que usted dijo antes en esa conversación, así que puede construir sobre ello.

El hábito más importante de todos es este:

> **Refine, no reinicie.**

Los principiantes suelen escribir una petición, recibir una respuesta mediocre y abrir un chat totalmente nuevo para intentarlo otra vez. No lo haga. El camino más rápido es *quedarse en la conversación* y decirle al asistente qué cambiar. Ya tiene el contexto; solo guíelo.

| En lugar de empezar de cero… | …diga esto en el mismo chat |
|---|---|
| El correo es muy largo | "Hazlo más o menos la mitad de largo." |
| El tono se siente rígido | "Hazlo más cálido y amigable." |
| Olvidó la fecha límite | "Agrega que la fecha límite es el viernes a las 5 PM." |
| Es muy formal para un texto | "Reescríbelo como un mensaje de texto corto e informal." |
| Está en el idioma equivocado | "Tradúcelo al español." |

Piénselo como un ir y venir con un compañero. Usted no lo despediría y contrataría a otro porque el primer borrador no fue perfecto; le daría retroalimentación. Haga lo mismo aquí.

---

## 4. La anatomía de un buen prompt


*Cuatro partes simples — Rol · Tarea · Contexto · Formato — convierten una petición vaga en una clara.*

Un "prompt" es simplemente la instrucción que le da a la IA. Un prompt vago obtiene una respuesta vaga. Un prompt claro obtiene una respuesta útil. La forma más fácil de ser claro es incluir cuatro cosas: **Rol · Tarea · Contexto · Formato.**

| Parte | Pregunta que responde | Ejemplo |
|---|---|---|
| **Rol** | ¿Como quién debe actuar la IA? | "Eres un agente de servicio al cliente amable." |
| **Tarea** | ¿Qué quiere exactamente que haga? | "Escribe una respuesta a esta queja." |
| **Contexto** | ¿Qué necesita saber? | "El paquete del cliente llegó 3 días tarde." |
| **Formato** | ¿Cómo debe verse la respuesta? | "Menos de 100 palabras, cortés, sin excusas." |

No siempre necesita las cuatro, pero mientras más incluya, mejor será el resultado. Aquí tiene una plantilla para llenar y dejar junto a su teclado:

```
Rol:      Eres un {tipo de profesional} que es {rasgo útil}.
Tarea:    {Lo que quiere hacer, en una frase clara.}
Contexto: {Los datos que la IA necesita: quién, qué, cuándo, detalles clave.}
Formato:  {Largo, tono, idioma, estructura — p. ej. "un correo corto en español".}
```

### Ejemplo resuelto 1 — un correo a un cliente (logística)

```
Rol:      Eres un coordinador de logística que se comunica con claridad y calma.
Tarea:    Escribe un correo avisando a un cliente que su envío se retrasó.
Contexto: El envío #4471 debía llegar el martes; ahora llegará el jueves por
          una inspección portuaria. La cliente es {Maria Gonzalez}. No
          cobraremos cargos adicionales.
Formato:  Un correo corto y profesional en español, menos de 120 palabras,
          tono tranquilizador, cerrando con nuestra línea de contacto.
```

### Ejemplo resuelto 2 — un resumen de reunión (cualquier oficina)

```
Rol:      Eres un asistente ejecutivo que escribe notas ordenadas y fáciles de
          leer.
Tarea:    Convierte mis notas sueltas de reunión de abajo en un resumen limpio.
Contexto: {Pegue aquí sus notas desordenadas.}
Formato:  Un resumen con tres secciones — Decisiones, Tareas (con responsables)
          y Preguntas Abiertas. Usa viñetas.
```

Note cómo cada prompt se lee como instrucciones para un asistente capaz. Esa es exactamente la mentalidad correcta.

---

## 5. Casos de uso diarios

Estas son las tareas que la gente usa con más frecuencia. Cada una viene con un prompt para copiar y pegar; reemplace las `{llaves}` con sus propios datos.

**1. Escribir o pulir un correo**

```
Escribe un correo cortés y profesional para {destinatario} sobre {tema}.
Que tenga menos de {120} palabras. Tono: {cálido pero formal}. Cierra con un
siguiente paso claro.
```

**2. Resumir un documento o hilo largo**

```
Resume el texto de abajo para un gerente ocupado. Dame los 5 puntos más
importantes en viñetas, y luego una línea sobre qué acción se necesita.

{Pegue aquí el texto largo.}
```

**3. Traducir entre inglés y español**

```
Traduce el mensaje de abajo al {inglés}. Conserva el significado y un tono
{amigable y profesional}. No traduzcas nombres propios ni códigos de producto.

{Pegue aquí el mensaje.}
```

**4. Generar ideas (lluvia de ideas)**

```
Dame {10} ideas para {una publicación que promueva nuestra venta de fin de
semana}. Que sean cortas, variadas y fáciles de ejecutar. Dirígelas a
{familias locales}.
```

**5. Armar una tabla rápida**

```
Convierte la información de abajo en una tabla limpia con columnas para
{Nombre, Fecha, Estado, Siguiente Paso}.

{Pegue o liste aquí la información.}
```

**6. "Explícalo de forma simple"**

```
Explica {qué significa una alerta SNMP de impresora} en lenguaje sencillo,
como si fuera para un empleado nuevo. Usa un ejemplo corto y evita la jerga.
```

Deje esta sección marcada. Solo estos seis prompts cubren una porción sorprendente del trabajo diario de oficina.

---

## 6. Refinar e iterar

La primera respuesta es un punto de partida, no la meta final. Observe cómo dos refinamientos rápidos convierten un borrador promedio en exactamente lo que necesita.

**Su primer prompt:**

```
Escribe un correo a un inquilino recordándole que el alquiler vence.
```

La IA le da un correo correcto pero genérico. Ahora refine, en el mismo chat:

**Refinamiento 1 (agregar contexto y tono):**

```
Hazlo más amable, y menciona que el alquiler vence el día 1 y que hay un
cargo por atraso de $50 después del día 5. Fírmalo como "El Equipo de la
Propiedad Sunrise."
```

**Refinamiento 2 (ajustar el formato):**

```
Perfecto — ahora hazlo más corto, y dame una versión en inglés debajo de la
versión en español.
```

En tres pasos cortos pasó de una página en blanco a un recordatorio pulido, bilingüe y con la voz de la marca. Esa es toda la habilidad: **empezar simple y luego guiar.** Rara vez necesita el prompt "perfecto" desde el inicio; necesita la disposición de dar una o dos retroalimentaciones.

---

## 7. Las tres reglas de oro del uso responsable

La IA es poderosa, y ese poder conlleva responsabilidad. Estas tres reglas lo mantienen a usted, a sus clientes y a su empresa a salvo. Aplican en todos los niveles de este programa.

### Regla 1 — Proteja los datos sensibles

**Nunca pegue información sensible en una herramienta de IA pública sin una política aprobada por la empresa.** Eso incluye detalles de salud de pacientes (PHI), datos personales como números de Seguro Social o de cuenta (PII), archivos confidenciales de clientes y todo lo cubierto por privilegio o contrato.

Una prueba sencilla: *si no lo publicaría abiertamente ni se lo enviaría por correo a un desconocido, no lo pegue en una herramienta de IA pública.* Ante la duda, primero quite nombres y números, o pregunte a su gerente qué herramienta está aprobada para trabajo sensible.

### Regla 2 — Mantenga a una persona en el circuito

**La IA hace el borrador; una persona revisa y se responsabiliza del resultado.** Usted es siempre el editor y el autor responsable. Antes de que algo llegue a un cliente, un paciente, un tribunal o al público, una persona calificada lo lee, lo corrige y asume la responsabilidad. La IA nunca tiene la última palabra; usted sí.

### Regla 3 — Verifique hechos y cifras

**Trate cada hecho, nombre, número, fecha, ley y cita como "por confirmar".** Recuerde al colega muy leído que puede equivocarse con seguridad. A veces la IA inventa detalles que parecen totalmente reales; a esto se le llama *alucinación*. Para cualquier cosa que importe, confírmela contra una fuente confiable antes de usarla.

> Tres hábitos más completan estos a lo largo del programa: **divulgue** el uso de IA cuando su industria o cliente lo exija, **respete la confidencialidad** y siga el **estándar de la empresa** (plantillas y criterios compartidos) en lugar de improvisar por su cuenta.

---

## 8. Su entregable: 3 prompts para su rol

Su proyecto para este nivel es pequeño y práctico: capturar **tres prompts que de verdad vaya a reutilizar** en su trabajo.

**Cómo hacerlo:**

1. Liste tres tareas que hace con frecuencia y que impliquen escribir, resumir, traducir u organizar.
2. Para cada una, escriba un prompt usando la plantilla **Rol · Tarea · Contexto · Formato** de la Sección 4.
3. Pruebe cada prompt, refínelo una vez y guarde la versión que funcionó.

Por ejemplo, una recepcionista de clínica podría capturar: (1) un prompt de recordatorio de cita bilingüe, (2) un prompt de "resume estas notas de mensajes de voz" y (3) un prompt de "traduce esta instrucción de formulario al inglés".

Los guardará en su cuaderno de proyecto. Se convierten en la semilla de su biblioteca personal de prompts, y en la base del Nivel 2, donde transformará los prompts en plantillas reutilizables para todo su equipo.

---

## 9. Preguntas frecuentes (FAQ)

**¿Necesito programar?**
No. Nada en este programa requiere programación. Usted escribe en español o inglés sencillo, tal como le escribiría a un compañero.

**¿Qué herramienta debo usar?**
Para este nivel sirve cualquier asistente de IA basado en chat de buena reputación. Su instructor le indicará la herramienta específica que se usa en clase. Las habilidades que aprende se transfieren entre herramientas: el patrón Rol · Tarea · Contexto · Formato funciona en todas partes.

**¿Mis datos están seguros?**
Trate las herramientas de IA públicas como un espacio público. No pegue información sensible o confidencial a menos que su empresa tenga una política y herramienta aprobadas para ello (vea la Regla de Oro 1). Para tareas cotidianas y no sensibles, está bien. Ante la duda, pregunte.

**¿Reemplazará mi trabajo?**
No. Es una herramienta que elimina el trabajo repetitivo para que usted se concentre en lo que solo una persona puede hacer: criterio, relaciones y responsabilidad. La persona sigue al mando.

**¿Y si me da una respuesta equivocada?**
Espere que ocurra de vez en cuando. Por eso usted verifica (Regla de Oro 3) y por eso una persona siempre revisa antes de que algo salga (Regla de Oro 2).

---

## 10. Hoja de referencia de una página

Téngala a mano. Es todo el nivel en una sola página.

| Tema | Recuerde esto |
|---|---|
| **Qué es** | Un colega rápido y muy leído que puede equivocarse con seguridad |
| **Cómo conversar** | Es un chat — **refine, no reinicie** |
| **Buen prompt** | **Rol · Tarea · Contexto · Formato** |
| **Tareas principales** | Correos · resúmenes · traducción EN/ES · ideas · tablas · "explícalo simple" |
| **Regla 1** | No pegue datos sensibles en herramientas públicas |
| **Regla 2** | La IA redacta, una persona revisa y responde |
| **Regla 3** | Verifique hechos, nombres, cifras — puede alucinar |

**La plantilla de prompt para llenar:**

```
Rol:      Eres un {tipo de profesional} que es {rasgo útil}.
Tarea:    {Lo que quiere hacer, en una frase clara.}
Contexto: {Los datos que la IA necesita: quién, qué, cuándo, detalles clave.}
Formato:  {Largo, tono, idioma, estructura.}
```

**El reflejo de refinar en una línea:** *"Está cerca — ahora hazlo {más corto / más cálido / en inglés / una tabla}."*

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
