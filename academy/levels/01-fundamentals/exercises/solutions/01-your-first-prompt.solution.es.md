# Solución — Ejercicio 1: Su primer prompt útil

Esta es una **respuesta modelo**, no la única correcta. No existe un prompt perfecto único, pero uno
bueno siempre nombra un **Rol**, una **Tarea**, el **Contexto** y un **Formato**. Úsela para revisar
su propio trabajo y para ver los pequeños detalles que hacen que un prompt funcione.

> **Para facilitadores:** la meta del Ejercicio 1 es la confianza, no la perfección. Premie todo prompt
> que tenga las cuatro partes del esquema y produzca un borrador utilizable.

---

## Un prompt modelo (ejemplo de logística)

```text
Rol: Actúa como un coordinador de logística servicial en una empresa de freight.
Tarea: Escribe un correo breve y calmado a un cliente avisando que su envío está demorado.
Contexto: El envío lleva 2 días de retraso por congestión en el puerto. El cliente es habitual y
valora avisos rápidos y honestos. Ahora esperamos la entrega este jueves. Tono: profesional y que
tranquilice.
Formato: Un correo breve de menos de 120 palabras, con asunto, en español. Termina con un próximo paso claro.
```

### Una respuesta que esto podría producir

```text
Asunto: Actualización de su envío — nueva entrega el jueves

Hola James:

Quería escribirle personalmente sobre su envío. Por una congestión en el puerto, lleva unos dos días
de retraso. Ahora esperamos que le llegue este jueves.

Sé que el tiempo importa, así que estaré pendiente y le confirmaré apenas salga a reparto. Gracias por
su paciencia; responda a este correo si hay algo en lo que pueda ayudar mientras tanto.

Un saludo cordial,
[Su nombre]
```

---

## Por qué funciona — parte por parte

| Parte | En el modelo | Por qué importa |
|---|---|---|
| **Rol** | "coordinador de logística en una empresa de freight" | Fija la voz y la experiencia: el correo suena a que lo escribió la persona correcta. |
| **Tarea** | "Escribe un correo breve y calmado… demorado" | Un trabajo claro. El asistente no adivina lo que usted quiere. |
| **Contexto** | "2 días de retraso… puerto… cliente habitual… jueves" | Los datos hacen el borrador específico y fiel a su situación, no genérico. |
| **Formato** | "menos de 120 palabras, asunto, español, próximo paso claro" | Controla largo, forma e idioma para que el resultado esté listo para usar. |

---

## Errores comunes y arreglos rápidos

| Error | Por qué perjudica | Arreglo |
|---|---|---|
| "Escribe un correo a un cliente." | Muy vago: el asistente inventa todo. | Agregue Contexto: qué pasó, quién, cuándo, el tono. |
| Sin Formato | Recibe un ensayo de 300 palabras cuando quería 3 líneas. | Indique siempre largo y forma. |
| Idioma equivocado | El resultado vuelve en inglés cuando lo quería en español. | Agregue "en español" (o EN/ES) al Formato. |
| Incluyó un número de cuenta real | Datos sensibles en una herramienta pública. | Use un marcador como `{número de orden}`. |

---

## Fundamento (la gran idea)

Un prompt es un **brief**, no un conjuro mágico. Cuanto más claro sea sobre *quién* debe responder,
*qué* necesita, *con qué datos* y *en qué forma*, más cerca quedará el primer borrador. Todo lo demás
en este curso se apoya en este esquema.

Y siempre: el asistente borra; **usted revisa y responde** por lo que se envía.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
