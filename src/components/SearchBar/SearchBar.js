import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        // Object contains requests for Yelp API
        // The default values follow formatting and naming convention set by the API: https://docs.developer.yelp.com/reference/v3_business_search > QUERY PARAMS > sort_by
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }

    // Return a class that changes CSS styles to one renderSortByOptions() that has been selected
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            const sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue}
                       className={this.getSortByClass(sortByOptionValue)} 
                       onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                        {sortByOption}
                    </li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
};

export default SearchBar;