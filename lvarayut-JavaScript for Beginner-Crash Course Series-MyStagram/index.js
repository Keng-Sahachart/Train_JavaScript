
refreshPhoto = (keyword,index) => {
    const imgElem = document.createElement("img");
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imgElem);
}

removeAllPhoto = () => {
    const galleryElem = document.querySelector(".gallery");
    galleryElem.innerHTML = '';
}

searchPhoto = (event) =>{
    console.log(event);

    const key = event.key;
    if(key === "Enter" && key){
        const textSearch = event.target.value;
        removeAllPhoto();
        console.log("Enter Down");

        for(let i=1 ; i < 9 ; i++){
            refreshPhoto(textSearch,i);
        }
    }

}

function run(){
    const inputElem = document.querySelector("input");

    inputElem.addEventListener("keydown",searchPhoto)
}

run();