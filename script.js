const container = document.querySelector('.container');
const button = document.querySelector('.btn');



function makeGrids(n){
 for(let i = 0;i<n;i++){
  for(let j = 0;j<n;j++){
  const div = document.createElement('div')
  div.classList.add('cell')
  container.appendChild(div)
 }
}
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
 cell.addEventListener("mouseover",()=>{
  cell.style.backgroundColor = 'green'
 })
})


}


 makeGrids(16);


function reloadGrids(){
 container.innerHTML = ''
}


button.addEventListener('click', ()  =>{
 const size = parseInt(prompt('enter number of grid that you want',100))
 reloadGrids();
 makeGrids(size);
 
})


