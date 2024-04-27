//ESERCIZI 1 - 2 - 3 //

//Lista di immagini a tema FLOWERS

//https://api.unsplash.com/search/photos/?client_id=8Zi8wpJfqJmc2WRc5bO2-IUWTFZhXjHklRN2IereTrY&query=flowers

//FUNCTIONS

const ImageElGen=(ImgData)=>{
    const wrapperImageEl=document.createElement("div")
    const imageEl=document.createElement("img")
    
    wrapperImageEl.className="wrapper--image";
    imageEl.className="image";

    imageEl.src=ImgData.urls.small
    imageEl.alt=ImgData.alt_description

    wrapperImageEl.append(imageEl);

    return wrapperImageEl;
};

const listGen=()=>{
    const listEl=document.createElement("section")
    

    listEl.className="image--list";
    

    return listEl;
}

const titleListGen=()=>{
    const titleListEl=document.createElement("h2")
    titleListEl.className="title--list";
    titleListEl.textContent="THE FLOWERY GALLERY";

    return titleListEl;
}

const modalGen=(ImgData)=>{
    const modalSection=document.createElement("section")
    const modalButton=document.createElement("button")
    const modalImg=document.createElement("img")
    const modalDescription=document.createElement("p")
    const modalAuthor=document.createElement("p")
    const modalPlace=document.createElement("p")
    
    modalSection.className="modal--section";
    modalButton.className="modal--button";
    modalImg.className="modal-img";
    modalDescription.className="modal--description";
    modalAuthor.className="modal--author";
    modalPlace.className="modal--place";

    
    modalImg.src=ImgData.urls.full
    modalImg.alt=ImgData.alt_description

    modalButton.textContent="CHUDI X";
    modalDescription.textContent=(ImgData.description);
    modalAuthor.textContent=(ImgData.user.name);
    modalPlace.textContent=(ImgData.user.location);

    modalButton.addEventListener("click", ()=>{
        (modalSection.style.display="none");
    }
    )

    modalSection.append(modalImg,modalDescription,modalAuthor,modalPlace,modalButton)

    return modalSection;
}



//LOGIC
const BASE_URL="https://api.unsplash.com"
const API_TOKEN="8Zi8wpJfqJmc2WRc5bO2-IUWTFZhXjHklRN2IereTrY"
const SEARCH_QUERY= "flower"
const PER_PAGE=20
const ROOT_EL = document.querySelector(".root");


// EVENTS




//ASYNC 

fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}&per_page=${PER_PAGE}`)
.then((res)=>res.json())
.then((data)=>{

const totalImgs=data.results
const imageList=listGen();
const galleryTitle=titleListGen();


totalImgs.map((photo)=>{
    const imgCard=ImageElGen(photo)

    
    imgCard.addEventListener("click", () => {
        const modal = modalGen(photo); 
        ROOT_EL.append(modal); 
    });
    imageList.append(imgCard);
});

    ROOT_EL.append(galleryTitle,imageList);         
});
