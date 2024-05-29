import { z } from 'zod'

// Define the main user schema
const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string.',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be string',
      required_error: 'faculty is required',
    }),
  }),
})

// Define the main user schema
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Department must be string.',
      required_error: 'Name is required',
    }),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Faculty must be string',
      })
      .optional(),
  }),
})

export const academicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
}
