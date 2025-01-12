const xhr = new XMLHttpRequest();

xhr.onload = function () {
    // console.log('xhr.onload');
    // console.log(xhr.responseText);
    // console.log(this.responseText); output sama dengan xhr.responseText yaitu error
    // respone console log ini akan menghasilkan error karena this.responseText tidak bisa diakses
    const responseJson = JSON.parse(this.responseText);
    responseJson.books.forEach(book => {
        console.log(book.title);
    });
    // response ini dalam console log akan menghasilkan title dari buku yang ada di dalam array books
    
};

xhr.onerror = function () {
    console.log('ups error');
}

xhr.open('GET', 'https://books-api.dicoding.dev/list');
xhr.send();
