function getSlug() {
    return window.location.search.split("?slug=")[1]
}

function createInfoItemRow(table, item, value) {
    table.innerHTML += `
        <tr>
            <td>${item}</td>
            <td>${value}</td>
        </tr>
    `
}

// get info from server
const book = server.getBookBySlug(getSlug())

// set book's name in title
document.title = 'Книга "' + book.name + '" :Книжная полка'

// dynamically changing information
const tableInfo = document.querySelector("table.book__table-info")
const bookName = document.querySelector("h1.book__name")
const itemInfoLoader =  document.querySelector("p.item-info__loader")
const bookCover = document.querySelector("img")

// add cover
bookCover.src = book.cover

// add name
bookName.innerHTML = book.name

// remove loader message
itemInfoLoader.remove()

// add info to table
for (let info_item in book) {
    if (!['cover', 'id', 'slug', 'name'].includes(info_item)) {
        createInfoItemRow(tableInfo, info_item, book[info_item])
    }
}
