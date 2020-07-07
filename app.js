const h1 = document.getElementById('main-title')

h1.textContent = 'Some New Title'
h1.style.color = 'white'
h1.style.backgroundColor = 'black'

const li = document.querySelector('li:last-of-type')
li.textContent = li.textContent + ' (Changed!)'



const listItemElements = document.querySelectorAll('li')

for(const listItemEl of listItemElements) {
  console.dir(listItemEl)
}


// playing with querySelector
const ul = document.querySelector('ul')

console.log('--------------------------------------------------')
console.log('--------------------------------------------------')
console.log('--- Start of Queary Selector Practice Children ---')
console.log('--------------------------------------------------')
console.log('--------------------------------------------------')

console.warn('Main Element')
console.log(ul) // Returns the first ul
console.warn('Child Elements')
console.log(ul.children)  // Returns all children elements
console.warn('Second Child Element')
console.log(ul.children[1]) // Returns second child element
console.warn('All Child nodes of element')
console.log(ul.childNodes) // Returns all nodes that are children of element
console.warn('First Child Node')
console.log(ul.firstChild) // Returns first child node
console.warn('First Child Element')
console.log(ul.firstElementChild) // Returns first child element

console.warn('Last Child Node')
console.log(ul.lastChild) // Returns last child node
console.warn('Last Child Element')
console.log(ul.lastElementChild) // Returns last child Element

console.log('------------------------------------------------')
console.log('------------------------------------------------')
console.log('--- End of Queary Selector Practice Children ---')
console.log('------------------------------------------------')
console.log('------------------------------------------------')

console.log('--------------------------------------------------')
console.log('--------------------------------------------------')
console.log('--- Start of Queary Selector Practice Parent ---')
console.log('--------------------------------------------------')
console.log('--------------------------------------------------')


console.log('--------------------------------------------------')
console.log('--------------------------------------------------')
console.log('--- End of Queary Selector Practice Parent ---')
console.log('--------------------------------------------------')
console.log('--------------------------------------------------')


const section = document.querySelector('section')
const button = document.querySelector('button')

// section.style.backgroundColor = 'blue'

section.className = 'red-bg'

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible'
  // } else {
  //   section.className = 'red-bg visible'
  // }

  // section.classList.toggle('visible')
  section.classList.toggle('invisible')
})
