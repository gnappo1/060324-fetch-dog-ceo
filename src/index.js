console.log('%c HI', 'color: firebrick')

//! Challenge 1
//* fetch from the url
//* use the result array and then iterate over it
//* for each el of the array:
    //* create img tag
    //* give it info
    //* put onto the page

getDogs("https://dog.ceo/api/breeds/image/random/4")

function getDogs(url) {
    return fetch(url)
        .then(resp => resp.json())
        .then(returnObj => populateDogs(returnObj.message))
        .catch(errorMessage => console.log(errorMessage))
}

function populateDogs(dogArray) {
    dogArray.forEach(appendDogImageToPage)
}

function appendDogImageToPage(imageSrc) {
    //! Target the place where we will append the images
    const target = document.querySelector("#dog-image-container")
    //* create img tag
    const image = document.createElement("img")
    //* give it info
    image.src = imageSrc
    image.alt = "Picture of dog"
    //* put onto the page
    target.appendChild(image)
}

//! Challenge 2
fetchAllBreeds()
function fetchAllBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breedsData => populateBreeds(Object.keys(breedsData.message)))
    .catch(errorMessage => console.log(errorMessage))
}

function populateBreeds(breedArray) {
    breedArray.forEach(breed => appendBreed(breed))
}

function appendBreed(breedString) {
    //* target the ul (getElementById)
    const targetUl = document.getElementById("dog-breeds")
    //* create the needed element: <li>
    const li = document.createElement("li")
    //* put some text in the li
    li.textContent = breedString
    //* Attach the click
    li.addEventListener("click", () => li.classList.toggle("blue"))
    //* append the li into the ul
    targetUl.append(li)
}


// Object.keys(breedsData.message)