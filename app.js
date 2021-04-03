const note = document.querySelector('#note');
const button = document.querySelector('#button');
const form = document.querySelector('#form');

const container = document.querySelector('#note-container')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const li = document.createElement('li');
    li.textContent = `- ${note.value}`;


    container.appendChild(li);

    note.value = "";
})

container.addEventListener('click', (e) => {
    if (e.target.nodeName == "LI") {
        e.target.classList.toggle('clicked')
        if (e.target.classList.contains('clicked')) {
            const span = document.createElement('span');
            span.textContent = "delete";
            span.classList.add("delete");
            e.target.appendChild(span)
        } else {
            e.target.childNodes[1].remove()
        }

    }

    if (e.target.nodeName == "SPAN") {
        e.target.parentNode.remove()
    }
})

