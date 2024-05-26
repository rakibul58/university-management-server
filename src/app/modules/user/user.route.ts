import express from 'express'
import { UserController } from './user.controller'
import { studentValidations } from '../student/student.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router
  .route('/create-student')
  .post(
    validateRequest(studentValidations.createStudentValidationSchema),
    UserController.createStudent,
  )

export const UserRoutes = router
