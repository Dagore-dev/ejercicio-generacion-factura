export default function formatPrice (price) {
  const splittedPrice = price.toString().split('.')
  
  if (!splittedPrice[1]) {
    splittedPrice[1] = '0'
  }

  splittedPrice[1] = splittedPrice[1].padStart(2, '0')

  return `${splittedPrice.join(',')} €`.padStart(7, '0')
}
