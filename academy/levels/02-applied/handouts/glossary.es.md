# Glosario — Términos del Nivel 2 en Lenguaje Simple

El diccionario corto y sin jerga del Nivel 2. Retoma lo básico del Nivel 1 y agrega los términos nuevos
que necesitas para construir un kit de plantillas. Las definiciones están escritas para equipos de
negocio cotidianos — si solo lees una columna, lee "Significado simple".

---

| Término | Significado simple | Ejemplo rápido |
|---|---|---|
| **Prompt** | La instrucción que le das a la IA — tu pedido, en tus propias palabras. | "Escribe una respuesta de 4 oraciones a esta queja." |
| **Fórmula del prompt** | La receta Rol · Tarea · Contexto · Formato del Nivel 1 para escribir prompts claros. | La base sobre la que se construye cada plantilla. |
| **Plantilla** | Un prompt reutilizable con las partes que cambian marcadas como `{variables}` y el resto fijo, para que cualquiera lo reutilice igual. | Un prompt guardado de "respuesta por retraso" con `{número de pedido}`. |
| **Variable (placeholder)** | El espacio que llenas cada vez, escrito entre `{llaves}`. Marca lo que cambia. | `{nombre del cliente}`, `{fecha}`, `{tono}`. |
| **Marco fijo** | Las partes de una plantilla que se quedan igual en cada ejecución: rol, tono, idioma, formato. | "Siempre un email cálido, de menos de 90 palabras, en español." |
| **Tarjeta de plantilla** | La forma estándar de guardar una plantilla: nombre, tarea, la plantilla, cuándo-usarla, revisar-antes-de-enviar, idioma, responsable. | Una entrada de tu kit del equipo. |
| **Kit de plantillas** | Una biblioteca compartida y organizada de las plantillas de tu equipo — el entregable del Nivel 2. | Un doc o página wiki que todos reutilizan. |
| **Tono** | El "tono" de la escritura — cálido, formal, conciso, animado. Lo fijas en la plantilla para que los resultados sean consistentes. | "Cálido y profesional" vs. "corto y formal." |
| **Iteración (refinar)** | Mejorar un resultado respondiendo en el mismo chat en vez de empezar de nuevo. | "Hazlo más corto," "agrega un ejemplo." |
| **Refina, no rehagas** | El hábito de guiar una respuesta casi-correcta con una instrucción en vez de reescribir desde cero. | Arregla lo único que falla. |
| **Elección de modelo** | Decidir qué asistente o modo usar: uno rápido para texto diario, uno "más capaz" para trabajo largo o de mayor riesgo. | Email rápido → rápido; resumen grande y cuidadoso → más capaz. |
| **Modelo de IA** (o "modelo") | El "motor" entrenado detrás de la herramienta. Distintos modelos cambian velocidad por capacidad. | Como distintas marcas de motor. |
| **Resumen** | Una versión más corta de un texto largo que conserva los puntos clave y los próximos pasos. Verifica siempre que conservó los datos. | Hilo de correos → 5 viñetas + próximos pasos. |
| **Ayuda de hoja de cálculo / tabla** | Usar la IA para convertir texto desordenado en una tabla limpia o explicar una fórmula — que luego reconstruyes y verificas en la hoja real. | "Haz una tabla con estas columnas." |
| **Prompt de imagen** | Una descripción clara que le dice a la IA qué imagen crear: sujeto, estilo, colores, orientación, cualquier texto. | "Banner horizontal, estilo plano, acentos en rojo de marca." |
| **Alucinación** | Cuando la IA afirma algo falso pero suena segura. Verifica siempre datos y cifras. | Inventa una estadística que no es real. |
| **Persona en el circuito** | Una persona revisa, corrige y responde por el resultado de la IA antes de usarlo — el paso de revisar-antes-de-enviar. | Editas el borrador y lo envías bajo tu nombre. |
| **PII** | Información de Identificación Personal — datos que identifican a una persona (nombre, dirección, ID, número de tarjeta). No la pegues en herramientas públicas sin política. | El nombre completo de un cliente + su número de cuenta. |
| **PHI** | Información de Salud Protegida — datos de salud ligados a una persona. Extra sensible; manéjala solo bajo política aprobada. | El nombre de un paciente + su diagnóstico. |
| **Datos confidenciales** | Info privada del negocio: contratos, precios, secretos comerciales, planes internos. Trátalos como PII. | Un borrador de contrato o una lista de salarios. |
| **IA responsable** | Usar la IA de forma segura y ética: proteger datos, verificar hechos, revisar el resultado, divulgar cuando aplique. | Las 4 revisiones de tu hoja de plantillas. |
| **Responsable** | La persona que mantiene una tarjeta de plantilla (o todo el kit) al día y correcta. | "Responsable: Líder de despacho." |

---

> ¿Necesitas lo básico? Consulta el glosario del Nivel 1 para IA generativa, asistente de chat, token y
> ventana de contexto. Los Niveles 3–4 amplían estos y agregan nuevos (automatización, flujos,
> gobernanza). La guía completa de IA responsable vive en `docs/RESPONSIBLE-AI-DATA-PRIVACY.es.md`.

— NovAIFlow · AI Training & Enablement · novaiflow.com
