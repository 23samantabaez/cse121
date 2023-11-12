/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Samanta Y. Baez Gomez";
let currentYear = "2023";
let profilePicture = "cse121b/w02-task/images/ImageMe.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById(favFoods);
const yearElement = document.querySelector("#year");
let imageElement = document.images(profilePicture);


/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>${fullName}</strong>";
yearElement.textContext = "${currentYear}";
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "$Profile image of {fullName}" );


/* Step 5 - Array */
let favFoods = ["Tacos", "Pizza", "Pozole", "Tamales", "Sushi"];
food.innerHTML += "<br>${favFoods}";
let singleFood = "Cheescake";
favFoods.push(singleFood);
foodElement.innerHTML += "<br>${favFoods}";
favFoods.shift();
foodElement.innerHTML += "<br>${favFoods}";
favFoods.pop();
foodElement.innerHTML += "<br>${favFoods}";







