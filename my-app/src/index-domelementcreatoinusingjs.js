//create dom element using plain js .

function createElement(){
  const Heading = document.createElement('h1')
  Heading.innerHTML = 'Hello'
  const rootelement=document.getElementById('root')
  rootelement.appendChild(Heading)
}
createElement()