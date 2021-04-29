import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Api, { schema } from './model'

const router = new Router()
const { name, bloodGroup, city, phonoNo, email } = schema.tree

/**
 * @api {post} /api Create api
 * @apiName CreateApi
 * @apiGroup Api
 * @apiParam name Api's name.
 * @apiParam bloodGroup Api's bloodGroup.
 * @apiParam city Api's city.
 * @apiParam phonoNo Api's phonoNo.
 * @apiParam email Api's email.
 * @apiSuccess {Object} api Api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Api not found.
 */
router.post('/',
  body({ name, bloodGroup, city, phonoNo, email }),
  create)

/**
 * @api {get} /api Retrieve apis
 * @apiName RetrieveApis
 * @apiGroup Api
 * @apiUse listParams
 * @apiSuccess {Object[]} apis List of apis.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /api/:id Retrieve api
 * @apiName RetrieveApi
 * @apiGroup Api
 * @apiSuccess {Object} api Api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Api not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /api/:id Update api
 * @apiName UpdateApi
 * @apiGroup Api
 * @apiParam name Api's name.
 * @apiParam bloodGroup Api's bloodGroup.
 * @apiParam city Api's city.
 * @apiParam phonoNo Api's phonoNo.
 * @apiParam email Api's email.
 * @apiSuccess {Object} api Api's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Api not found.
 */
router.put('/:id',
  body({ name, bloodGroup, city, phonoNo, email }),
  update)

/**
 * @api {delete} /api/:id Delete api
 * @apiName DeleteApi
 * @apiGroup Api
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Api not found.
 */
router.delete('/:id',
  destroy)

export default router
