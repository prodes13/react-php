import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <div>
            <nav className="flex">
                <h1 className="w-3/4 py-4 mx-10">PingPong Authentication</h1>
                <div className="w-1/4 justify-end">
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

export default connect(mapStateToProps)(Layout)