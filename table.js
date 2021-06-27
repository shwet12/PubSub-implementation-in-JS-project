import { pubsub } from './pubsub.js';

export const bookList = {
    render: container => {
        //build form
        let template = document.getElementById('bookListTemplate');
        let table = template.content.cloneNode(true);

        // // adding listners
        // form.addEventListener('submit', movieForm.add);
        container.appendChild(table);


    },
    initSubscriptions: () => {
        //tell the pubsub controller that we want to know about any actorAdded event
        console.log('Table: want to know if a book is added');
        pubsub.subscribe('bookAdded', bookList.bookAdded);
    },
    bookAdded: (book) => {
        const { title, author, rate } = { ...book };
        const row = document.createElement('tr');
        row.addEventListener('click', bookList.remove);
        row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${rate}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
        let tableBody = document.querySelector('#book-list');
        tableBody.appendChild(row);
    },

    remove: (ev) => {
        console.log(ev.target);
        ev.target.parentElement.parentElement.remove();
        pubsub.publish('bookRemoved');
    }
};
