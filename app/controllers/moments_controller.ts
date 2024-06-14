import type { HttpContext } from '@adonisjs/core/http'

import Moment from '#models/moment'

export default class MomentsController {
  //--------------------------------------------------------
  async store({ request, response }: HttpContext) {
    const body = request.body()

    const moment = await Moment.create(body)

    response.status(201)

    return {
      message: 'Moment created successfully!',
      data: moment,
    }
  }

  //--------------------------------------------------------
  async index() {
    const moments = await Moment.all()

    return {
      message: 'Moment Shown on Browser successful!',
      data: moments,
    }
  }
  //--------------------------------------------------------
  async show({ params }: HttpContext) {
    const moment = await Moment.find(params.id)

    return {
      data: moment,
    }
  }
  //--------------------------------------------------------
  async destroy({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)
    await moment.delete()

    return {
      message: 'Moment deleted successfully!',
      data: moment,
    }
  }
  //--------------------------------------------------------
  async update({ params, request }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)

    const body = request.body()

    moment.title = body.title
    moment.description = body.description

    await moment.save()

    return {
      message: 'Moment updated successfully!',
      data: moment,
    }
  }
  //--------------------------------------------------------
}
