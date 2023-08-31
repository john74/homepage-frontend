import { stackMiddlewares } from '@middlewares/stackMiddlewares';
import { refreshTokenValidity } from '@middlewares/refreshTokenValidity';


const middlewares = [refreshTokenValidity];
export default stackMiddlewares(middlewares);


export const config = {
  matcher: ['/sign-in'],
}