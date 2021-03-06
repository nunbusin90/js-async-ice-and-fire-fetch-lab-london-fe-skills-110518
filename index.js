function fetchBooks() {
  //write fetch request to the Game of Thrones API
  const url ="https://anapioficeandfire.com/api/books"
  fetch(url).then(function(response){response.json()})
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
