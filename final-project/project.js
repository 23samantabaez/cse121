// menu, displaying various types of breads and then user inputs for checkout

//declare variables
const dessertElement = document.querySelector('#desserts');
let dessertList = [];

//async 
const displayDesserts = (dessertList) => 
{
    dessertList.forEach((dessert) => {
        const articleElement = document.createElement("article");
        const h3E = document.createElement("h3");
        h3E.textContent = dessert.dessertName;

        const imgElement = document.createElement("img");
        imgElement.src = dessert.imageUrl;
        imgElement.alt = dessert.description;
        articleElement.appendChild(h3E);
        articleElement.appendChild(imgElement);
        dessertElement.appendChild(articleElement);
    });
}

//async using fetch()
const getDesserts = async() => 
{
    const response = await fetch('');
    
    if(response.ok){
        const data = await response.json();
        templeList = data;
    } else {
        console.log("Error");
    }
};