import displayClient from "./js/helpers/displayClient.js"
import displayCompany from "./js/helpers/displayCompany.js"
import displayProducts from "./js/helpers/displayProducts.js"
import companyInfo from "./js/placeholders/companyInfo.js"
import Client from "./js/models/Client.js"
import productAndQuantity from "./js/helpers/productAndQuantity.js"
import Invoice from "./js/models/Invoice.js"

//Formulario de nuevo cliente
const $CLIENTFORM = document.getElementById('clientForm')
const $NAME = document.getElementById('clientName')
const $CIF = document.getElementById('clientCIF')
const $STREET = document.getElementById('clientStreet')
const $CITY = document.getElementById('clientCity')
const $POSTCODE = document.getElementById('clientPostcode')
let currentClient;

//Formulario de compra
const $PRODUCTSFORM = document.getElementById('productsForm')

displayCompany()
displayProducts()

function handleNewClient ( e ) {
  e.preventDefault()
  
  const name = $NAME.value
  const cif = $CIF.value
  const street = $STREET.value
  const city = $CITY.value
  const postcode = $POSTCODE.value
  
  currentClient = new Client(name, cif, street, city, postcode)
  $CLIENTFORM.reset()
  
  displayClient(currentClient)
}

function handleNewInvoice ( e ) {
  e.preventDefault()
  const $PRODUCTSLIST = document.querySelectorAll('tr[data-product]')

  if (currentClient) {
    const products = [...$PRODUCTSLIST].map(record => productAndQuantity(record))
    const invoice = new Invoice(companyInfo, currentClient, products)
  }
}

$CLIENTFORM.addEventListener('submit', handleNewClient)
$PRODUCTSFORM.addEventListener('submit', handleNewInvoice)
