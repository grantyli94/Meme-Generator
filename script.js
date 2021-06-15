document.addEventListener("DOMContentLoaded",function() {
    let form = document.querySelector("#form");
    let memeList = document.querySelector("#memeList");
    let submit = document.querySelector("#submit");
    let container = document.querySelector(".container");

    let generateMeme = function(event) {
            event.preventDefault();
            let image_url = document.querySelector("#image_url");
            let textOnTop = document.querySelector("#textOnTop");
            let textOnBottom = document.querySelector("#textOnBottom");
            let newMeme = document.createElement("li");
            let removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            
            let textDiv = document.createElement("div");
            textDiv.setAttribute("class","textDiv");
    
            let topText = document.createElement("div");
            topText.setAttribute("class","top");
            topText.innerText = textOnTop.value;
    
            let bottomText = document.createElement("div");
            bottomText.setAttribute("class","bottom");
            bottomText.innerText = textOnBottom.value;
            
    
            let meme = document.createElement("img");
            meme.setAttribute("src",image_url.value);
            
            newMeme.appendChild(textDiv);
            textDiv.appendChild(meme);
            textDiv.appendChild(topText);
            textDiv.appendChild(bottomText);
            newMeme.appendChild(removeButton);
            memeList.appendChild(newMeme);
            form.reset();
            
    }


    submit.addEventListener("click",generateMeme)

    memeList.addEventListener("click", function(event) {
        if (event.target.tagName.toLowerCase() === "button") {
            event.target.parentElement.remove();
        }
    })

})
