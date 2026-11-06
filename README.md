# Quiz-William

Pequeño ejercicio de JavaScript que procesa datos de ejemplo y muestra una ficha de usuario en la consola del navegador.

## ¿Qué hace?

El archivo `script.js` toma un nombre, un correo, una edad y un código promocional definidos directamente en el código. Luego:

- limpia y da formato al nombre (capitaliza dos palabras);
- convierte el correo a minúsculas y comprueba que contenga `@` y termine en `.com`;
- convierte la edad de texto a número y determina si la persona tiene 18 años o más;
- revisa que el cupón empiece con `DESC-` y que el año incluido sea 2026;
- calcula un año de nacimiento estimado usando 2026 como año de referencia;
- asigna 10.5 puntos si la persona es mayor de edad y el cupón es válido; en caso contrario, asigna 0;
- imprime los resultados en la consola.

## Cómo ejecutarlo

1. Abre `index.html` en un navegador.
2. Abre las herramientas de desarrollador del navegador (normalmente con `F12`) y selecciona la pestaña **Consola**.
3. Consulta allí la ficha procesada.

También puedes ejecutar el script con Node.js desde la carpeta del proyecto:

```bash
node script.js
```

## Cambiar los datos de ejemplo

Edita las constantes `entradaNombre`, `entradaCorreo`, `entradaEdad` y `entradaCodigoPromo` al inicio de `script.js`, y vuelve a ejecutar el archivo.

## Archivos

- `index.html`: página mínima que carga el script.
- `script.js`: procesamiento de los datos y reporte por consola.
- `README.md`: descripción y guía de uso.

> Este proyecto es un ejercicio didáctico: los datos están escritos en el código y no se solicitan mediante un formulario.
