const MomentsController = () => import('#controllers/moments_controller')
import router from '@adonisjs/core/services/router'

router.get('/', () => {
  return {
    page: 'Home',
  }
})
// Store operation is not working in popstman.
// other methods are working properly in the postman
router.post('/moments', [MomentsController, 'store'])
router.get('/moments', [MomentsController, 'index'])
router.get('/moments/:id', [MomentsController, 'show'])
router.delete('/moments/:id', [MomentsController, 'destroy'])
router.patch('/moments/:id', [MomentsController, 'update'])
