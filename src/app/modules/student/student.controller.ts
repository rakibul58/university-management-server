import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { RequestHandler } from 'express'

const getAllStudents: RequestHandler = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB(req.query)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students is Retrieved Successfully!',
    data: result,
  })
})

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await StudentServices.getSingleStudentFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is fetched Successfully!',
    data: result,
  })
})

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params
  const { student } = req.body
  const result = await StudentServices.updateStudentIntoDB(id, student)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  })
})

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await StudentServices.deleteStudentFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully!',
    data: result,
  })
})

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
}
