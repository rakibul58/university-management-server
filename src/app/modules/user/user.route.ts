import express from 'express'
import { UserController } from './user.controller'
import { studentValidations } from '../student/student.validation'
import validateRequest from '../../middlewares/validateRequest'
import { createFacultyValidationSchema } from '../faculty/faculty.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from './user.constant'

const router = express.Router()

router
  .route('/create-student')
  .post(
    auth(USER_ROLE.admin),
    validateRequest(studentValidations.createStudentValidationSchema),
    UserController.createStudent,
  )

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserController.createFaculty,
)

export const UserRoutes = router
