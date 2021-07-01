function addBooksToUl(ul, books) {
    for (let book of books) {
        ul.innerHTML += `
            <li>
                <a href="book.html?slug=${book.slug}">Книга ${book.name}</a>
            </li>
        `
    }
}

function addBooksToForm(form, books) {
    form.innerHTML += `<p>Какая книга понравилась больше всего?</p>`
    for (let book of books) {
        form.innerHTML += `<input name="likeBook" type="radio" value="${book.id}" />${book.name}<br />`
    }
    form.innerHTML += `<p>Какие книги вы бы заказали?</p>`
    for (let book of books) {
        form.innerHTML += `<input name="buyBook" type="checkbox" value="${book.id}" />${book.name}<br />`
    }
    form.innerHTML += `<br /><input name="submit" type="submit" value="Подтвердить" />`
}

// get info from server
const books = server.getBooks()

// dynamically changing information
const booksList = document.querySelector("div.books ul")
const booksForm = document.querySelector("div.voteform form")

addBooksToUl(booksList, books)
addBooksToForm(booksForm, books)

// work with form
booksForm.onsubmit = function(event) {
    let likeBook = booksForm.elements['likeBook'].value
    let buyBook = ""
    let checkboxes = booksForm.querySelectorAll("input[name='buyBook']:checked")
    for (let checkbox of checkboxes) {
        buyBook += books.find(item => item.id == checkbox.value).name + " "
    }
    alert(
`
Форма отправлена! Полученные данные: 
Вам понравилась книга: ${books.find(item => item.id == likeBook).name}
И вам бы хотелось приобрести: ${buyBook}
`)
    event.preventDefault();
}

