import express from 'express'
import { StudentControllers } from './student.controller'
import validateRequest from '../../middlewares/validateRequest'
import { updateStudentValidationSchema } from './student.validation'

const router = express.Router()

router.get('/', StudentControllers.getAllStudents)

router
  .route('/:studentId')
  .get(StudentControllers.getSingleStudent)
  .patch(
    validateRequest(updateStudentValidationSchema),
    StudentControllers.updateStudent,
  )
  .delete(StudentControllers.deleteStudent)

export const StudentRoutes = router
