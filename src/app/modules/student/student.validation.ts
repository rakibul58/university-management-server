import { z } from 'zod'

// Define Zod schemas for the nested objects
const userNameValidationSchema = z.object({
  firstName: z.string().trim().min(1, 'First Name is required'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last Name is required'),
})

const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is required'),
  fatherOccupation: z.string().trim().min(1, 'Father Occupation is required'),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, 'Father Contact Number is required'),
  motherName: z.string().trim().min(1, 'Mother Name is required'),
  motherOccupation: z.string().trim().min(1, 'Mother Occupation is required'),
  motherContactNo: z
    .string()
    .trim()
    .min(1, 'Mother Contact Number is required'),
})

const localGuardianValidationSchema = z.object({
  name: z.string().trim().min(1, 'Local Guardian Name is required'),
  occupation: z.string().trim().min(1, 'Local Guardian Occupation is required'),
  contactNo: z
    .string()
    .trim()
    .min(1, 'Local Guardian Contact Number is required'),
  address: z.string().trim().min(1, 'Local Guardian Address is required'),
})

// Define the main student schema
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['female', 'male'], {
        invalid_type_error: '{VALUE} is not a valid gender',
        required_error: 'Gender is required',
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .trim()
        .min(1, 'Email is required')
        .email('Invalid email address'),
      contactNo: z.string().trim().min(1, 'Contact Number is required'),
      emergencyContactNo: z
        .string()
        .trim()
        .min(1, 'Emergency Contact Number is required'),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().trim().min(1, 'Present Address is required'),
      permanentAddress: z
        .string()
        .trim()
        .min(1, 'Permanent Address is required'),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().trim().optional(),
    }),
  }),
})

export const studentValidations = {
  createStudentValidationSchema,
}
