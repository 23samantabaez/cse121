// menu, displaying various types of breads and then user inputs for checkout

//declare variables
document.addEventListener("DOMContentLoaded", () => {

    const dessertElement = document.querySelector('#desserts');
    let dessertList = [];

    //async 
    const displayDesserts = (dessertList) => 
    {
        dessertElement.innerHTML = ''; // Clear existing content
        desserts.forEach((dessert) => {
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
    };

    //async using fetch()
    const getDesserts = async() => 
    {
        const response = await fetch('https://run.mocky.io/v3/2317f5ec-372c-44fc-8f02-590ee4dc59bd');
        
        if(response.ok){
            const data = await response.json();
            dessertList = data;
            displayDesserts(dessertList);
        } else {
            console.log("Error fetching data");
        }
    };

    /*reset function
    function reset()
    {
        const dessertElement = document.querySelector('#desserts');
        dessertElement.innerHTML = '';
    }*/

    //sortBy Function
    const sortBy = (desserts) =>
    {
        reset();
        const filter = document.getElementById("sortBy").value;
        switch (filter) {
            case 'bread':
                const breadDesserts = desserts.filter(dessert => dessert.dessertType === 'Bread'); //or instead of dessertName, dessertType
                displayDesserts(breadDesserts);
                break;

            case 'doughnut':
                const doughnutDesserts = desserts.filter(dessert => dessert.dessertType === 'Doughnut');
                displayDesserts(doughnutDesserts);
                break;

            case 'cookie':
                const cookieDesserts = desserts.filter(dessert => dessert.dessertType === 'Cookie');
                displayDesserts(cookieDesserts);
                break;
            
            case 'all':
            default:
                displayDesserts(desserts);
                break;
        }
    };

    document.querySelector('#sortBy').addEventListener("change", () => {sortBy(dessertList)});

    getDesserts();
});