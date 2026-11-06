// Datos de entrada
const entradaNombre = "   cARLOS aLBERTO   ";
const entradaCorreo = "carlos.alberto@DOMINIO.COM";
const entradaEdad = "24";
const entradaCodigoPromo = "DESC-2026-X";

// Nombre: elimina espacios exteriores y convierte cada palabra a formato título.
const nombreLimpio = entradaNombre.trim().toLowerCase();
const palabrasNombre = nombreLimpio.split(" ");
const nombreFormateado =
  palabrasNombre[0].charAt(0).toUpperCase() + palabrasNombre[0].slice(1) + " " +
  palabrasNombre[1].charAt(0).toUpperCase() + palabrasNombre[1].slice(1);

// Correo: normaliza mayúsculas y valida una estructura básica.
const correoValidado = entradaCorreo.trim().toLowerCase();
const correoValido = correoValidado.includes("@") && correoValidado.endsWith(".com");

// Edad y cupón
const edad = Number(entradaEdad);
const esMayorDeEdad = edad >= 18;
const anioCupon = Number(entradaCodigoPromo.split("-")[1]);
const codigoCuponValido = entradaCodigoPromo.startsWith("DESC-") && anioCupon === 2026;
const anioNacimiento = 2026 - edad;
const puntosAsignados = esMayorDeEdad && codigoCuponValido ? 10.5 : 0.0;

// Reporte final en consola
console.log(`==================================================
        FICHA DE USUARIO PROCESADA
==================================================
Nombre Formateado    : ${nombreFormateado}
Correo Validado      : ${correoValidado}
¿Correo Válido?      : ${correoValido}
Edad Registrada      : ${edad} (Tipo: ${typeof edad})
¿Mayor de Edad?      : ${esMayorDeEdad}
Año Estimado Nto.    : ${anioNacimiento}
Código Cupón Válido  : ${codigoCuponValido}
Puntos Asignados     : ${puntosAsignados}
==================================================`);
