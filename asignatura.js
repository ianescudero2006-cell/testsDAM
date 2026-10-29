// Lógica común de las páginas de asignatura (sege/sege.html, pm/pm.html, ...).
// Cada página indica su asignatura con: <body data-asignatura="sege">
// Las páginas viven un nivel dentro de una carpeta, por eso las rutas llevan "../".

(function () {
    const clave = (document.body.dataset.asignatura || '').toLowerCase();
    const asignatura = ASIGNATURAS[clave];

    const titulo = document.getElementById('titulo');
    const subtitulo = document.getElementById('subtitulo');
    const contenedor = document.getElementById('tests');

    if (!asignatura) {
        document.title = 'Asignatura no encontrada';
        titulo.textContent = 'No encontrada';
        subtitulo.textContent = 'Esa asignatura no existe en datos.js.';
        return;
    }

    document.title = asignatura.sigla + ' · 2º DAM';
    titulo.textContent = asignatura.icono + ' ' + asignatura.sigla;
    subtitulo.textContent = asignatura.nombre;

    if (asignatura.tests.length === 0) {
        const vacio = document.createElement('div');
        vacio.className = 'empty';
        vacio.textContent = 'Todavía no hay tests en esta asignatura. ¡Pronto habrá!';
        contenedor.appendChild(vacio);
        return;
    }

    asignatura.tests.forEach(t => {
        const link = document.createElement('a');
        link.className = 'test-btn';
        link.href = '../' + t.archivo;

        const h3 = document.createElement('h3');
        h3.textContent = '📝 ' + t.titulo;
        link.appendChild(h3);

        if (t.descripcion) {
            const p = document.createElement('p');
            p.textContent = t.descripcion;
            link.appendChild(p);
        }

        contenedor.appendChild(link);
    });
})();
