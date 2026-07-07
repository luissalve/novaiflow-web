# Solución — Ejercicio 1: Construya una plantilla reutilizable

Esta es una **respuesta modelo**, no la única correcta. Una buena plantilla siempre (1) marca cada
detalle que cambia caso a caso como `{variable}`, (2) fija el rol, el tono, la estructura y el idioma, y
(3) funciona para dos casos distintos sin reescribir. Use esto para revisar su propia tarjeta.

> **Para facilitadores:** premie cualquier plantilla que un colega pueda ejecutar en frío. La prueba es
> la reutilización, no la elegancia. Si tuvo que explicarla de palabra, todavía no está terminada.

---

## Una plantilla modelo (correo de estado de envío)

```text
Rol: Actúa como un gestor de cuentas amable en una empresa de freight.
Tarea: Escribe un correo {tono} a {nombre del cliente} sobre el estado de su envío {número de referencia}.
Contexto: Datos clave — el estado actual es {estado}; entrega prevista {fecha}; el motivo de cualquier cambio es {motivo}.
Público: un cliente habitual que valora avisos rápidos y honestos. Evita la jerga y prometer de más.
Formato: Menos de 120 palabras, con asunto y dos párrafos cortos, en {idioma}.
Termina con: un ofrecimiento de ayuda y un próximo paso claro.
```

### Rellenada con el caso de muestra A

> {tono} = que tranquilice · {nombre del cliente} = Importaciones Riverside · {número de referencia} = SH-4471 ·
> {estado} = retenido en el puerto · {fecha} = este jueves · {motivo} = una inspección de aduana · {idioma} = español

### Una respuesta que esto podría producir

```text
Asunto: Actualización del envío SH-4471 — previsto para el jueves

Hola equipo de Importaciones Riverside:

Una actualización rápida sobre el SH-4471: en este momento está retenido en el puerto por una
inspección de aduana de rutina. Por lo que estamos viendo, esperamos que se libere y les llegue este
jueves.

Lo seguiré de cerca y les avisaré en cuanto se libere. Si necesitan algo de nuestra parte mientras
tanto, respondan por aquí y lo atiendo enseguida.

Saludos cordiales,
[Su nombre]
```

---

## Por qué funciona — parte por parte

| Parte | En el modelo | Por qué importa |
|---|---|---|
| **Variables** | `{nombre del cliente}`, `{número de referencia}`, `{estado}`, `{fecha}`, `{motivo}`, `{idioma}` | Son lo único que cambia por caso; extraerlas es lo que la vuelve reutilizable. |
| **Rol fijo** | "gestor de cuentas amable en una empresa de freight" | La voz se mantiene consistente sin importar quién la ejecute. |
| **Límites fijos** | "Evita la jerga y prometer de más" | Mantiene la calidad y el tono estables en todo el equipo. |
| **Formato fijo** | "Menos de 120 palabras, asunto, dos párrafos" | Cada salida vuelve con la misma forma utilizable. |
| **Cierre fijo** | "ofrecimiento de ayuda y un próximo paso claro" | Asegura que el correo siempre termine con una acción. |

---

## Errores comunes y arreglos rápidos

| Error | Por qué duele | Arreglo |
|---|---|---|
| Dejó un nombre de cliente real en la plantilla | Ya no es reutilizable (y puede filtrar datos) | Reemplácelo con `{nombre del cliente}` |
| Sin variable `{idioma}` | Atrapada en un idioma; no sirve a clientes EN + ES | Agregue `{idioma}` a la línea de formato |
| Variables pero sin tono fijo | La salida cambia de tono en cada ejecución | Fije el rol y los límites "evita…" |
| Solo la probó una vez | No sabe si generaliza | Pruebe siempre con **dos** casos distintos |

---

## Fundamento (la gran idea)

Una plantilla es un prompt con las **partes cambiantes extraídas** y las **partes estándar fijadas**.
Ese solo movimiento convierte su habilidad personal en un activo del equipo: cualquiera obtiene su
calidad sin su ayuda. Todos los demás ejercicios del Nivel 2 se construyen sobre esto, y el kit que
arma al final es solo una colección de tarjetas bien hechas como esta.

Y siempre: la plantilla borra — **una persona revisa y responde** por lo que se envía.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
