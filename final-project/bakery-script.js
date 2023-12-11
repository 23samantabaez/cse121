function getDesserts() {
    const url = 'https://run.mocky.io/v3/6ef72062-28a7-4ea0-8304-175cf14a0c0a';
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayDesserts(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
  
function displayDesserts(dessertList) {
    const dessertType = document.getElementById('dessertType').value;
    const filteredDesserts = dessertType === 'all' ? dessertList : dessertList.filter(dessert => dessert.dessertType.toLowerCase() === dessertType);

    const dessertsContainer = document.getElementById('dessertsContainer');
    dessertsContainer.innerHTML = ''; // Clear previous data

    // Display or format the retrieved data
    filteredDesserts.forEach(dessert => {
        const article = document.createElement('article');
    
        const dessertType = document.createElement('h2');
        dessertType.textContent = dessert.dessertType;
        article.appendChild(dessertType);
    
        const nameDessert = document.createElement('p');
        nameDessert.textContent = `Dessert Name: ${dessert.dessertName}`;
        article.appendChild(nameDessert);
    
        const description = document.createElement('p');
        description.textContent = `Description: ${dessert.description}`;
        article.appendChild(description);
    
        const image = document.createElement('img');
        image.src = dessert.imageUrl;
        image.alt = `${dessert.dessertName} Image`;
        article.appendChild(image);
    
        dessertsContainer.appendChild(article);
    });
}

function sortBy() {
    const dessertType = document.getElementById('dessertType').value;
    getDesserts();
}
  
getDesserts();

function placeOrder() {
    const orderMessage = document.getElementById('orderMessage');
    orderMessage.style.display = 'block';
}
  