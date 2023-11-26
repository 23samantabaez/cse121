/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Name */
/* Photo with attributes */
/* Favorite Foods List*/
/* Hobbies List */
/* Places Lived DataList */

let myProfile = {
    name: "Samanta Baez",
    photo: 'images/ImageMe.jpg',
    favoriteFoods: ['Sushi', 'Tacos', 'Empanadas', 'Hamburgers', 'Apple Crumble' ],
    hobbies: ['Playing music', 'Singing', 'Dancing', 'Reading' ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:'Coahuila, Mexico',
        length: '9 years'
    },
    {
        place: 'Utah, United States',
        length: '5 years'
    },
    {
        place: 'Quebec, Canada',
        length: '4 years',
    }
);

/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name; //

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});

