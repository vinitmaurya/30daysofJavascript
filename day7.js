const book = {
    title: 'Stars of Mine',
    author: 'Roan Wiseldy',
    year: 1817,
    getTitle: function() {
        return this.title +" "+ this.author;
    },
    updateBookYear: function(num){
        this.year = num;
        return this.year;
    }
}
function p(val){
    console.log(val);
}

p(book);
p(book.title);
p(book.author);


p(book.getTitle());
p(book.updateBookYear(2034));

const library = {
    name: "Rasbemetin",
    books: [
        {
            title: 'Red of Roses',
            author: 'Ryan Rand',
            year: 1232
        },
        {
            title: 'Leden in the Garden',
            author: 'Zelensky Wafern',
            year: 1542
        },
        {
            title: 'The End: Rekoning ',
            author: 'Uolong Rend',
            year: 1952
        },
        {
            title: 'Lesteres rend mdes',
            author: 'Ignis Sicand',
            year: 2354
        },
        {
            title: 'Blon de Caro Le Roko',
            author: 'Cas Nalas',
            year: 1895
        },
    ]
}
p(library);

p("Library : ")
p(library.name);
p("Books : ")
for(let book of library.books){
    p(book.title);
}

for(let prop in book){
    p(book[prop]);
}

p(Object.keys(book));
p(Object.values(book));