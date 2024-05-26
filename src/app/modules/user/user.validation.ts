import { z } from 'zod'

// Define the main user schema
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string.',
    })
    .max(20, 'Password can not be more than 20 characters.')
    .optional(),
})

export const userValidations = { userValidationSchema }
