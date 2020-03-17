import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor() {
        super();
        this.state={
            category_name: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name
        }
        axios.post('http://127.0.0.1:8000/category/store', category)
            .then(response => console.log(response));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>           
                <div className="form-group">
                    <label htmlFor="category">Category Name</label>
                    <input type="text" className="form-control" id="category" 
                        onChange={e => this.setState({
                            category_name: e.target.value
                        })}
                        value={this.state.category_name}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}
export default Add;