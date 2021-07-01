function addOrder(){
    let name = document.forms['orderform']['name'].value
    let price = document.forms['orderform']['price'].value

    if (name == "" | price == ""){
        alert('Имя и цена должны быть заполнены');
        return;
    }

    let newrow =
        '<tr>' +
        '<td>'+ name +'</td>' +
        '<td>' + price + '</td>' +
        '</tr>'
    document.getElementById('ordertable').innerHTML += newrow
}

function orderCost(){
    let table = document.getElementById('ordertable');
    let rows = table.getElementsByTagName('tr').length - 1;
    let sum = 0

    for (let i = 0; i<rows; i++){
        let row = table.getElementsByTagName('tr')[1 + i];
        let cell = row.getElementsByTagName('td')[1];
        sum += Number(cell.innerHTML)
    }

    document.getElementById('cost').innerHTML = 'Cтоимость товара: ' + sum;
}

function includeOrder(row){
    let name = row.getElementsByTagName('td')[0].innerHTML
    let price = row.getElementsByTagName('td')[1].innerHTML

    let newrow =
        '<tr>' +
        '<td>'+ name +'</td>' +
        '<td>' + price + '</td>' +
        '</tr>'
    document.getElementById('purchasingtable').innerHTML += newrow
}