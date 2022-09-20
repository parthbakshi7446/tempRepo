document.getElementsByClassName("button-click")[0].addEventListener('click', ()=> {
    const collection = document.getElementsByClassName("small-box");
    for (let i = 0; i < collection.length; i++) {
        if(collection[i].style.backgroundColor=="blue") {
            collection[i].style.backgroundColor = "green";
        } else{
            collection[i].style.backgroundColor = "blue";
        }
    
    } 
}); 
console.log(document.getElementsByClassName("small-box")); 