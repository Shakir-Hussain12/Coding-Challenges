let items = JSON.parse(localStorage.getItem('tableItems')) || [];

if (items.length > 0) {
    createTable();
}

function addItem() {
    items.push({
        title: 'First Item',
        amount: 100,
        date: new Date().toLocaleDateString(),
    })

    localStorage.setItem('tableItems', JSON.stringify(items));
    createTable();
}

function createTable() {
    let bod =  document.getElementById('table-body');
    let data = '';

    items.forEach((item) => {
        data += `<tr>
            <td>${item.title}</td>
            <td>$${item.amount}.00</td>
            <td>${item.date}</td>
            </tr>`;
    });

    bod.innerHTML = data;
}

function handleSort(index) {
    if (index === 1) {
        items.sort((a, b) => a.amount - b.amount);
        createTable();
    } else {
        items.sort((a, b) => new Date(a.date) - new Date(b.date));
        createTable();
    }
}