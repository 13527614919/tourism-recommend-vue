import Cookies from 'js-cookie'
import VueCookies from 'vue-cookies'

const TokenKey = 'User-Token'
const RoleKey = 'User-Role'
const UserHeadImgKey = 'User-HeadImg'
const UserNameKey = 'User-Name'
const UserPhoneKey = 'User-Phone'

function getUser () {
  const token = Cookies.get(TokenKey)
  if (token === undefined) {
    return null
  }
  return {
    token: token,
    role: Cookies.get(RoleKey),
    userHeadImg: Cookies.get(UserHeadImgKey),
    userName: Cookies.get(UserNameKey),
    userPhone: Cookies.get(UserPhoneKey)
  }
}

function getUserName (user) {
  if (user === null) {
    return '未登录'
  }
  if (user.userName === '' || user.userName === null) {
    return user.userPhone
  }
  return user.userName
}

export default {

  user: getUser(),
  userInfo: getUserName(getUser()),

  setUser (user, isAutoLogin) {
    Cookies.set(TokenKey, user.token)
    Cookies.set(RoleKey, user.role)
    Cookies.set(UserHeadImgKey, user.userHeadImg)
    Cookies.set(UserNameKey, user.userName)
    Cookies.set(UserPhoneKey, user.userPhone)

    // 判断是否勾选自动登录
    if (isAutoLogin) {
      VueCookies.set(TokenKey, user.token)
      VueCookies.set(RoleKey, user.role)
      VueCookies.set(UserHeadImgKey, user.userHeadImg)
      VueCookies.set(UserNameKey, user.userName)
      VueCookies.set(UserPhoneKey, user.userPhone)
    }
  },
  getUser () {
    const token = Cookies.get(TokenKey)
    if (token === undefined) {
      return null
    }
    return {
      token: token,
      role: Cookies.get(RoleKey),
      userHeadImg: Cookies.get(UserHeadImgKey),
      userName: Cookies.get(UserNameKey),
      userPhone: Cookies.get(UserPhoneKey)
    }
  },
  removeUser () {
    Cookies.remove(TokenKey)
    Cookies.remove(RoleKey)
    Cookies.remove(UserHeadImgKey)
    Cookies.remove(UserNameKey)
    Cookies.remove(UserPhoneKey)
  },
  isLogin () {
    return Cookies.get(TokenKey) !== undefined
  }
}
