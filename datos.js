// ============================================================
//  DATOS DE ASIGNATURAS Y TESTS  (el único archivo que tienes que editar)
// ============================================================
//
//  Para AÑADIR UN TEST:
//   1. Guarda el archivo del test en la carpeta de su asignatura (ej: sege/test-ud03.html)
//   2. Añade una línea dentro de "tests" de la asignatura:
//        { titulo: "Test UD03", descripcion: "Breve descripción", archivo: "sege/test-ud03.html" },
//
//  "descripcion" es opcional. Los tests salen en el orden en que los escribas.
// ============================================================

const ASIGNATURAS = {
    sege: {
        sigla: "SEGE",
        nombre: "Sistemas de Gestión Empresarial",
        icono: "🏢",
        tests: [
            { titulo: "Test 1", descripcion: "UD01, UD02 y tests de octubre y noviembre", archivo: "sege/test-sge.html" }
        ]
    },
    pm: {
        sigla: "PM",
        nombre: "Programación Multimedia",
        icono: "📱",
        tests: [
            // { titulo: "Test UD01", descripcion: "", archivo: "pm/test-ud01.html" },
        ]
    },
    di: {
        sigla: "DI",
        nombre: "Desarrollo de Interfaces",
        icono: "🎨",
        tests: [
            // { titulo: "Test UD01", descripcion: "", archivo: "di/test-ud01.html" },
        ]
    },
    ac: {
        sigla: "AC",
        nombre: "Acceso a Datos",
        icono: "🗄️",
        tests: [
            // { titulo: "Test UD01", descripcion: "", archivo: "ac/test-ud01.html" },
        ]
    },
    pp: {
        sigla: "PP",
        nombre: "Programación Multiprocesos",
        icono: "💻",
        tests: [
            // { titulo: "Test UD01", descripcion: "", archivo: "pp/test-ud01.html" },
        ]
    }
};