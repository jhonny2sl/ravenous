import React from 'react';
import './SearchBar.css';

// Object contains requests for Yelp API
// The default values follow formatting and naming convention set by the API: https://docs.developer.yelp.com/reference/v3_business_search > QUERY PARAMS > sort_by
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    }
};