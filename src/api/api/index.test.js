import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Api } from '.'

const app = () => express(apiRoot, routes)

let api

beforeEach(async () => {
  api = await Api.create({})
})

test('POST /api 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', bloodGroup: 'test', city: 'test', phonoNo: 'test', email: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.bloodGroup).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.phonoNo).toEqual('test')
  expect(body.email).toEqual('test')
})

test('GET /api 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /api/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${api.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(api.id)
})

test('GET /api/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /api/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${api.id}`)
    .send({ name: 'test', bloodGroup: 'test', city: 'test', phonoNo: 'test', email: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(api.id)
  expect(body.name).toEqual('test')
  expect(body.bloodGroup).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.phonoNo).toEqual('test')
  expect(body.email).toEqual('test')
})

test('PUT /api/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', bloodGroup: 'test', city: 'test', phonoNo: 'test', email: 'test' })
  expect(status).toBe(404)
})

test('DELETE /api/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${api.id}`)
  expect(status).toBe(204)
})

test('DELETE /api/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
