import { pubsub } from './pubsub.js';

export const bookForm = {
    render: container => {
        //build form
        let template = document.getElementById('formTemplate');
        let form = template.content.cloneNode(true);

        // adding listner
        container.appendChild(form);
        document.getElementById('book-form').addEventListener('submit', bookForm.add);
    },
    add: ev => {
        ev.preventDefault();
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let rate = document.querySelector('#rating').value;

        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#rating').value = '';

        //tell anyone who is listening that a movie was added
        console.log(`Book FORM: just bookAdded "${title}"`);
        pubsub.publish('bookAdded', { title, author, rate });
    }
};
