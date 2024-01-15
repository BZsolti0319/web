// Feladat 1
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color] = car;
console.log('Brand:', brand);
console.log('Model:', model);
console.log('Year:', year);
console.log('Color:', color);

//1. válasz: A változónevek a tömb elemek sorrendjétõl függetlenek, de a sorrend fontos.

// Feladat 2
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};
let { title: bookTitle, author: bookAuthor, publicationYear, language } = book;
console.log('Book Title:', bookTitle);
console.log('Book Author:', bookAuthor);
console.log('Publication Year:', publicationYear);
console.log('Language:', language);

//2. válasz: A változóneveket az objektum kulcsai határozzák meg, és a sorrend nem fontos.

// Feladat 3
function printStudentInfo({ name, age, grade, subjects }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Grade: ${grade}`);
    console.log('Subjects:', subjects.join(', '));
}
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};
printStudentInfo(student);

//3. válasz: A függvény paramétereinek deklarálásakor az objektum kulcsait használjuk fel.
