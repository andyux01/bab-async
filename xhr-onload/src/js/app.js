const xhr = new XMLHttpRequest();

xhr.onload = function () {
    // console.log('xhr.onload');
    // console.log(xhr.responseText);
    console.log(this.responseText); 
    // respone console log ini akan menghasilkan error karena this.responseText tidak bisa diakses
    const responseJson = JSON.parse(this.responseText);
    // responseJson.books.forEach(book => {
    //     // document.body.innerHTML += `<p>${book.title}</p>`;
    //     // hasil berupa isi title dari buku yang ada di dalam array books
    //     document.body.innerText += `<p>${book.title}</p>`;
    //     // hasil berupa tag p dengan isi title dari buku yang ada di dalam array books
    //     // console.log(book.title);
    // });
    // response ini dalam console log akan menghasilkan title dari buku yang ada di dalam array books
    
};

xhr.onerror = function () {
    console.log('ups error');
}

xhr.open('GET', 'https://books-api.dicoding.dev/list');

// xhr.open('POST', 'https://books-api.dicoding.dev/add');

// menambahkan property header
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', '12345');

const book = {
    id: 112345,
    title: 'Buku Baru',
    author: 'Dicoding Indonesia',
};

// xhr.send();
xhr.send(JSON.stringify(book));
