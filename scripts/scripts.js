let listOfDrinks = document.querySelector('#drinks-list')
const sortButton = document.getElementById('sort-button')

function sortingArray(list) {
    let listArr = [...listOfDrinks.children]
        .map((element) => {return element.textContent})
        .sort()
        .filter((element, index, array) => {return element !== array[index-1]})
    list.innerHTML = listArr.map(element => `<li>${element}</li>`).join('')
}

sortButton.onclick = function() {
    sortingArray(listOfDrinks)
}