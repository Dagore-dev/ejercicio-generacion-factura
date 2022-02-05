import companyInfo from '../placeholders/companyInfo.js'

export default function displayCompany () {
  const $displayCompany = document.getElementById('displayCompany')
  const fragment = new DocumentFragment()

  /*dt Nombre*/
  const nameDT = document.createElement('dt')
  nameDT.innerText = 'Nombre'
  nameDT.classList.add('list-group-item')
  fragment.appendChild(nameDT)

  /*dd Nombre de la empresa*/
  const nameDD = document.createElement('dd')
  nameDD.innerText = companyInfo.name
  nameDD.classList.add('list-group-item')
  fragment.appendChild(nameDD)

  /*dt cif*/
  const cifDT = document.createElement('dt')
  cifDT.innerText = 'CIF'
  cifDT.classList.add('list-group-item')
  fragment.appendChild(cifDT)

  /*dd cif*/
  const cifDD = document.createElement('dd')
  cifDD.innerText = companyInfo.cif
  cifDD.classList.add('list-group-item')
  fragment.appendChild(cifDD)

  /*dt*/
  const dirDT = document.createElement('dt')
  dirDT.innerText = 'Dirección'
  dirDT.classList.add('list-group-item')
  fragment.appendChild(dirDT)

  /*dd dirección*/
  const dirDD = document.createElement('dd')
  dirDD.innerText = `${companyInfo.street}, ${companyInfo.postcode}, ${companyInfo.city}`
  dirDD.classList.add('list-group-item')
  fragment.appendChild(dirDD)

  $displayCompany.appendChild(fragment)
}