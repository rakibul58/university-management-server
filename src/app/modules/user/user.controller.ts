import { UserService } from './user.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body

  const result = await UserService.createStudentIntoDB(password, studentData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is Created Successfully',
    data: result,
  })
})

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body

  const result = await UserService.createFacultyIntoDB(password, facultyData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created successfully',
    data: result,
  })
})

export const UserController = {
  createStudent,
  createFaculty,
}
