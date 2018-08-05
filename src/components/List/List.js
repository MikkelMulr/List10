import React from 'react';

import './List.css';


const userLists = [
    {
        order: 1,
        listname: 'list 1',
        list: [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7',
            'item 8',
            'item 9',
            'item 10'
        ]
    },
    {
        order: 2,
        listname: 'list 2',
        list: [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7',
            'item 8',
            'item 9',
            'item 10'
        ]
    },
    {
        order: 3,
        listname: 'list 3',
        list: [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7',
            'item 8',
            'item 9',
            'item 10'
        ]
    },
    {
        order: 4,
        listname: 'list 4',
        list: [
            'item 1',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 6',
            'item 7',
            'item 8',
            'item 9',
            'item 10'
        ]
    }
];


const List = () => {
    return (
        <div>
            {
                userLists.map((user, index) => {
                    return (
                    <li>
                        {user.listname}
                        <ul id="itemList" className="">{
                            user.list.map((item, index) => {
                                return (
                                    <li>
                                        {'#' + (index + 1) + ': ' + item}
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </li>
                    )
                })
            }
        </div>
    )
}

export {List};
