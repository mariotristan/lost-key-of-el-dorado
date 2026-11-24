# La llave perdida de El Dorado

**Una investigación de seguridad en una fintech ficticia de LATAM.** Una credencial del relay desapareció de la configuración actual poco antes de una exportación inusual de datos de clientes. Sigue las evidencias y repara la frontera de autenticación.

Idiomas: [English](../README.md) | **Español** | [Português](pt.md)

## La misión

Investigas un incidente en **Dorado Pago**, una empresa totalmente ficticia. El 18 de marzo de 2025, el equipo recibió una alerta por una exportación de clientes. Todo el contenido es inventado para prácticas sin conexión: nombres, credenciales, cuentas, direcciones IP y registros. No hay servicios reales que contactar ni se necesitan o permiten ataques externos.

1. **Recupera la llave perdida.** La configuración antigua del relay ya no está en la versión actual. Examina el historial Git y encuentra la credencial de práctica, deliberadamente falsa. Explica dónde la encontraste, cómo la verificaste y por qué borrar un archivo no elimina una credencial del historial.
2. **Reconstruye el incidente.** Usa el identificador de la credencial y las evidencias en [`evidence/`](../evidence/) para identificar el acceso sospechoso. Indica hora, dirección de origen, sesión, acciones y resultado. Distingue los hechos observados de tus hipótesis y cita las líneas o eventos que los sustentan.
3. **Repara autenticación y autorización.** Revisa [`app/auth.js`](../app/auth.js), ejecuta las pruebas y corrige el flujo vulnerable. Explica el ataque, tus cambios y sus compromisos. Se agradecen pruebas adicionales enfocadas.

## Primeros pasos

Necesitas Git y Node.js 20 o posterior. Clona normalmente, sin `--depth`: un ZIP o clon superficial puede omitir el historial necesario para la etapa 1. Trabaja localmente; no necesitas instalar dependencias ni conectarte a servicios.

```sh
git clone https://github.com/mariotristan/lost-key-of-el-dorado.git
cd lost-key-of-el-dorado
git log --all --oneline
node --test
```

Las pruebas de seguridad **fallan inicialmente a propósito**. Haz que todas pasen sin debilitarlas ni eliminarlas. El contrato de la API y los requisitos de seguridad están en [`app/README.md`](../app/README.md). La credencial falsa es una pista de investigación, no una contraseña de la aplicación.

## Qué preparar

Prepara un informe privado breve con:

- La credencial falsa, la ruta y el commit históricos, y tus pasos de investigación.
- Una cronología del acceso sospechoso con referencias, explicaciones alternativas y nivel de confianza.
- Tus cambios y pruebas, una explicación de las vulnerabilidades y recomendaciones priorizadas de contención y prevención.
- Supuestos y limitaciones. Se valora el razonamiento claro y los compromisos justificados, no solo la velocidad. El trabajo parcial bien explicado también es útil.

**Las entregas todavía no están abiertas.** No publiques soluciones, forks con soluciones, pull requests, respuestas en issues ni la credencial falsa. La organización proporcionará un canal privado antes de aceptar entregas.

## Reglas

Trabaja únicamente con los archivos y el código de tu clon local. No escanees, accedas ni ataques infraestructura, cuentas, personas o servicios de terceros reales. Los rangos IP reservados para documentación son evidencia simulada, no objetivos. No uses credenciales ni datos personales reales.

Es un ejercicio técnico ficticio, no una carrera de velocidad ni una afirmación de que la geografía determine la capacidad. Puedes explicar tu trabajo en español, portugués o inglés.
