import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { academicDepartmentValidations } from './academicDepartment.validation'
import { AcademicDepartmentControllers } from './academicDepartment.controller'

const router = express.Router()

router
  .route('/create-academic-department')
  .post(
    validateRequest(
      academicDepartmentValidations.createAcademicDepartmentValidationSchema,
    ),
    AcademicDepartmentControllers.createAcademicDepartment,
  )

router.route('/').get(AcademicDepartmentControllers.getAllAcademicDepartments)

router
  .route('/:departmentId')
  .get(AcademicDepartmentControllers.getSingleAcademicDepartment)
  .patch(
    validateRequest(
      academicDepartmentValidations.updateAcademicDepartmentValidationSchema,
    ),
    AcademicDepartmentControllers.updateAcademicDepartment,
  )

export const AcademicDepartmentRoutes = router
