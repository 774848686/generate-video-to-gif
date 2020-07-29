import router from './router'
import {
  getGdata
} from '@/utils/Gdata';
import {
  reportLog,
  getUserKey,
  getGlobalKey,
  setGlobalKey
} from '@/utils'
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    // 设置全局Gdata
    let data = Object.assign(getUserKey(), {
      userId: getUserKey().id,
      ...to.query
    });
    // 判断url上是否带有spm，没有则从缓存取
    if (!data.position) {
      let global = getGlobalKey();
      data = Object.assign(global,getUserKey())
    }
    getGdata(data);
    setGlobalKey(JSON.stringify(window.common.Gdata));
  }
  const whiteList = ['/login', '/register', '/home'] // 不重定向白名单
  if (getUserKey().id) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      next();
    }
  } else {
    next();
  }
})