import React from 'react';

// import { List } from './components/List/List';
// import userLists from './userLists';


const DisplayList = (props) => {
    return (
        <div className="kickass">
            <div className="listContainer">
                <ul>
                    { props.list() }
                </ul>
            </div>
        </div>
    )
}

export default DisplayList;
