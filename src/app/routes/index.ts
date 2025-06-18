import  express  from 'express';
import { userRouter } from '../modules/user/user.routes';
import { adminRouter } from '../modules/admin/admin.routes';

const router = express.Router()

const moduleRoutes =[
 {
        path: '/user',
        route: userRouter
    },
 {
        path: '/admin',
        route: adminRouter
    },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router;