import products from '../placeholders/products.js'
import formatPrice from './formatPrice.js'

export default function displayProducts () {
  const $CATALOGUE = document.querySelector('#catalogue tbody')
  const fragment = new DocumentFragment()
  
  products.map(product => createRecord(product, fragment))

  $CATALOGUE.appendChild(fragment)
}

function createRecord ( { id, name, price }, fragment ) {
  //Creacción de elementos
  const $RECORD = document.createElement('tr')
  const $NAME = document.createElement('td')
  const $PRICE = document.createElement('td')
  const $QUANTITY = document.createElement('td')
  const $INPUT = document.createElement('input')

  //Atributos del input
  $INPUT.setAttribute('type', 'number')
  $INPUT.setAttribute('value', '0')
  $INPUT.setAttribute('min', '0')

  //Valores de los elementos
  $RECORD.dataset.product = `${id}`
  $NAME.innerText = name
  $PRICE.innerText = formatPrice(price)
  $QUANTITY.appendChild($INPUT)

  //Combinación de los elementos en el $RECORD y el fragment
  $RECORD.appendChild($NAME)
  $RECORD.appendChild($PRICE)
  $RECORD.appendChild($QUANTITY)

  fragment.appendChild($RECORD)
}
