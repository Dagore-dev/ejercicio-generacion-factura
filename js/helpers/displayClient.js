export default function displayClient ( client ) {
  const $displayClient = document.getElementById('displayClient')
  const fragment = new DocumentFragment()

  $displayClient.innerHTML = ''

  /*dt Nombre*/
  const nameDT = document.createElement('dt')
  nameDT.innerText = 'Nombre'
  nameDT.classList.add('list-group-item')
  fragment.appendChild(nameDT)

  /*dd Nombre de la empresa*/
  const nameDD = document.createElement('dd')
  nameDD.innerText = client.name
  nameDD.classList.add('list-group-item')
  fragment.appendChild(nameDD)

  /*dt cif*/
  const cifDT = document.createElement('dt')
  cifDT.innerText = 'CIF'
  cifDT.classList.add('list-group-item')
  fragment.appendChild(cifDT)

  /*dd cif*/
  const cifDD = document.createElement('dd')
  cifDD.innerText = client.cif
  cifDD.classList.add('list-group-item')
  fragment.appendChild(cifDD)

  /*dt dirección*/
  const dirDT = document.createElement('dt')
  dirDT.innerText = 'Dirección'
  dirDT.classList.add('list-group-item')
  fragment.appendChild(dirDT)

  /*dd dirección*/
  const dirDD = document.createElement('dd')
  dirDD.innerText = `${client.street}, ${client.city}, ${client.postcode}`
  dirDD.classList.add('list-group-item')
  fragment.appendChild(dirDD)

  $displayClient.appendChild(fragment)
}