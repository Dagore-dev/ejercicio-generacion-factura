import Product from "../models/Product.js"

export default function productAndQuantity ( record ) {
  const id = parseInt(record.dataset.product)
  const info = record.children
  const name = info[0].innerText
  const price = getPrice(info[1])
  const quantity = getQuantity(info[2])
  
  return [new Product(id, name, price), quantity]
}

function getPrice ( priceFromTable ) {
  const priceString = priceFromTable.innerText.split(' ')[0].replace(',','.')

  return parseFloat(priceString)
}

function getQuantity ( info ) {
  let quantity;

  if (info.firstElementChild.value) {
    quantity = parseInt(info.firstElementChild.value)
  }
  else {
    quantity = 0
  }

  return quantity
}