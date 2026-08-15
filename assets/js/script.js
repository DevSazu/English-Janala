const loadButton=()=>{
 const url="https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
  .then(res=>res.json())
  .then(data=>{
    displayButton(data.data)
    
  })
}

const displayButton=(btns)=>{
  const getBtn= document.getElementById('vocabulary_btn');
  getBtn.innerHTML="";
   btns.forEach(btn => {
    const div=document.createElement('div');
    div.innerHTML=` 
    <button class="btn btn-outline btn-primary mr-5" onclick="loadCard(${btn.level_no})">  <i class="fa-solid fa-book-open-reader"></i> Leson-${btn.level_no}</button>`
    getBtn.appendChild(div)
    
   });
}
loadButton();


// card part  
 const loadCard=(id)=>{
  
  const levelUrl=`https://openapi.programming-hero.com/api/level/${id}`;
 
  fetch(levelUrl)
  .then(res=>res.json())
   .then(data=>{
    displaylevel(data.data)
   })
 }

 const displaylevel=(words)=>{
   const cardId=document.getElementById('card_id');
   cardId.innerHTML="";
   
   if(words.length===0){
     cardId.innerHTML=`  <div class="text-white justify-center items-center col-span-full">
                <p class="english_font text-4xl text-white justify-center items-center"> Lesson is not ready</p>
                 
            </div>`
            return;
   }
   words.forEach(word=>{

    
     const cardDiv=document.createElement('div');
     cardDiv.className="bg-white w-[380px] p-[35px] rounded-2xl shadow-sm border border-gray-50 text-center";
     cardDiv.innerHTML=
     `<h1 class="text-3xl font-extrabold text-black mb-2">  ${word.word?word.word :'ওয়ার্ড পাওয়া যায়নি'}  </h1> 
            <p class="text-base font-semibold text-gray-800 mb-6"> Meaning /Pronunciation </p>
            <p class="text-2xl font-bold text-gray-700 mb-10">  "${word.meaning?word.meaning:"অর্থ পাওয়া যায়নি"} / ${word.pronunciation? word.pronunciation :"উচ্চারন পাওয়া যায় নাই" }" </p> 

          <div class="flex justify-between items-center">
            <!-- Info Button -->
                <button class="w-11 h-11 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <!-- Audio Button -->
                <button class="w-11 h-11 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                    <i class="fa-solid fa-volume"></i>
                </button>

           </div>

     `
     cardId.appendChild(cardDiv)
   })
  

 }
