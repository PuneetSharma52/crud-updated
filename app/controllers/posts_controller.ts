import type { HttpContext } from '@adonisjs/core/http'
import Post from '#models/post'

export default class PostsController {
  async index({ response }: HttpContext) {
    const posts = await Post.all()
    return response.ok(posts)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['fullName', 'email', 'password'])
    const post = await Post.create(data)
    return response.created(post)
  }

  async show({ params, response }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    return response.ok(post)
  }

  async update({ params, request, response }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    const data = request.only(['fullName', 'email', 'password'])
    post.merge(data)
    await post.save()
    return response.ok(post)
  }

  async destroy({ params, response }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
    return response.noContent()
  }
}
