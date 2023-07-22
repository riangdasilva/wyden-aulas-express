import { Course } from "../models/courses"

class CourseService {
  async createCourse(data: any) {
    try {
      const course = await Course.findOne({ where: { name: data.name } })
      if (course) {
        return { status: 409, data: "Course already exists" }
      }
      const created = await Course.create(data)
      return { status: 201, data: created }
    } catch (err) {
      return { status: 500, data: err }
    }
  }

  async updateCourse(id: string, data: any) {
    try {
      const course = await Course.findOne({ where: { name: data.name } })
      if (course) {
        return { status: 409, data: "Course already exists" }
      }
      const [rowsAffected] = await Course.update(data, {
        where: { id: id },
      })
      if (!rowsAffected) {
        return { status: 404, data: "Course not found" }
      }
      return { status: 204, data: null }
    } catch (err) {
      return { status: 500, data: err }
    }
  }
}

export default new CourseService()
