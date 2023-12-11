// menu, displaying various types of breads

//declare variables
    const dessertElement = document.querySelector('#dessertsContainer');
    let dessertList = [];

    //async using fetch()
    const getDesserts = async() => {
            const response = await fetch('https://run.mocky.io/v3/2317f5ec-372c-44fc-8f02-590ee4dc59bd');

            if(response.ok){
                const data = await response.json();
                dessertList = data;
                console.log("Data: ", dessertList);
                displayDesserts(dessertList); // Display desserts when fetched
            } 
            else {
                console.log("Error fetching data", response);
            }
        };

    //async 
    const displayDesserts = (selectedDessert, dessertList) => {
        dessertElement.innerHTML = ''; // Clear existing content
        
        dessertList.forEach((dessert) => {
            const articleElement = document.querySelector('#desserts');
            articleElement.innerHTML = '';

            const postre = dessertList.find(postre => postre.dessertName === selectedDessert);

            if (postre){
                const article = document.createElement('article');

                //display dessertType
                const dessertType = document.createElement('h2');
                dessertType.textContent = postre.dessertType;
                article.appendChild(dessertType);

                //dis[play dessertName
                const nameDessert = document.createElement('p');
                nameDessert.textContent = `Dessert Name: ${postre.dessertName}`;
                article.appendChild(nameDessert);

                //display description
                const description = document.createElement('p');
                description.textContent = `Description: ${postre.description}`;
                article.appendChild(description);

                //display image
                const image = document.createElement('img');
                image.src = postre.imageUrl;
                image.alt = `${postre.dessertName} Image`;
                article.appendChild(image);

                articleElement.appendChild(article);

            }
    };

    //reset function
    function reset()
    {
        //const dessertElement = document.querySelector('#desserts');
        dessertElement.innerHTML = '';
    };

    //sortBy Function
    const sortBy = () => {
        const filter = document.getElementById("sortBy").value;
    
        let filteredDesserts = [];
    
        switch (filter) {

            case 'bread':
                displayDesserts("Bread", dessertList );
                filteredDesserts = dessertList.filter(dessert => dessert.dessertType === 'Bread');

                return "Bread";
    
            case 'cookie':
                filteredDesserts = dessertList.filter(dessert => dessert.dessertType === 'Cookie');
                break;
    
            case 'doughnuts':
                filteredDesserts = dessertList.filter(dessert => dessert.dessertType === 'Doughnut');
                break;
    
            case 'all':
                filteredDesserts = dessertList;
                break;
        }
    
        displayDesserts(filteredDesserts);
    };

    document.querySelector('#sortBy').addEventListener("change", () => {sortBy(dessertList)});

    getDesserts();