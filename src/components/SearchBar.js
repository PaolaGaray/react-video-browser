import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

    state = {
        query: ''
    }

    handleInputChange = (e) => {
        this.setState( { query: e.target.value } );
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.runMeWhenUserSubmits(this.state.query)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={this.handleInputChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}