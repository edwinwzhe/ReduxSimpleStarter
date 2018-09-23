import React from 'react'

/*
// functional component

const SearchBar = () => {
    return <input />;
};

//  class component
class SearchBar extends React.Component {
    render() {
        return <input />;
    }
}
*/

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term: term}); // instead of assignment
        this.props.onSearchChange(term);
    }
}


export default SearchBar;