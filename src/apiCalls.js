import { publicRequest } from './requestMethod'
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from './store/slices/authSlice'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

 export const getProduct = async (setState, id) => {
   try {
     const { data } = await publicRequest.get('/products/find/' + id)
     setState(data)
   } catch (error) {}
 }
