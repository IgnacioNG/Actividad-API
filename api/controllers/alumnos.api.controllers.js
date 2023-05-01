import * as services from '../../services/alumnos.services.js'

function getAlumnos(req, res) {
    services.getAlumnos({ deleted: true })
        .then(function (alumnos) {
            res.status(200).json(alumnos)
        })
}

function createAlumno(req, res) {
    const alumno = {
        legajo: req.body.legajo,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: req.body.año
    }

    services.createAlumno(alumno)
        .then(function (alumno) {
            res.status(201).json(alumno)
        })
}

function getAlumnoByLegajo(req, res) {
    const legajo = req.params.legajo

    services.getAlumnoByLegajo(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno ${legajo} no encontrado en el sistema.` } })
            }
        })

}


function replaceAlumno(req, res) {
    const legajo = req.params.legajo;
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        año: req.body.año
    };

    services.editAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ error: { message: `Alumno ${legajo} no encontrado en el sistema.` } })
            }
        });
}


function deleteAlumno(req, res) {
    const legajo = parseInt(req.params.legajo)

    services.deleteAlumno(legajo)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            }
            else {
                res.status(404).json({ error: { message: `Alumno ${legajo} no encontrado en el sistema.` } })
            }
        })
}


function updateAlumno(req, res) {
    const legajo = req.params.legajo;
    const alumno = {};
    if (req.body.nombre) {
        alumno.nombre = req.body.nombre
    }
    if (req.body.apellido) {
        alumno.apellido = req.body.apellido
    }
    if (req.body.año) {
        alumno.año = req.body.año
    }
    services.editAlumno(legajo, alumno)
        .then(function (alumno) {
            if (alumno) {
                res.status(200).json(alumno)
            } else {
                res.status(404).json({ error: { message: `Alumno ${legajo} no encontrado en el sistema.` } })
            }
        });
}


export {
    getAlumnos,
    createAlumno,
    getAlumnoByLegajo,
    replaceAlumno,
    deleteAlumno,
    updateAlumno
}