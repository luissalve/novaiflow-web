# Ejercicio 2 — Resuma un documento largo en una plantilla

Los correos largos, los documentos de varias páginas y las notas de reunión consumen su día. La IA es
excelente para comprimirlos, pero solo si le indica **exactamente qué forma** quiere de vuelta. El
secreto es una *plantilla de resumen*: en vez de pedir "resume esto", pide una estructura fija (puntos
clave, decisiones, tareas, fechas) cada vez. Misma entrada desordenada, misma salida limpia, siempre.

En este ejercicio construirá una plantilla de resumen reutilizable y la ejecutará sobre un texto largo
realista. El resultado se convierte en una tarjeta de su **kit de plantillas del área**.

> **Tiempo:** unos 15 minutos · **Necesita:** cualquier asistente de IA de chat y un documento o hilo
> de correo largo y **no sensible** (use el ejemplo de abajo si no tiene uno a mano).

---

## Por qué una plantilla supera a "solo resúmelo"

| "Resume esto" | Una plantilla de resumen |
|---|---|
| Recibe la forma que la IA prefiera | Recibe las mismas secciones cada vez |
| Suele perder detalles importantes (fechas, responsables) | Usted nombra las secciones que no puede perder |
| Difícil de escanear | Hecho para leerse en 10 segundos |
| Vuelve a explicar lo que quiere cada vez | La estructura se escribe una sola vez |

El movimiento: decida las **secciones fijas** que siempre necesita y convierta la entrada cambiante en
una variable `{pegar texto aquí}`.

---

## El escenario

Elija una "cosa larga" recurrente que deba digerir. Ejemplos por rol:

| Su mundo | Un texto largo para resumir en serie |
|---|---|
| Logística / freight | Un hilo largo de correos con un carrier sobre una demora |
| Clínica (admin) | Un ida y vuelta de varios mensajes sobre agenda (no clínico) |
| Despacho legal | Una carta de 3 páginas o un memo de reunión |
| Colegio | Notas de una reunión de personal o de padres |
| Gobierno | Actas de una reunión de concejo/comité |
| Construcción | Un reporte diario de obra o un hilo de RFI |
| Hotel | Una cadena larga de correos de atención al huésped |

### Texto largo de muestra (úselo si no tiene uno)

```text
De: Ops <ops@example.com>
Hola equipo — repaso rápido de la llamada con el carrier de esta mañana. El corredor Miami–Atlanta va
con cerca de un día de retraso por el clima del fin de semana. El carrier dice que los camiones
deberían volver al horario normal el miércoles. Dos envíos están afectados: SH-4471 (Importaciones
Riverside) ahora previsto para el jueves, y SH-4490 (Coastal Supply) ahora previsto para el viernes.
Riverside ya pidió actualizaciones diarias, así que enviemos una cada mañana. Coastal no lo ha pedido,
pero deberíamos avisarle de forma proactiva. Facturación quiere saber si la demora activa algún crédito
de servicio — Dana revisa el contrato antes del fin del día martes. Además, el carrier subió los
recargos de combustible a partir del próximo mes; debemos revisar nuestras cotizaciones antes de eso.
Reagrupemos el miércoles cuando vuelvan los camiones.
```

---

## Su tarea

Construya una **plantilla de resumen** reutilizable y luego ejecútela sobre el ejemplo (o su propio
texto).

### Esquema para rellenar

```text
Rol: Actúa como un asistente preciso que resume para {público, p. ej. un gerente de operaciones ocupado}.
Tarea: Resume el texto de abajo en la estructura fija mostrada, manteniendo exactas todas las fechas, nombres y cifras.
Estructura:
- En resumen: {1 frase}
- Puntos clave: {número} viñetas, cada una menos de 15 palabras
- Decisiones tomadas: viñetas (o "ninguna")
- Tareas: quién · qué · para cuándo
- Preguntas abiertas / riesgos: viñetas (o "ninguno")
Reglas: No inventes nada. Si algo no se indica, escribe "no indicado". Mantén cada cifra y fecha sin cambios.
Formato: En {idioma}. Lenguaje sencillo, fácil de escanear.

Texto a resumir:
{pegar aquí el texto no sensible}
```

---

## Pasos

1. Decida las **secciones fijas** que siempre quiere (el esquema de arriba es un buen punto de partida).
2. Pegue el texto de muestra (o su propio texto no sensible) en el espacio `{pegar…}` y ejecútelo.
3. Compare el resumen con la fuente: ¿están exactos y sin cambios todos los **nombres, fechas y cifras**?
4. ¿Inventó algo? Si es así, agregue o refuerce la regla "No inventes" y vuelva a ejecutar.
5. Guarde la plantilla (sin el texto pegado) como tarjeta del kit con el nombre "Resumen — [su uso]".

---

## Así se ve el éxito

- [ ] El resumen vuelve en su **estructura fija** cada vez (en resumen, puntos clave, decisiones, tareas, riesgos).
- [ ] **Cada** nombre, fecha y cifra coincide exactamente con la fuente: nada cambiado ni inventado.
- [ ] Las tareas muestran con claridad **quién · qué · para cuándo**.
- [ ] Lo que no está en la fuente se marca "no indicado", no se adivina.
- [ ] La plantilla (sin el texto pegado) está guardada y es reutilizable por un colega.

> **Recuerde (IA responsable):** solo pegue texto **no sensible** en una herramienta pública salvo que
> la política de su empresa lo permita. La IA puede perder o cambiar una cifra: **verifique cada número
> y fecha** contra el original. La IA redacta el resumen; **una persona confirma que es exacto** antes de
> usarlo.

---

— NovAIFlow · AI Training & Enablement · novaiflow.com
