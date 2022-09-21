import { Link } from 'react-router-dom'

import './Login.scss'

const Login = () => {
  return (
    <div className='container'>
        <div className='image'>
        </div>
        <div className='login-form-container'>
            <div className='login-form'>
                <p>Welcome Back</p>
                <h1>Login to your account</h1>
                <p className='label'>
                    Email
                </p>
                <input type="email" />
                <p className='label'>
                    Password
                </p>
                <input type="Password" />
                <Link to='/users'>
                    <button>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login