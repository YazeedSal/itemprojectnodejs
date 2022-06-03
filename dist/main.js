const itemsContainer = document.getElementsByClassName('itemsContainer')[0]
const getItemsBtn = document.getElementById('getItemsBtn')
const nameInput = document.getElementById("nameInput")
const productInput = document.getElementById("productInput")
const brandInput = document.getElementById("brandInput")
const priceInput = document.getElementById("priceInput")
const quantityInput = document.getElementById("quantityInput")
const addItemBtn = document.getElementById('addItemBtn')


const getInputValues = function () {
    const name = nameInput.value
    const product = productInput.value
    const brand = brandInput.value
    const price = priceInput.value
    const quantity = quantityInput.value
    return { name, product, brand, price, quantity }
}

const addItemsToDB = async function () {
    const item = getInputValues()
    const dbRes = await axios.post('/item/additem', item)
    getItemsFromDB()
}

addItemBtn.addEventListener('click', addItemsToDB)




const renderItems = function (items) {
    itemsContainer.innerHTML = ""
    items.forEach((item) => {
        const { name, product, brand, price, quantity, _id } = item

        const itemContainer = `
        <div class="item" id = "${_id}">
         <h2>name:${name} </h2>
        <h3>product: ${product}</h3>
        <h3>brand:${brand} </h3>
        <h3>price:${price} </h3>
        <h3>quantity: ${quantity}</h3>
        </div>`
        itemsContainer.innerHTML += itemContainer
    });
}

const getItemsFromDB = async function () {
    const items = await $.get('/item/getitems')
    renderItems(items)
}

getItemsBtn.addEventListener('click', getItemsFromDB)
getItemsFromDB()