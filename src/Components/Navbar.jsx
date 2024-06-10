import React from 'react'
import Button from '../Ui/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isAuthenticated} = useSelector((state)=>state.auth);

    const handleAuth=()=>{
        if(isAuthenticated){
             dispatch(logout());
        }
        else{
            navigate("/login");
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand fs-3 text-info fw-bold" href="#">TO DO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {isAuthenticated &&  <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/todos">Todos</Link>
                        </li>}
                      

                    </ul>

                    <Button onClick={handleAuth}>
                        {isAuthenticated ? 'Logout' :'Login'}
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar