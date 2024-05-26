import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { academicSemesterValidations } from './academicSemester.validation'

const router = express.Router()

router
  .route('/create-academic-semester')
  .post(
    validateRequest(
      academicSemesterValidations.createAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.createAcademicSemester,
  )
  .get(AcademicSemesterControllers.getAllAcademicSemesters)

router
  .route('/:semesterId')
  .get(AcademicSemesterControllers.getSingleAcademicSemester)
  .patch(
    validateRequest(
      academicSemesterValidations.updateAcademicSemesterValidationSchema,
    ),
    AcademicSemesterControllers.updateAcademicSemester,
  )

export const AcademicSemesterRoutes = router
