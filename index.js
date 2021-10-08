let flashcards=document.getElementsByClassName("flashcards")[0];
let createBox= document.getElementsByClassName("card-body")[0];
console.log(createBox);
let question=document.getElementById("question");
let answer=document.getElementById("answer");
let contentArray=localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')):[];
createBox.style.display="none";
contentArray.forEach(divMaker);

function divMaker(text){


return(
    `<div class="card mb-3"  style="width:30rem;background-color:pink">
  <div class="card-body">
    <h5 class="card-title">Q. ${text.my_question}</h5>
    <p class="card-text">Ans. ${text.my_answer}</p>
   
  </div>
</div>`
)



}

function addFlashCard(){
    var flashcard_info ={              
        'my_question':question.value,
        'my_answer':answer.value
    }

    contentArray.push(flashcard_info);
    localStorage.setItem('items',JSON.stringify(contentArray));

    flashcards.insertAdjacentHTML('beforeend',divMaker(contentArray[contentArray.length - 1]));
    question.value='';
    answer.value='';
}
function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML='';
    contentArray=[];
    
}

function showCreateCardBox(){
    createBox.style.display="block";
}

function hideCreateBox(){
    createBox.style.display="none";
}