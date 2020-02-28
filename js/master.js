/*** Dont touch */
let questionNumber = 0;
let string;
let literal;
/*** Dont touch */


// question 1

string = "Hello";

const name = "Bob";
string = "Hello "+name;
literal = `Hello ${name}`;

answer(string, literal);


// question 2

string = "Multiline\n"
    + "string";
literal = `Multiline
string`;

answer(string, literal);


// question 3

string = "123 Fake street\n"
    + "Hackney\n"
    + "London\n"
    + "United Kingdom\n";
    + "SN1 7UP";
literal = `123 Fake street
Hackney
London
United Kingdom
SN1 7UP`;

answer(string, literal);
 

// question 4

// HTML

const title = "Noroff";
string = "<h1>" + title + "</h1>";
literal = `<h1>${title}</h1>`;

answer(string, literal);


// question 5

const paragraph = "In auctor lobortis lacus. Phasellus gravida semper nisi. Fusce egestas elit eget lorem.";
string = "<p>" + paragraph + "</p>";
literal = `<p>${paragraph}</p>`;

answer(string, literal);


// question 6

const numberOfLikes = 10;
string = "<div>Number of likes: " + numberOfLikes + "</div>";

literal = `<div>Number of likes: ${numberOfLikes}</div`;

answer(string, literal);


// question 7

const car = {
    model: "Fiat",
    price: "500000",
};
string = "<p>" + car.model + " for sale</p>";
literal = `<p>${car.model} for sale</p>`;

answer(string, literal);


// question 8

string = "<p>" + car.model + " for sale for " + car.price + "</p>";
literal = `<p>${car.model} for sale for ${car.price}</p>`;

answer(string, literal);


// question 9

const user = {
    firstName: "Bob",
    lastName: "Svensson"
};
string = "<p>Welcome back " + user.firstName + " " + user.lastName + "</p>";
literal = `<p>Welcome back ${user.firstName} ${user.LastName}`;

answer(string, literal);


// question 10

const article = {
    title: "Latest news",
    intro: "Quisque malesuada placerat nisl. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur ullamcorper ultricies nisi. Quisque malesuada placerat nisl.",
    author: "Bob Stevenson",
}
string = "<h1>" + article.title + "</h1>\n"
    + "<div>Writtem by " + article.author + "</div>\n"
    + "<p>" + article.intro + "</p>"
literal = `<h1>${article.title}</h1>
<div>Written by ${article.author}</div>
<p>${article.intro}</p>`;

answer(string, literal);


// question 11

const width = 10;
const height = 30;
string = "<div>Dimensions: " + (width * height) + " meters squared</div>";
literal = `<div>Dimensions: ${width * height} meters squared</div>`

answer(string, literal);

const adults = 10;
const children = 30;
string = "<div>Total people: " + (adults + children) + "</div>";
literal = `<div>Total people: ${adults + children}</div>`;

answer(string, literal);


// question 12

const money = 3000;
const spent = 1000;
string = "<div>Remaining money: " + (money - spent) + "</div>";
literal = `<div>Remaining money: ${money - spent}</div>`;

answer(string, literal);


// question 13

function getName() {
    return "Bob";
}

string = "<div>Name: " + getName() + "</div>";
literal = `<div>Name: ${getName()}</div>`

answer(string, literal);


// question 14

function getDate() {
    return "12/03/2021";
}

string = "<div>Date: " + getDate() + "</div>";
literal = `<div>Date: ${getDate()}</div>`;

answer(string, literal);


// question 15

function numberOfAdults() {
    return 10;
}
function numberOfChildren() {
    return 30;
}

string = "<div>Total people: " + (numberOfAdults() + numberOfChildren()) + "</div>";
literal = `<div>Total people: ${numberOfAdults() + numberOfChildren()}</div>`;

answer(string, literal);


// question 16

function getWidth() {
    return 10;
}
function getHeight() {
    return 30;
}

string = "<div>Size: " + (getWidth() + getHeight()) + " meters squared</div>";
literal = `<div>Size: ${getWidth() + getHeight()} meters squared</div>`;

answer(string, literal);


// question 17

function getPanelContent(title) {
    return `<h2>${title}</h2>
    <p>This is a paragraph</p>`;
}

string = "<div>" + getPanelContent("Welcome") + "</div>";
literal = `<div>${getPanelContent("Welcome")}</div>`;

answer(string, literal);




/***** DONT TOUCH THIS *****/

function answer(string, literal) {
    console.log("----- question " + questionNumber++ + " -----");
    console.log("string:\n\"" + string + "\"");
    console.log("literal:\n`" + literal + "`");
}