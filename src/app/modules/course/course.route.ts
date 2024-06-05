import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { CourseValidations } from './course.validation'
import { CourseControllers } from './course.controller'

const router = express.Router()

router
  .route('/create-course')
  .post(
    validateRequest(CourseValidations.createCourseValidationSchema),
    CourseControllers.createCourse,
  )

router.route('/').get(CourseControllers.getAllCourses)

router
  .route('/:courseId/assign-faculties')
  .put(
    validateRequest(CourseValidations.facultiesWithCourseSchema),
    CourseControllers.assignFacultiesWithCourse,
  )

router
  .route('/:courseId/remove-faculties')
  .put(
    validateRequest(CourseValidations.facultiesWithCourseSchema),
    CourseControllers.removeFacultiesFromCourse,
  )

router
  .route('/:id')
  .get(CourseControllers.getSingleCourse)
  .patch(
    validateRequest(CourseValidations.updateCourseValidationSchema),
    CourseControllers.updateCourse,
  )
  .delete(CourseControllers.deleteCourse)

export const CourseRoutes = router
