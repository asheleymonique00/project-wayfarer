import React, {Component} from 'react';

class TestEdit extends Component {
    constructor(props) {
        super(props);

        this.state= {
            title: "",
            body:"",
            img:"",
            cityId: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() { 
        return(
            <form onSubmit={(e) => this.props.updatePost(e, this.props.postId, this.state)}>
                <h1>Edit Current Post</h1>
                <input type="text" name="title" placeholder="Title" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="Body" onChange={this.handleChange} />
                <input type="text" name="img" placeholder="Picture" onChange={this.handleChange} />
                <input type="text" name="cityId" placeholder="cityId" onChange={this.handleChange} />
                <input type="submit" value="Submit Post" />
            </form>
        )
    }
}

export default TestEdit;