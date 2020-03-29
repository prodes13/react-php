import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state ={
         name: props.name,
         email: props.email,
         errors: {}
        }
    }

    handleForm = e => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            email: this.state.email
        }

        axios.patch('http://localhost:8000/api/auth/update', data)
            .then(res => {
                console.log(res.data);
                
            })
            .catch(e => this.setState({
                errors: e.response.data
            }));
        // this.props.history.push('/profile');
    }
        
    handleInput = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() { 
        let error = this.state.errors.error;
        error = (typeof error !== 'undefined') ? error : '';
        return (
            <div className="flex w-full">
                <aside className="w-1/6 bg-black h-screen">
                    <ul className="text-white p-4">
                        <li className="bg-gray-900 rounded py-1 px-3">
                            <Link to="/profile">Profile</Link>    
                        </li>
                    </ul>
                </aside>
                <section className="w-5/6 m-2 bg-white flex justify-center">
                    <form className="border border-gray-400 w-8/12 my-5" onSubmit={this.handleForm}>
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-300">Edit your data:</h1>
                            {error ? (<p className="text-red-400 text-sm">{error}</p>) : ("")}
                            <div className="mt-4">
                                <label>Name</label>
                                <input type="text" name="name" 
                                    placeholder="Write it here!" 
                                    className="p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                    value={this.state.name}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="mt-4">
                                <label>Email</label>
                                <input type="email" name="email" 
                                    placeholder="Write it here!" 
                                    className="p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                    value={this.state.email}
                                    onChange={this.handleInput}
                                />
                            </div>
                            <div className="mt-4">
                                <input type="submit" 
                                    className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                    value="Update"
                                />
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.auth.user.name,
        email: state.auth.user.email
    }
}
 
export default connect(mapStateToProps)(Profile);