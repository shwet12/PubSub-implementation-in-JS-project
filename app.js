/**
 * build the interface and decide which modules to display
 * on the web page
 **/

import { bookList } from './table.js';

import { bookForm } from './form.js';

import { statsContainer } from './stats.js';

//  import { stats } from './stats.js';

document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('.container');
    //add a movies module
    bookForm.render(main);
    statsContainer.render(main);
    bookList.render(main);

    if (bookList.initSubscriptions) {
        bookList.initSubscriptions();
    }
    if (statsContainer.initSubscriptions) {
        statsContainer.initSubscriptions();
    }

});
