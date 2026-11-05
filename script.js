// Datos de prueba iniciales: guardamos los valores que vamos a procesar.
const entrada_nombre = "   cARLOS aLBERTO   ";
const entrada_correo = "carlos.alberto@DOMINIO.COM";
const entrada_edad = "24";
const entrada_codigo_promo = "DESC-2026-X";

//Nombre
const solucionNombre = entrada_nombre.trim().toLowerCase();
const palabras = solucionNombre.split(" ");
const nombreFormateado =
palabras[0].charAt(0).toUpperCase() + palabras[0].slice(1) + " " +
palabras[1].charAt(0).toUpperCase() + palabras[1].slice(1);

//Correo
const solucionCorreo = entrada_correo.trim().toLowerCase();
const correoValido = solucionCorreo.includes("@") && solucionCorreo.endsWith(".com");

// Código promocional
const codigoPromoValido = entrada_codigo_promo.startsWith("DESC-");
const anioCuponTexto = entrada_codigo_promo.split("-")[1];

//Edad
const edad = Number(entrada_edad);
const anioCupon = Number(anioCuponTexto);
const esMayorDeEdad = edad >= 18;
const anioNacimiento = 2026 - edad;

// Si ambas condiciones se cumplen, asigna 10.5 puntos; si no, asigna 0.0.
let puntosPromocionales = 0.0;
if (esMayorDeEdad && anioCupon === 2026) {
  puntosPromocionales = 10.5;
}
// console.log muestra el resultado en la consola.
console.log("Nombre:",nombreFormateado);
console.log("Correo:", solucionCorreo);
console.log("¿Correo válido?", correoValido)
console.log("¿Código promocional válido?", codigoPromoValido);
console.log("Año estimado:", anioCupon, "(tipo:", typeof anioCupon + ")");
console.log("Edad registrada:", edad, "(tipo:", typeof edad + ")");



console.log("¿Mayor de edad?", esMayorDeEdad);
console.log("Año estimado de nacimiento:", anioNacimiento);
console.log("Puntos promocionales:", puntosPromocionales);

