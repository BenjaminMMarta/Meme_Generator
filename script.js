// Variables
const topTextInput = document.querySelector("#imageTopText");
const bottomTextInput = document.querySelector("#imageBottomText");
const submitButton = document.querySelector("#submitButton");
const deleteButton = document.querySelector("#deleteMemeButton");

//Submit button "Click" event listener located under three form inputs.
submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    //Create new meme container div.
    const newMemeContainer = document.createElement('div');
    newMemeContainer.classList.add("newDiv");
    newMemeContainer.setAttribute("id", "newMemeDiv");
    newMemeContainer.style.position = "relative";

    //Create meme image.
    const newMemeImage = document.createElement('img');
    newMemeImage.classList.add("newImage");
    newMemeImage.setAttribute("id", "newMemeImage");
    const imageInput = document.querySelector("#imageLink").value;
    newMemeImage.src = imageInput;
    newMemeImage.style.boxShadow = "5px 5px 10px rgb(0, 0, 0)";
    newMemeImage.style.borderColor = "rgb(0, 0, 0)";
    newMemeImage.style.borderStyle = "solid";
    newMemeImage.style.borderRadius = "5px";
    newMemeImage.style.borderWidth = "7px";
    newMemeImage.style.marginTop = "5px";
    newMemeImage.style.marginLeft = "20px";
    newMemeImage.style.marginRight = "20px";
    newMemeImage.style.height = "400px";
    newMemeImage.style.width = "400px";

    //Create container div for meme image top text.
    const newMemeImageTopTextContainer = document.createElement('div');
    newMemeImageTopTextContainer.classList.add("newMemeTopTextDiv");
    newMemeImageTopTextContainer.setAttribute("id", "newMemeImageTopTextContainer");

    //Create meme image top text.
    newMemeImageTopTextContainer.innerText = document.querySelector("#imageTopText").value;
    newMemeImageTopTextContainer.style.fontFamily = "Montserrat, sans-serif";
    newMemeImageTopTextContainer.style.color = "white";
    newMemeImageTopTextContainer.style.fontSize = "45px";
    newMemeImageTopTextContainer.style.position = "absolute";
    newMemeImageTopTextContainer.style.top = "50px";
    newMemeImageTopTextContainer.style.display = "flex";
    newMemeImageTopTextContainer.style.justifyContent = "center";
    newMemeImageTopTextContainer.style.marginLeft = "34px";
    newMemeImageTopTextContainer.style.height = "50px";
    newMemeImageTopTextContainer.style.width = "400px";

    //Create container for meme image bottom text.
    const newMemeImageBottomTextContainer = document.createElement('div');
    newMemeImageBottomTextContainer.classList.add("newMemeBottomTextDiv");
    newMemeImageBottomTextContainer.setAttribute("id", "newMemeImageBottomTextContainer");

    //Create meme image bottom text.
    newMemeImageBottomTextContainer.innerText = document.querySelector("#imageBottomText").value;
    newMemeImageBottomTextContainer.style.fontFamily = "Montserrat, sans-serif";
    newMemeImageBottomTextContainer.style.color = "white";
    newMemeImageBottomTextContainer.style.fontSize = "45px";
    newMemeImageBottomTextContainer.style.position = "absolute";
    newMemeImageBottomTextContainer.style.bottom = "150px";
    newMemeImageBottomTextContainer.style.display = "flex";
    newMemeImageBottomTextContainer.style.justifyContent = "center";
    newMemeImageBottomTextContainer.style.marginLeft = "34px";
    newMemeImageBottomTextContainer.style.height = "50px";
    newMemeImageBottomTextContainer.style.width = "400px";

    //Create delete meme button and add styling.
    const newMemeButton = document.createElement('button');
    newMemeButton.classList.add("deleteButton");
    newMemeButton.setAttribute("id", "deleteMemeButton");
    newMemeButton.innerText = "Delete Meme";
    newMemeButton.style.fontFamily = "Josefin Sans, sans-serif";
    newMemeButton.style.backgroundColor = "rgb(218, 208, 196)";
    newMemeButton.style.boxShadow = "5px 5px 10px rgb(0, 0, 0)";
    newMemeButton.style.borderColor = "rgb(0, 0, 0)";
    newMemeButton.style.borderStyle = "solid";
    newMemeButton.style.borderRadius = "5px";
    newMemeButton.style.borderWidth = "3px";
    newMemeButton.style.marginTop = "30px";
    newMemeButton.style.marginBottom = "15px";
    newMemeButton.style.marginLeft = "170px";
    newMemeButton.style.marginRight = "50px";
    newMemeButton.style.height = "50px";
    newMemeButton.style.width = "150px";

    //Append image and delet button to div with id "displayCreatedMemeSection".
    displayCreatedMemeSection.append(newMemeContainer);

    //Append meme text, image, and delete button to meme container.
    newMemeContainer.append(newMemeImageTopTextContainer);
    newMemeContainer.append(newMemeImageBottomTextContainer);
    newMemeContainer.append(newMemeImage);
    newMemeContainer.append(newMemeButton);
    
    //Meme delete button event listener.
    newMemeButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.currentTarget.parentElement.remove();
    })
})