import { pubsub } from './pubsub.js';

export const statsContainer = {
    render: container => {
        //build form
        let template = document.getElementById('statsTemplate');
        let stats = template.content.cloneNode(true);

        // // adding listners
        // form.addEventListener('submit', movieForm.add);
        container.appendChild(stats);

    },
    initSubscriptions: () => {
        //tell the pubsub controller that we want to know about any actorAdded event
        console.log('Stats: want to know if a book is added');
        pubsub.subscribe('bookAdded', statsContainer.countChanged);
        pubsub.subscribe('bookRemoved', statsContainer.countChanged);
    },

    countChanged: (book) => {
        console.log('shwet', document.querySelector('#book-list').children.length);
        document.querySelector('.stats-container').innerHTML = '';
        document.querySelector('.stats-container').innerHTML = `<h3>${document.querySelector('#book-list').children.length ? document.querySelector('#book-list').children.length : 0} books added</h3>`;
    }
};
