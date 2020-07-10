import React, { Component } from 'react';

//class tells it what to show and how to show it 
class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "", 
            image_url: "",
            description: "",
            fun_fact: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            //sets the values for the above this.state
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (//props sends to parent(App.js)
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
                <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
                <input type="text" name="image_url" placeholder="image" onChange={this.handleChange} />
                <input type="text" name="description" placeholder="description" onChange={this.handleChange} />
                <input type="text" name="fun_fact" placeholder="fun_fact" onChange={this.handleChange} />
                <input type="submit" value="subnmit post" />
            </form>
        )
    }
}


export default CreatePostForm;