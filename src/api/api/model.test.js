import { Api } from '.'

let api

beforeEach(async () => {
  api = await Api.create({ name: 'test', bloodGroup: 'test', city: 'test', phonoNo: 'test', email: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = api.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(api.id)
    expect(view.name).toBe(api.name)
    expect(view.bloodGroup).toBe(api.bloodGroup)
    expect(view.city).toBe(api.city)
    expect(view.phonoNo).toBe(api.phonoNo)
    expect(view.email).toBe(api.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = api.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(api.id)
    expect(view.name).toBe(api.name)
    expect(view.bloodGroup).toBe(api.bloodGroup)
    expect(view.city).toBe(api.city)
    expect(view.phonoNo).toBe(api.phonoNo)
    expect(view.email).toBe(api.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
