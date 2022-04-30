import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Profile } from '@/components/user/Profile';
import { useDispatch } from 'react-redux';
import { profileRequest } from '@/modules/auth/profile'


const ProfilePage = () => {
    
    const [user, setUser] =useState({
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })
    const dispatch = useDispatch()
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
        const onSubmit = e => {
        e.preventDefault()
          alert('회원가입정보:' + JSON.stringify(user))
          dispatch(profileRequest(user))
        // window.location.href = "./login"
    }
  return (
      <Profile onChange={onChange} onSubmit={onSubmit}/>
  );
};
const mapStateToProps = state => ({ isProfiled: state.profile.isProfiled })
const profileActions = {profileRequest}
export default connect(mapStateToProps, profileActions)(ProfilePage)