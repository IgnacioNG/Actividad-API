import {Router} from 'express'
import * as controller from '../controllers/alumnos.api.controllers.js'

const route = Router()

route.get('/alumnos', controller.getAlumnos)
route.post('/alumnos', controller.createAlumno)
route.get('/alumnos/:legajo', controller.getAlumnoByLegajo)
route.put('/alumnos/:legajo', controller.replaceAlumno)
route.patch('/alumnos/:legajo', controller.updateAlumno)
route.delete('/alumnos/:legajo', controller.deleteAlumno)

export default route