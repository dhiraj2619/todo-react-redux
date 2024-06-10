import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error,isAuthenticated } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername('');
    setPassword('')
  }


  useEffect(()=>{
       if(isAuthenticated){
          navigate('/todos');
          
       }
  },[isAuthenticated])
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card rounded-3 shadow p-3 mt-5">
            <h4 className="text-center">Login</h4>
            <form onSubmit={handleSubmit}>
              <div className="my-2">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mt-5">
                <button type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login