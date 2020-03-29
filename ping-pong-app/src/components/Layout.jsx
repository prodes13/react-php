import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function Layout(props) {

    const handleLogout = e => {
        e.preventDefault();
        cookie.remove("token");
        props.logout();
    }

    return (
        <div>
            <nav className="flex justify-between">
                <h1 className="py-4 mx-10">PingPong Authentication</h1>
                <div className="flex justify-between">
                    { 
                        !props.loggedIn ? <>
                            <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                to="/login">
                                Login
                            </Link>
                            <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                to="/register">
                                Register
                            </Link>
                        </> 
                        : 
                        <Link className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                            onClick={handleLogout}
                            to="/logout">
                            Logout
                        </Link> 
                    }
                </div>
            </nav>
            { props.children }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch({ type: 'SET_LOGOUT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)