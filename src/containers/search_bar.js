import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {term: ''};

        // this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    render(){
        return(
            <form className="input-group">
                <input 
                placeholder="Get a five day forecast"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange.bind(this)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">submit</button>
                </span>
            </form>
        );
    }
}