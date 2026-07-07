# Hoja de referencia de prompts — Una página para guardar

Imprima esto, péguelo cerca de su escritorio y tendrá todo lo que enseñó el Nivel 1 de un vistazo. Un
buen prompt no es más que instrucciones claras para un asistente muy rápido. Use la fórmula, tome un
prompt ya listo y siga las tres reglas de oro.

---

## La fórmula: Rol · Tarea · Contexto · Formato

Complete estas cuatro partes y casi cualquier solicitud mejora. Piénselo como instruir a un compañero
nuevo.

| Parte | Pregúntese | Ejemplo |
|---|---|---|
| **Rol** | ¿Como quién debe actuar la IA? | "Eres nuestro coordinador de recepción." |
| **Tarea** | ¿Qué quiere exactamente? | "Escribe una respuesta a un reclamo por entrega tardía." |
| **Contexto** | ¿Qué necesita saber? | "El pedido llegó 2 días tarde; ofrecemos 10% de crédito; tono cálido y profesional." |
| **Formato** | ¿Qué forma debe tener la respuesta? | "Un correo de 4 oraciones más un asunto de una línea." |

**Plantilla que puede copiar:**
```
Rol: Eres {un rol — p. ej., nuestro gerente de oficina}.
Tarea: {lo que quiere lograr — una oración clara}.
Contexto: {datos clave, audiencia, tono, restricciones}.
Formato: {longitud, estructura, idioma — p. ej., un correo corto en español}.
```

> **Refine, no reinicie.** Su primera respuesta es un borrador. En lugar de abrir un chat nuevo,
> responda en la misma conversación: "Hazlo más corto", "Más formal", "Agrega una fecha límite", "Ahora
> en inglés". Guiar es mejor que empezar de cero.

---

## 8 prompts listos para usar

Copie uno, cambie las partes entre `{llaves}` por sus datos y listo. Sirven para cualquier equipo de
atención.

**1 · Responder a un mensaje de cliente**
```
Rol: Eres nuestro representante de servicio al cliente. Tarea: Redacta una respuesta a este mensaje: "{pegue el mensaje}". Contexto: El tono es {cercano/formal}; nuestra política es {política}. Formato: Un correo corto, menos de 120 palabras, con asunto.
```

**2 · Resumir un correo o documento largo**
```
Tarea: Resume el texto de abajo para un gerente ocupado. Contexto: Solo necesita decisiones y próximos pasos. Formato: Máximo 5 viñetas, más una línea "Acción necesaria:". Texto: {pegue aquí}.
```

**3 · Convertir notas sueltas en un mensaje pulido**
```
Rol: Eres mi asistente de redacción. Tarea: Convierte estas notas en un mensaje pulido. Contexto: La audiencia es {un cliente / mi equipo}; conserva mi sentido, corrige la gramática. Formato: Un párrafo ordenado. Notas: {pegue las notas}.
```

**4 · Escribir una publicación / anuncio**
```
Rol: Eres nuestro reclutador. Tarea: Escribe una publicación corta anunciando {el puesto/la noticia}. Contexto: Empresa PyME estilo NovAIFlow; tono animado pero profesional; puntos clave: {lista}. Formato: 3 párrafos cortos para redes sociales.
```

**5 · Traducir y adaptar (EN ⇄ ES)**
```
Tarea: Traduce el texto de abajo al {español/inglés}. Contexto: Que suene natural para un {cliente/padre/inquilino}, no palabra por palabra; conserva exactos los nombres y números. Formato: La misma estructura que el original. Texto: {pegue aquí}.
```

**6 · Hacer una lista de pasos rápida**
```
Tarea: Convierte esta meta en una lista simple que cualquiera de mi equipo pueda seguir: "{meta}". Contexto: Lo hacemos {cada semana/por pedido}; marca cualquier paso donde una persona deba revisar dos veces. Formato: Pasos numerados, máximo 8.
```

**7 · Generar opciones rápido**
```
Tarea: Dame 5 opciones distintas para {un asunto de correo / un nombre de campaña / una respuesta}. Contexto: Para {audiencia}; tono {tono}; evita {qué evitar}. Formato: Una lista numerada, una línea cada una.
```

**8 · Explicar algo en lenguaje sencillo**
```
Rol: Eres un maestro paciente. Tarea: Explica "{tema/término}" para que un no experto lo entienda. Contexto: El lector es un {colega / cliente} sin antecedentes. Formato: 3 oraciones cortas, sin jerga, más un ejemplo cotidiano.
```

---

## Las 3 reglas de oro

Péguelas donde pueda verlas. Mantienen la IA útil *y* segura.

1. **No pegue datos sensibles.** Nunca ponga PHI, PII ni información confidencial (nombres + datos de
   salud, identificaciones, números de tarjeta, contratos privados) en una herramienta pública sin una
   política aprobada. Quítelos o reemplácelos primero.
2. **Humano en el circuito.** La IA redacta; **usted** revisa, corrige y responde por el resultado. Su
   nombre va en él, no el de la IA.
3. **Verifique datos y cifras.** La IA puede sonar segura y aun así equivocarse ("alucinaciones").
   Contraste cualquier número, nombre, fecha o afirmación con sus registros reales antes de enviar.

---


— NovAIFlow · AI Training & Enablement · novaiflow.com
