let addfrm = document.addfrm;  //addfrm is name of bottom section form
let text = addfrm.add;         // fatching the input value which input type name is text
let ul = document.querySelector('.todos') //targeted Ul list


//defining the addItem Function
let addItem = (item) => {
    let str =   `<li>
                    <span> ${item} </span><i class="fa-solid fa-trash delete"></i>
                </li>`;

    ul.innerHTML += str;
};


// adding the submit Event listener
addfrm.addEventListener("submit", (e)=>{
    e.preventDefault(); // to control defaul action of submition of submit event
    
    let item = text.value; 

    if(item.length > 0){
        addItem(item);
        text.value = ""; //Cleaning the text.value area
    }
    
})

ul.addEventListener("click", (e)=>{
    //console.log(e.target) // targeted & printed the clicking area
    //console.log(e.target.nodeName)  // targeted  & printing the onclicking element name
    
    //Check whether Clicked item is I tag
    if(e.target.nodeName === "I"){

        // If Yes then Romoving the parent of I tag that is entire <li>
        e.target.parentElement.remove();
    }
});


// Fatching the Search Box
let searchBox = document.querySelector(".search input");

//Add the eventListener on the Search box
searchBox.addEventListener("keyup", (e) => {

    //if event is listening then call the function
    searchItem(searchBox.value.toLowerCase())
})

//Defining the function
let searchItem = (text) => {
    //console.log("text : ", text); // checking the event

    let listItems = ul.children;

    for(let li of listItems){
        //console.log(li.innerText) // For checking the excution

        if(li.innerText.toLowerCase().indexOf(text)=== -1){
            li.classList.add("filtered");
        }else{
            li.classList.remove("filtered");
        }
    }
}


