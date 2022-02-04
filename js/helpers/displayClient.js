export default function displayClient ( client ) {
  const $displayClient = document.getElementById('displayClient')
  const fragment = new DocumentFragment()

  $displayClient.innerHTML = ''

  /*dt Nombre*/
  const nameDT = document.createElement('dt')
  nameDT.innerText = 'Nombre'
  fragment.appendChild(nameDT)

  /*dd Nombre de la empresa*/
  const nameDD = document.createElement('dd')
  nameDD.innerText = client.name
  fragment.appendChild(nameDD)

  /*dt cif*/
  const cifDT = document.createElement('dt')
  cifDT.innerText = 'CIF'
  fragment.appendChild(cifDT)

  /*dd cif*/
  const cifDD = document.createElement('dd')
  cifDD.innerText = client.cif
  fragment.appendChild(cifDD)

  /*dt dirección*/
  const dirDT = document.createElement('dt')
  dirDT.innerText = 'Dirección'
  fragment.appendChild(dirDT)

  /*dd dirección*/
  const dirDD = document.createElement('dd')
  dirDD.innerText = `${client.street}, ${client.city}, ${client.postcode}`
  fragment.appendChild(dirDD)

  $displayClient.appendChild(fragment)
}