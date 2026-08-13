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
   words.forEach(word=>{

    console.log(word)
     const cardDiv=document.createElement('div');
     cardDiv.className="bg-white w-[380px] p-[35px] rounded-2xl shadow-sm border border-gray-100 text-center";
     cardDiv.innerHTML=
     `<h1 class="text-3xl font-extrabold text-black mb-2">  ${word.word}  </h1>
            <p class="text-base font-semibold text-gray-800 mb-6"> Meaning /Pronunciation </p>
            <p class="text-2xl font-bold text-gray-700 mb-10">  "${word.meaning} / ${word.pronunciation}" </p> 

          <div class="flex justify-between items-center">
            <!-- Info Button -->
                <button class="w-11 h-11 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5 fill-slate-700" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                </button>

                <!-- Audio Button -->
                <button class="w-11 h-11 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                    <svg class="w-5 h-5 fill-slate-700" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                </button>

           </div>

     `
     cardId.appendChild(cardDiv)
   })
  

 }
