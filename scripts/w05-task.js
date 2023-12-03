/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (templeList) => 
{
    templeList.forEach((temple) => {
        const articleE = document.createElement("article");
        const h3E = document.createElement("h3");
        h3E.textContent = temple.templeName;

        const imgE = document.createElement("img");
        imgE.src = temple.imageUrl;
        imgE.alt = temple.location;
        articleE.appendChild(h3E);
        articleE.appendChild(imgE);
        templesElement.appendChild(articleE);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async() => 
{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    
    if(response.ok){
        const data = await response.json();
        templeList = data;
    } else {
        console.log("Error");
    }
};

/* reset Function */
function reset()
{
    const templesElement = document.querySelector("#temples");
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) => 
{
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case 'utah':
            const utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;

        case 'notutah':
            const notUtahTemple = temples.filter(temples => !temples.location.includes('Utah'));
            displayTemples(notUtahTemple);
            break;

        case 'older':
            const olderTemples = temples.filter(temple => {
                const yearDedicated = temple.dedicated.split (',')[0].trim();
                return parseInt(yearDedicated) < 1950;
            });
            
            displayTemples(olderTemples);
            break;
        
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => {sortBy(templeList)});

getTemples();
