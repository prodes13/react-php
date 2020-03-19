import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return (
            <div className="flex">
                <div className="w-1/3"></div>
                <div className="w-1/3 mt-10 p-4 bg-white">
                    <form className="border border-gray-400">
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-300">Login</h1>
                            <div className="mt-4">
                                <label>Email</label>
                                <input type="email" name="email" 
                                    placeholder="Write it here!" 
                                    className="p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <label>Password</label>
                                <input type="password" name="password" 
                                    placeholder="Write it here!" 
                                    className="p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <input type="submit" 
                                    className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                    value="Enter"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;