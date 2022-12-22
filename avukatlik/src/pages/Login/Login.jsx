import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
  // const [data, setData] = useState('')
  const [userData, setUserData] = useState({ username: '', password: '' })

  const submitData = (e) => {
    // if (e && e.preventDefault) {
    e.preventDefault()
    axios.post('http://localhost:5000/login', {
      userData
    }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
    // console.log(userData)
    // }
  }

  return (
    <div className='login-base'>
      <div className='login-logo'>
        <p>DEMİR HUKUK BÜROSU</p>
      </div>
      <div className='login-signin'>
        <form>
          <p>Kullanıcı Adı:</p>
          <input type="text" onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
          <p>Şifre:</p>
          <input type="password" onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
          <button onClick={submitData} className='login-loginbtn'>Giriş Yap</button>
        </form>
      </div>
    </div>
  )
}

export default Login