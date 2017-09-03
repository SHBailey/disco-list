import server from './server.js'
import request from 'supertest'

describe('server', () => {
  test('it serves the main app from GET /', () => {
    return request(server)
      .get('/')
      .expect('content-type', 'text/html; charset=UTF-8')
      .expect(200)
  })

  test('it saves a new user from the main app from POST /user', () => {
    return request(server)
      .post('/user')
      .expect('content-type', 'text/html; charset=UTF-8')
      .expect(200)
  })

  test('it serves the static bundle from /bundle.js', () => {
    return request(server)
      .get('/bundle.js')
      .expect('content-type', 'application/javascript')
      .expect(200)
  })
})
