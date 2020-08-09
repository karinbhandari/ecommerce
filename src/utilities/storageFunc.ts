import Cookies from 'js-cookie'
// ************** Localstorage **************
const addToLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value)
}

const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key)
}

const getFromLocalStorage = (key: string): any => {
  return localStorage.getItem(key)
}

// ************** Cookies **************
// const cookieStorage = new CookieStorage()

const addToCookie = (key: string, value: any): void => {
  Cookies.set(key, value)
}

const removeFromCookie = (key: string): void => {
  Cookies.remove(key)
}

const getFromCookie = (key: string): any => {
  return Cookies.get(key)
}

export {
  addToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
  addToCookie,
  removeFromCookie,
  getFromCookie,
}
