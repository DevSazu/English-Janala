const loadButton=()=>{
 const url="https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    displayButton(data.data)
    console.log(data.data)
  })
}

const displayButton=(btns)=>{
  const getBtn= document.getElementById('vocabulary_btn');
  getBtn.innerHTML="";
   btns.forEach(btn => {
    const div=document.createElement('div');
    div.innerHTML=` <button class="btn btn-outline btn-primary mr-5"> Leson-${btn.level_no}</button>`
    getBtn.appendChild(div)
    console.log(div)
   });
}
loadButton();