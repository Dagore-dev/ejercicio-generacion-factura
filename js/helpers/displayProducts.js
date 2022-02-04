import products from '../placeholders/products.js'

export default function displayProducts () {
  const $CATALOGUE = document.querySelector('#catalogue tbody')
  const fragment = new DocumentFragment()
  
  products.map(product => createRecord(product, fragment))

  $CATALOGUE.appendChild(fragment)
}

function createRecord ( { id, name, price }, parentElement ) {
  const $RECORD = document.createElement('tr')
  const $NAME = document.createElement('td')
  const $PRICE = document.createElement('td')
  const $QUANTITY = document.createElement('td')
  $RECORD.dataset.product = `product${id}`
  $NAME.innerText = name
  $PRICE.innerText = formatPrice(price)
  $QUANTITY.innerText = 0

  $RECORD.appendChild($NAME)
  $RECORD.appendChild($PRICE)
  $RECORD.appendChild($QUANTITY)

  parentElement.appendChild($RECORD)
}

function formatPrice (price) {
  const splittedPrice = price.toString().split('.')
  
  if (!splittedPrice[1]) {
    splittedPrice[1] = '0'
  }

  splittedPrice[1] = splittedPrice[1].padStart(2, '0')

  return `${splittedPrice.join(',')} €`.padStart(7, '0')
}