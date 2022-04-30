import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Login } from '@/components/auth/Login';
import { useDispatch } from 'react-redux';
import { loginRequest, logoutRequest } from '@/modules/auth/login';

const LoginPage = () => {
  
  const [user, setUser] = useState({
    userid: '', password: ''
  })
  const dispatch = useDispatch()
  const onChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault()
    alert('로그인 정보:' + JSON.stringify(user))
    dispatch(loginRequest(user))
    // window.location.href = "./login"
  }
return (
  <Login onChange={onChange} onSubmit={onSubmit} />
)
}
    
const mapStateToProps = state => ({ isloggined: state.login.isloggined })
const loginActions = {loginRequest, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage)