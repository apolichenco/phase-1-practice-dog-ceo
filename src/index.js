console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedArray = []
let breedTypes = []
let breeBree = []

// fetch(imgUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         data.message.forEach(link => addImageToSite(link))
//     });

// function addImageToSite(link){
//     let imageContainer = document.querySelector('#dog-image-container')
//     let createdImage = document.createElement('IMG')
//     createdImage.src = link
//     imageContainer.append(createdImage);
// }

fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        breeBree = Object.keys(data.message);
        breedArray = Object.entries(data);
        breedTypes = Object.entries(breedArray[0][1])
        breedTypes.forEach(link => addBreedToImage(link))
    });

let n = 0;
let m = 100;

function addBreedToImage(link){
    let breedContainer = document.querySelector('#dog-breeds')
    let breed = document.createElement('li')
    breed.innerHTML = link[0]
    breed.className = 'different-breeds'
    n ++;
    breed.setAttribute('id', `num-${n}`)
    breedContainer.append(breed);
    breedSubcategories(link);
}

function breedSubcategories(link){
    if (link[1].length == 0) {
        void(0)
    }
    if (link[1].length > 0) {
        let t = document.querySelector(`#num-${n}`);
        let b = document.createElement('ul');
        m ++
        b.setAttribute('id', `num-${m}`)
        t.append(b)
        link[1].forEach(function(subcategory) {
            let a = document.querySelector(`#num-${m}`)
            let c = document.createElement('li')
            c.innerHTML = subcategory
            a.append(c);
        })
    }
}

setTimeout(random, 1000)
function random() {
    let breedChangeColor = document.querySelectorAll('li')
    breedChangeColor.forEach(oneBreed => oneBreed.addEventListener("click", function() {
        oneBreed.style.color = 'salmon'
    })
)
}

setTimeout(dropdownSorter, 500)
function dropdownSorter(){
    const dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', handleChange)
    function handleChange(event) {
        const letter = event.target.value
        const filteredBreeds = breeBree.filter(breed => breed.startsWith(letter))
        let breedContainer = document.querySelector('#dog-breeds')
        breedContainer.innerHTML = ''
        filteredBreeds.forEach(bree => addBreedToImagine(bree))
        // breedContainer.append(filteredBreeds)
    }
}
function addBreedToImagine(bree){
    let breedContainer = document.querySelector('#dog-breeds')
    let breed = document.createElement('li')
    breed.innerHTML = bree
    breedContainer.append(breed);
}