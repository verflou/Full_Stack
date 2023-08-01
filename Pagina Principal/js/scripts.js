function mostrarDatosContacto() {
    var datosContacto = "Correos electrónicos de los estudiantes que relizaron el trabajo: \nigsuarez@escuelasproa.edu.ar \njsuarez@escuelasproa.edu.ar \nvgalanmartinez@escuelasproa.edu.ar \ntbecchi@escuelasproa.edu.ar";
    var datosSeparados = datosContacto.replace(/\n/g, '\n\n');
    alert(datosSeparados);
}
