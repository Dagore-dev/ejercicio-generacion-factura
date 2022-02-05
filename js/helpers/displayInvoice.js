import formatPrice from "./formatPrice.js"

export default function displayInvoice ( invoice ) {
  const $INVOICEBODY = document.querySelector('#invoice tbody')
  const $INVOICEFOOT = document.querySelector('#invoice tfoot')
  const fragment = new DocumentFragment()

  //Listado de productos comprados
  invoice.products
    .filter( ( [product, quantity] ) => quantity !== 0 )
    .map( product => createRecord(product, fragment) )

  $INVOICEBODY.appendChild(fragment)

  //Total de la factura
  const { totalBeforeVAT, totalAfterVAT } = invoice
  createInvoiceFooter(totalBeforeVAT, totalAfterVAT, $INVOICEFOOT)
}

function createRecord ( [ { id, name, price }, quantity ], fragment ) {
  //Creacción de elementos
  const $RECORD = document.createElement('tr')
  const $NAME = document.createElement('td')
  const $PRICE = document.createElement('td')
  const $QUANTITY = document.createElement('td')

  //Valores de los elementos
  $RECORD.dataset.product = `${id}`
  $NAME.innerText = name
  $PRICE.innerText = formatPrice(price)
  $QUANTITY.innerText = quantity

  //Combinación de los elementos en el $RECORD y el fragment
  $RECORD.appendChild($NAME)
  $RECORD.appendChild($PRICE)
  $RECORD.appendChild($QUANTITY)

  fragment.appendChild($RECORD)
}

function createInvoiceFooter ( totalBeforeVAT, totalAfterVAT, fragment ) {
  //Creación de elementos
  const $RECORD = document.createElement('tr')
  const $TOTAL = document.createElement('th')
  const $VALUEBEFOREVAT = document.createElement('td')
  const $TOTALVAT = document.createElement('th')
  const $VALUEAFTERVAT = document.createElement('td')

  //Valores de los elementos
  $TOTAL.innerText = 'Total'
  $VALUEBEFOREVAT.innerText = formatPrice(totalBeforeVAT)
  $TOTALVAT.innerText = 'Añadidos los impuestos'
  $VALUEAFTERVAT.innerText = formatPrice(totalAfterVAT)

  //Combinación con el $RECORD y fragment
  $RECORD.appendChild($TOTAL)
  $RECORD.appendChild($VALUEBEFOREVAT)
  $RECORD.appendChild($TOTALVAT)
  $RECORD.appendChild($VALUEAFTERVAT)

  fragment.appendChild($RECORD)
}
