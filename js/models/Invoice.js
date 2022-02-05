export default class Invoice {

  constructor (company, client, products) {
    this.company = company
    this.client = client
    this.products = products
  }

  calcTotal () {
    return this.products
      .map( ( [product, quantity] ) => product.price * quantity )
      .reduce( (prev, acc) => prev + acc )
  }

  applyVAT () {
    return this.totalBeforeVAT * 1.21
  }

  get totalBeforeVAT () {
    return this.calcTotal()
  }

  get totalAfterVAT () {
    return this.applyVAT()
  }

}