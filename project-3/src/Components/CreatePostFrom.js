import React, { Component } from 'react';

//class tells it what to show and how to show it 
class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          title: "",
          body: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <div>
                <h2>Create new Post</h2>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>

                <label for="cities"> 
                    Choose a city:
                </label>

                <select name="city" id="cities">
                    <option value="San Francisco">San Francisco </option>
                    <option value="New York"> New York</option>
                    <option value="Sydney"> Sydney</option>
                </select>

                <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="body" onChange={this.handleChange} />
                {/* Will need dropdown for avaible cities */}





                <input type="submit" value="Create post" />
            </form>
            </div>
        )
    }
}


export default CreatePostForm;