import React, { Component } from 'react'
import { getAllCities } from '../Service/api_helper'
import AllCities from './AllCities'
import PostContainer from './PostContainer'

class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: null
        }
    }

    getCities = async () => {
        const allCities = await getAllCities();
        this.setState({
            cities: allCities
        })
    }

    componentDidMount() {
        this.getCities();
    }


    render() {
        return (
            <div>
                <h2>Show Post Page</h2>
                <nav>
                {this.state.cities && <AllCities posts={this.state.cities}/>}
                </nav>
                <main>
                <PostContainer />
                </main>
            </div>
        )
    }
}

export default Show;