import { Classroom } from "../models/classrooms"

class ClassroomService {
  async createClassroom(data: any) {
    try {
      const classroom = await Classroom.findOne({
        where: {
          building: data.building,
          floor: data.floor,
          room: data.room,
        },
      })

      if (classroom) {
        return { status: 409, data: "Classroom already exists" }
      }

      const created = await Classroom.create(data)
      return { status: 201, data: created }
    } catch (err) {
      return { status: 500, data: err }
    }
  }

  async updateClassroom(id: string, data: any) {
    try {
      const classroom = await Classroom.findOne({
        where: {
          building: data.building,
          floor: data.floor,
          room: data.room,
        },
      })
      if (classroom) {
        return { status: 409, data: "Classroom already exists" }
      }
      const [rowsAffected] = await Classroom.update(data, {
        where: { id: id },
      })
      if (!rowsAffected) {
        return { status: 404, data: "Classroom not found" }
      }
      return { status: 204, data: null }
    } catch (err) {
      return { status: 500, data: err }
    }
  }
}

export default new ClassroomService()
