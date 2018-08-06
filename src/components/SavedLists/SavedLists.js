import React from 'react';

import './SavedLists.css';
import plus from './plus.png';

const SavedLists = (props) => {
    return (
            <div className="listContainer">
                <div className="newList">
                    <h3>New List</h3>
                    <img src={plus} alt="plus sign"/>
                </div>
                <div className="SavedListContainer">
                    <ul>
                        { props.list() }
                    </ul>
                </div>
        </div>
    )
}

export default SavedLists;
