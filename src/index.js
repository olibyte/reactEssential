import React from 'react';
import { render } from 'react-dom';
import Library from './Library.js';

let bookList = [
    { "title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 480 },
    { "title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304 },
    { "title": "Hunger", "author": "Ernest Hemingway", "pages": 320 }
]

render(
    <Library books={bookList} />
    ,
    document.getElementById('root')
);