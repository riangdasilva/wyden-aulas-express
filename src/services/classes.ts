import { Class } from "../models/classes"
import { Course } from "../models/courses"
import { Classroom } from "../models/classrooms"

class ClassService {
  async createClass(data: any) {
    try {
      const course = await Course.findByPk(data.courseId)
      if (!course) {
        return { status: 404, data: "Course not found" }
      }
      const classroom = await Classroom.findByPk(data.classroomId)
      if (!classroom) {
        return { status: 404, data: "Classroom not found" }
      }
      const courseClass = await Class.findOne({
        where: { datetime: data.datetime, classroomId: data.classroomId },
      })
      if (courseClass) {
        return { status: 409, data: "Class already exists" }
      }
      const created = await Class.create(data)
      return { status: 201, data: created }
    } catch (err) {
      return { status: 500, data: err }
    }
  }

  async updateClass(id: string, data: any) {
    try {
      const course = await Course.findByPk(data.courseId)
      if (!course) {
        return { status: 404, data: "Course not found" }
      }
      const classroom = await Classroom.findByPk(data.classroomId)
      if (!classroom) {
        return { status: 404, data: "Classroom not found" }
      }
      const courseClass = await Class.findOne({
        where: {
          datetime: data.datetime,
          classroomId: data.classroomId,
        },
      })
      if (courseClass) {
        return { status: 409, data: "Class already exists" }
      }
      const [rowsAffected] = await Class.update(data, {
        where: { id: id },
      })
      if (!rowsAffected) {
        return { status: 404, data: "Class not found" }
      }
      return { status: 204, data: null }
    } catch (err) {
      return { status: 500, data: err }
    }
  }
}

export default new ClassService()
