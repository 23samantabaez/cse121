/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Samanta Baez Gomez";
let currentYear = 2023;
let profilePicture = 'images/ImageMe.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
//yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
const favFoods = ["Tacos", " Pizza", " Sushi", " Tamales", " Pozole"];
foodElement.innerHTML = favFoods;
//food.innerHTML += `<br>${favFoods}`;
const singleFood = ' Cheescake';
favFoods.push(singleFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;







