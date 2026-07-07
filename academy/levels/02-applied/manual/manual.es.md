# Nivel 2 · Aplicado — Manual de Capacitación


*Convertir prompts en plantillas reutilizables para todo el equipo.*

Bienvenido de nuevo. Si el Nivel 1 le enseñó a escribir un prompt claro de una sola vez, **el Nivel 2 le enseña a no volver a escribir el mismo prompt dos veces.** Este manual es su compañero para el **Nivel 2 · Aplicado (Medio)**, parte del programa de Capacitación y Habilitación en IA de NovAIFlow. Está escrito para las mismas personas de negocios del día a día —sin formación técnica, sin programación, sin jerga— y todo se hace en lenguaje natural, en español o inglés.

Este nivel dura dos horas porque pasamos de *usar* la IA a *estandarizar* cómo la usa su equipo. Convertirá sus mejores prompts en **plantillas reutilizables**, aprenderá el puñado de patrones que hay detrás de casi todo buen resultado, ganará velocidad redactando, resumiendo, armando tablas y describiendo imágenes, y lo reunirá todo en un **kit de plantillas del equipo** que cualquiera puede tomar y usar igual, cada vez.

> **Todo el nivel en una frase:** convierta buenos prompts en moldes reutilizables y luego reúna esos moldes en un kit en el que todo su equipo confíe.

Este manual asume que completó el **Nivel 1 · Fundamentos**. Repasaremos lo esencial en el Capítulo 1, pero no volveremos a explicar qué es la IA generativa ni por qué una persona siempre revisa el resultado: esas son bases que ya tiene.

---

## 1. Repaso: anatomía del prompt en 90 segundos

Todo en este nivel se apoya en la fórmula del Nivel 1. Aquí está, una vez más, porque estamos a punto de construir sobre ella.

> **Un buen prompt tiene cuatro partes: Rol · Tarea · Contexto · Formato.**

| Parte | La pregunta que responde | Ejemplo rápido |
|---|---|---|
| **Rol** | ¿Como quién debe actuar la IA? | "Eres un coordinador de logística tranquilo." |
| **Tarea** | ¿Qué quiere exactamente que haga? | "Escribe un aviso de retraso a un cliente." |
| **Contexto** | ¿Qué datos necesita? | "El envío #4471 lleva dos días de retraso." |
| **Formato** | ¿Cómo debe verse la respuesta? | "Correo corto, español, menos de 120 palabras." |

También aprendió dos hábitos en los que nos apoyaremos constantemente:

- **Refine, no reinicie.** Quédese en el mismo chat y guíe con instrucciones pequeñas ("más corto", "más cálido", "agrega un ejemplo") en vez de empezar de cero.
- **La persona sigue al mando.** La IA redacta; una persona revisa, verifica y se responsabiliza del resultado.

Si algo de esto se siente flojo, no hay problema: se afina en el momento en que empieza a convertir estos prompts en plantillas, que es exactamente lo que hace el Capítulo 2.

---

## 2. Del prompt a la plantilla

Un **prompt** es algo que escribe una vez. Una **plantilla** es un prompt que escribe *bien, una sola vez,* y luego reutiliza para siempre cambiando unos pocos detalles. Ese es el mayor salto de este nivel.

Piense en los correos, avisos y resúmenes que produce cada semana. La mayoría son 90% iguales y 10% distintos. El rol es el mismo. El tono es el mismo. El idioma y el formato son los mismos. Solo cambian unos pocos datos: un nombre, una fecha, un número, el texto que pega. **Una plantilla congela el 90% y deja espacios en blanco para el 10%.**

Marcamos esos espacios con `{llaves}`. Todo lo que esté entre llaves es una variable que usted rellena; todo lo demás se queda tal cual está escrito.

```
Actúa como un {rol} que es {rasgo útil}.
{Tarea} el texto de abajo para {audiencia}.
Contexto: {pega aquí tus datos no sensibles}.
Devuélvelo en {formato}, tono {tono}, en {idioma}, máximo {largo}.
```

La recompensa es mayor que ahorrar tecleo:

| Sin plantilla | Con plantilla |
|---|---|
| El resultado varía cada vez que la escribe | El resultado es consistente y predecible |
| Cada persona lo hace a su manera | Todo el equipo produce la misma calidad |
| Re-explica el mismo contexto a diario | El contexto queda incorporado una sola vez |
| Integrar a un nuevo empleado es lento | Un nuevo empleado es productivo desde el día uno |

**El nombre importa.** Dele a cada plantilla un nombre corto y buscable como "Aviso de retraso a cliente" o "Mensaje de voz a resumen". Si su equipo no encuentra una plantilla en cinco segundos, escribirá un prompt nuevo desde cero, y se perdió el beneficio. Cubriremos nombrar y guardar el kit en el Capítulo 10.

---

## 3. Patrones de prompt que funcionan

Detrás de casi todo buen resultado hay uno de unos pocos **patrones** sencillos. No necesita memorizarlos como teoría: reconózcalos para poder elegir el adecuado a propósito.

| Patrón | Qué hace | Úselo cuando… |
|---|---|---|
| **Instrucción** | Verbo claro + qué + cómo (la base del Nivel 1) | La mayoría de tareas diarias |
| **Ejemplo** | "Aquí hay uno bueno: haz más como este" | Quiere que copie un estilo específico |
| **Paso a paso** | "Hazlo por pasos y muéstrame cada paso" | La tarea es larga o tiene etapas |
| **Rol** | Asigna experiencia para fijar tono y vocabulario | El tono y las palabras importan |
| **Refinar** | Mejorar en vez de rehacer | El borrador está cerca pero no exacto |

### El patrón de ejemplo — muestre, no solo diga

La forma más rápida de obtener el *estilo* que quiere es darle a la IA un buen ejemplo y pedir más como ese.

```
Aquí hay una de nuestras descripciones de producto que nos gusta:
"{pega un ejemplo corto y con la voz de la marca}"

Escribe {3} más con la misma voz y largo para estos productos:
{lista los productos y un dato clave de cada uno}.
```

### El patrón paso a paso — para todo lo que tenga etapas

Cuando una tarea tiene partes, pida a la IA que las recorra en orden. Detecta errores antes y el resultado queda más completo.

```
Ayúdame a preparar una actualización para un cliente en tres pasos.
Paso 1: lista los datos clave que debo cubrir de las notas de abajo.
Paso 2: redacta un correo corto y cálido usando esos datos.
Paso 3: dame un resumen de una línea en español para enviar por texto.

Notas: {pega notas no sensibles}.
```

### Combinar patrones

Las plantillas reales a menudo mezclan dos patrones: un **rol** más una **instrucción**, o un **ejemplo** más un **formato**. Empiece simple; agregue un patrón solo cuando el resultado lo necesite. Más instrucción no siempre es mejor. Si una instrucción sencilla le da lo que necesita, deténgase ahí.

---

## 4. Elegir el enfoque correcto

A veces tendrá que elegir entre un asistente rápido del día a día y un modo "más capaz" (a menudo etiquetado con palabras como *Pro*, *Advanced* o el nombre de un modelo superior). **No** necesita entender la tecnología para elegir bien. Use esta regla en lenguaje sencillo:

| Su tarea | Use esto |
|---|---|
| Un correo corto, una traducción rápida, una lista simple | Cualquier asistente moderno: el rápido sirve |
| Un documento largo para resumir, razonamiento cuidadoso, muchos datos | El modo "más capaz" |
| Cualquier cosa con cifras, redacción legal, o que va a un cliente | El modo más capaz —**y** una persona verifica |

Tres cosas para tener en cuenta, en términos sencillos:

1. **Velocidad vs. cuidado.** Los modos rápidos son ideales para volumen; los modos capaces son mejores cuando importan la exactitud y los matices. Ajuste el modo a lo que está en juego.
2. **La privacidad depende de la herramienta, no del modo.** Un modo más capaz sigue siendo una herramienta pública a menos que su empresa diga lo contrario. La regla de datos sensibles (Capítulo 9) aplica igual.
3. **Verifique siempre los hechos.** Ningún modo elimina la necesidad de revisar nombres, números, fechas, cifras y lenguaje legal. Cuanto más inteligente suena el modelo, con más convicción puede equivocarse.

Ante la duda, redacte en el modo rápido y luego pida al modo capaz que revise o afine las partes importantes.

---

## 5. Redactar y reescribir

El uso más común de la IA en el trabajo es la redacción simple, y las plantillas la vuelven consistente. Estos son los movimientos que usará a diario.

### Redactar desde viñetas

No se quede frente a una página en blanco. Vuelque los datos como viñetas sueltas y deje que la IA les dé forma.

```
Actúa como un {rol} con una voz {cálida, profesional}.
Convierte estas viñetas en un {correo corto} para {audiencia}, en {idioma}:
- {dato}
- {dato}
- {dato}
Cierra con {un siguiente paso claro}.
```

### Reescribir por tono

¿Tiene un borrador casi listo? No lo rehaga: remodélelo.

```
Reescribe el texto de abajo para que sea {más conciso / más cálido / más formal}.
Mantén todos los datos igual. No agregues nada nuevo.

{pega tu borrador}
```

### Traducir conservando la voz (EN ⇄ ES)

```
Traduce el mensaje de abajo al {inglés}. Conserva el significado y un tono
{amigable y profesional}. No traduzcas nombres propios ni códigos de
producto. Luego dame una línea sobre cualquier cosa que no se haya
traducido limpiamente.

{pega el mensaje}
```

### Mantener la voz de la empresa consistente

Aquí es donde una plantilla rinde frutos en todo un equipo. Incorpore su voz en el rol y un ejemplo, y el resultado de cada quien suena a una sola empresa en vez de a diez personas distintas.

```
Actúa como un redactor de {Empresa}. Nuestra voz es {clara, cálida, sin exageraciones}.
Aquí hay un ejemplo con la voz de la marca: "{pega uno}".
Ahora escribe {lo que necesitas} con esa misma voz.
```

---

## 6. Resumir documentos largos

Los resúmenes son uno de los usos más fuertes y confiables de la IA: convertir un hilo largo, un contrato, un informe o unas notas de reunión en algo sobre lo que una persona ocupada pueda actuar en 30 segundos.

La clave es **pedir una forma fija**: un número determinado de puntos, para quién es, y si quiere los siguientes pasos. Una forma fija es lo que convierte un resumen en una plantilla reutilizable en vez de algo de una sola vez.

```
Resume el texto de abajo para {un gerente ocupado}.
Dame exactamente {5} puntos clave en viñetas, y luego una línea aparte:
"Siguiente paso:" con la única acción más importante.
Mantén las cifras y los nombres exactamente como están escritos. En {idioma}.

{pega el texto largo no sensible}
```

Dos advertencias honestas, porque los resúmenes tienen una debilidad conocida:

- **Los resúmenes pierden matices.** Una versión corta pierde detalle por diseño. Para algo importante —una cláusula contractual, una nota médica, un plazo legal— lea el original, no solo el resumen.
- **Las cifras y los nombres deben quedar intactos.** Dígale a la IA que los mantenga exactamente como están escritos, y aun así revíselos. Un resumen que redondea "$4,471" a "unos $4,500" puede causar problemas reales.

Un refinamiento útil: después del resumen, pregunte *"¿Qué dejaste afuera que yo podría necesitar?"*; a menudo saca a la luz un detalle que vale la pena conservar.

---

## 7. Texto desordenado a tablas y hojas de cálculo limpias

Una enorme parte del dolor de oficina es el **texto sin estructura**: un muro de notas, un hilo de correo, una lista pegada que desearía que fuera una tabla ordenada. La IA es excelente para esta primera pasada.

### Convertir un desorden en tabla

```
Convierte el texto de abajo en una tabla limpia con columnas:
{Nombre | Fecha | Estado | Siguiente paso}.
Una fila por ítem. Si falta un valor, escribe "—".
Ordena por {Fecha, la más próxima primero}.

{pega o lista la información desordenada}
```

### Que le expliquen una fórmula en palabras sencillas

Aquí no programa, pero puede pedir a la IA que *describa* una fórmula de hoja de cálculo en lenguaje sencillo y le diga dónde va.

```
En palabras sencillas, explícame cómo hacer una columna de hoja de cálculo
que muestre {un total acumulado de la columna Monto}. Dime la fórmula que
debo escribir y en qué celda ponerla. Asume que los datos empiezan en la
fila {2}.
```

Una regla vuelve esto seguro y confiable:

> **La IA describe la tabla o la fórmula; una persona la construye y la revisa en la hoja de cálculo real.**

La IA no puede ver su archivo real, así que trate su tabla como un borrador que usted pega y verifica, y su fórmula como instrucciones que escribe y prueba con números reales. Nunca confíe en un total que produzca sin contrastarlo con la fuente.

---

## 8. Generar imágenes y escribir briefs de imagen

Puede crear gráficos y fotos simples —para una campaña, un aviso, una publicación social— describiendo lo que quiere con palabras. La habilidad aquí es escribir un **brief de imagen** claro, igual que le encargaría algo a un diseñador.

Un buen brief cubre cinco cosas:

| Elemento | Qué especificar | Ejemplo |
|---|---|---|
| **Sujeto** | Qué hay en la imagen | "Una camioneta de reparto en un muelle de carga" |
| **Estilo** | Foto, ilustración, gráfico plano, etc. | "Ilustración plana y limpia" |
| **Colores** | Paleta, incluido el rojo de marca | "Fondo blanco, acentos en `#E5002B`" |
| **Formato** | Tamaño / orientación | "Cuadrada, para Instagram" |
| **Texto en la imagen** | Las palabras exactas, si las hay | 'El titular dice "Venta de Fin de Semana"' |

```
Crea una imagen de {sujeto}, en estilo {estilo}.
Colores: {paleta}; usa el rojo de marca {#E5002B} para los acentos.
Formato: {cuadrada / horizontal}, apta para {uso}.
{Incluye el texto "{palabras exactas}". / Sin texto en la imagen.}
Mantenla simple y despejada.
```

Tres reglas para las imágenes, porque salen al público:

1. **Revise la exactitud.** Las imágenes de IA a menudo se equivocan con manos, ortografía del texto, logos y cantidades. Lea cada palabra de la imagen.
2. **Respete los derechos.** No pida logos reales, personajes con derechos de autor ni la imagen de una persona real.
3. **Confirme el ajuste de marca.** Solo `#E5002B` es el rojo de NovAIFlow. Una persona aprueba antes de publicar nada.

Muchos equipos usan las imágenes de IA principalmente para **borradores internos y tableros de inspiración**, y luego un diseñador finaliza cualquier cosa de cara al cliente. Ese es un uso perfectamente válido de la herramienta.

---

## 9. Uso responsable, aplicado a las plantillas

Ya conoce los cinco principios del Nivel 1. En este nivel dejan de ser abstractos y se convierten en **líneas que escribe dentro de cada ficha de plantilla.** El kit *es* la forma en que el uso responsable se escala en un equipo.

| Principio | Cómo vive en una plantilla |
|---|---|
| **Sin datos sensibles** en herramientas públicas sin política | La plantilla usa datos de muestra; la ficha anota la política |
| **Persona en el circuito** | Cada ficha termina con una línea "Revisar antes de enviar" |
| **Verificar hechos y cifras** | La ficha marca exactamente qué se debe confirmar |
| **Divulgar cuando se requiera** | La ficha anota si hay que divulgar el uso de IA |
| **Estándar de empresa sobre improvisación** | El kit mismo es el estándar |

El hábito más importante de este nivel: **toda plantilla termina con un paso de revisión.** Una plantilla que redacta un correo a un cliente pero no recuerda al usuario verificar el número de envío es una plantilla incompleta. La línea "Revisar antes de enviar" no es opcional: es lo que hace seguro entregar el kit a cualquiera.

---

## 10. Armar el kit de plantillas del equipo

Este es su entregable, y es más sencillo de lo que suena. Un **kit de plantillas** es un solo documento compartido que contiene una colección de **fichas de plantilla**, y una ficha son apenas cinco líneas cortas más un par de etiquetas.

### La ficha de plantilla

```
Nombre:                 {nombre corto y buscable}
Para qué tarea:         {qué hace, en una línea}
Plantilla:              {el prompt, con {variables} entre llaves}
Cuándo usarla:          {el disparador o la situación}
Revisar antes de enviar:{qué debe verificar una persona}
Idioma(s):              {EN / ES / ambos}
Responsable:            {quién mantiene esta ficha}
```

### Una ficha resuelta

```
Nombre:                 Aviso de envío a cliente
Para qué tarea:         Avisar a un cliente que su envío sale mañana
Plantilla:              Actúa como coordinador de logística. Redacta un correo
                        {tono} a {cliente} avisando que el envío {número} sale
                        {fecha}. Incluye el número de seguimiento {seguimiento}.
                        En {idioma}, máximo {largo} líneas.
Cuándo usarla:          Envío de salida confirmado, antes del cierre
Revisar antes de enviar:Número de envío, fecha y número de seguimiento correctos
Idioma(s):              EN / ES
Responsable:            Líder de despacho
```

### Tres reglas que mantienen confiable un kit

1. **Pruebe antes de agregar.** Una plantilla gana su lugar solo después de funcionar en **dos casos reales (no sensibles)** sin grandes ediciones.
2. **Nombre un responsable.** El kit necesita una persona encargada de mantenerlo al día, o se pudre.
3. **Manténgalo vivo.** Agregue una ficha cada vez que el equipo encuentre una nueva tarea repetida; retire las fichas que queden obsoletas.

Un buen kit empieza pequeño: cinco fichas sólidas le ganan a cincuenta mediocres. Crece de forma natural a medida que su equipo detecta más trabajo repetido.

---

## 11. Elegir el enfoque correcto — guía rápida de decisión

Júntelo todo. Cuando una tarea llega a su escritorio, pásela por esto:

1. **¿Es algo único o un repetido?** Repetido → haga (o reutilice) una plantilla. Único → solo escriba el prompt.
2. **¿Qué tipo de plantilla encaja?** Correo · Resumen · Hoja de cálculo · Imagen, o redacción simple.
3. **¿Qué está en juego?** Alto → use el modo más capaz y verifique con cuidado.
4. **¿Hay datos sensibles?** Sí → deténgase; use datos de muestra o una herramienta aprobada.
5. **¿Una persona lo revisó?** Siempre que sí antes de que salga de su pantalla.

Ese reflejo de cinco preguntas es la verdadera habilidad del Nivel 2. Las plantillas lo hacen rápido; estas preguntas lo mantienen seguro.

---

## 12. Preguntas frecuentes (FAQ)

**¿Sigo sin necesitar programar?**
Correcto: nada aquí es programación. Una plantilla es solo un prompt bien escrito con unos pocos espacios en blanco. Usted escribe en español o inglés sencillo.

**¿Cuántas plantillas debe tener el kit?**
Empiece con cinco buenas que cubran al menos tres tipos. La calidad le gana a la cantidad. El kit crece con el tiempo.

**¿Y si una plantilla da un resultado distinto en cada ejecución?**
Fíjela: sea específico con el tono, el largo y el formato, y dé un ejemplo. Las plantillas vagas divagan; las específicas se mantienen firmes.

**¿La IA puede armar la hoja de cálculo por mí?**
Describe la tabla y explica la fórmula; usted la construye y verifica en el archivo real. No puede ver ni cambiar su hoja de cálculo real.

**¿Las imágenes de IA son seguras para publicar?**
Solo después de que una persona revise exactitud, derechos y ajuste de marca. Úselas libremente para borradores internos; revise con cuidado antes de que algo salga al público.

---

## 13. Hoja de referencia de una página

Téngala en su escritorio. Es todo el nivel en una página.

| Tema | Recuerde esto |
|---|---|
| **Idea central** | No escriba el mismo prompt dos veces: haga una plantilla |
| **Plantilla** | Un buen prompt con `{variables}` para lo que cambia |
| **Patrones** | Instrucción · Ejemplo · Paso a paso · Rol · Refinar |
| **Redacción** | Redactar desde viñetas, reescribir por tono, traducir conservando la voz |
| **Resúmenes** | Pida una forma fija; mantenga cifras y nombres intactos |
| **Tablas** | La IA redacta la tabla; usted la construye y revisa en la hoja real |
| **Imágenes** | Brief de sujeto · estilo · colores (`#E5002B`) · formato · texto |
| **Elección de modo** | Rápido para lo diario; "más capaz" para lo largo, con datos y de alto riesgo |
| **Siempre** | Una persona revisa; sin datos sensibles; verifique los hechos |

**El inicio de plantilla reutilizable:**

```
Actúa como un {rol} que es {rasgo útil}.
{Tarea} el texto de abajo para {audiencia}.
Contexto: {pega tus datos no sensibles}.
Devuélvelo en {formato}, tono {tono}, en {idioma}, máximo {largo}.
```

**La ficha de plantilla, de un tirón:**
*Nombre · Para qué tarea · Plantilla · Cuándo usarla · Revisar antes de enviar · Idioma(s) · Responsable.*

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
