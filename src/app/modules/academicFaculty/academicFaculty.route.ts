import express from 'express'
import { academicFacultyValidations } from './academicFaculty.validation'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicFacultyControllers } from './academicFaculty.controller'

const router = express.Router()

router
  .route('/create-academic-faculty')
  .post(
    validateRequest(
      academicFacultyValidations.createAcademicFacultyValidationSchema,
    ),
    AcademicFacultyControllers.createAcademicFaculty,
  )

router.route('/').get(AcademicFacultyControllers.getAllAcademicFaculties)

router
  .route('/:facultyId')
  .get(AcademicFacultyControllers.getSingleAcademicFaculty)
  .patch(
    validateRequest(
      academicFacultyValidations.updateAcademicFacultyValidationSchema,
    ),
    AcademicFacultyControllers.updateAcademicFaculty,
  )

export const AcademicFacultyRoutes = router
