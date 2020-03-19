import React, { Component } from 'react';

class Profile extends Component {
   
    render() { 
        return (
            <div className="flex">
                <div className="w-1/3"></div>
                <div className="w-1/3">
                    <h1>Your profile here!</h1>
                </div>
            </div>
        );
    }
}
 
export default Profile;