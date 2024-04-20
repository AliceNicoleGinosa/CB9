///ESERCIZIO UNO///

const array=[3,54,6,45,8];

const averageArr =()=>{
    let sumArr=0;
    for(let number of array){
        sumArr+=number;
    } return sumArr/array.length;
};

console.log(averageArr());


/*const array=[3,54,6,45,8];

const averageArr =()=>{
    let sumArr=0;
    for(let number of array){
        sumArr= sumArr + number;
    } return sumArr/array.length;
};

console.log(averageArr());*/


///ESERCIZIO DUE ///

const imgCollectionEl=document.querySelector("#root");

const imgGenerator=(imgUrl,title)=>{
    const imgItemEl=document.createElement("img");
    imgItemEl.className= "img-item";
    imgItemEl.alt=title;
    imgItemEl.src=imgUrl;
    return imgItemEl;
}


const imgLandscape=imgGenerator("https://picsum.photos/id/76/500/500","landscape");
const imgObject=imgGenerator("https://picsum.photos/500/500","object");
const imgGirl=imgGenerator("https://picsum.photos/id/64/500/500");

imgCollectionEl.append(imgLandscape,imgObject,imgGirl);


//ESERCIZIO TRE//

const titleEl=document.querySelector(".main-title");

const changeEl=(color, backgroundColor,htmlEl)=>{
    htmlEl.style.color=color;
    htmlEl.style.backgroundColor=backgroundColor;
}; 

titleEl.addEventListener("click",()=>{
    changeEl("salmon","lightgrey",titleEl);
});


// ESERCIZIO QUATTRO//

const rootEl=document.querySelector("#root2");

const weatherCardGen=(city,temperature,ImgUrl)=>{
    const cardEl=document.createElement("div");
    const cityEl=document.createElement("h3");
    const temperatureEl=document.createElement("p");
    const weatherImgEl=document.createElement("img");

    cardEl.className="card-item";
    cityEl.className="city-title";
    temperatureEl.className="temperature-p";
    weatherImgEl.className="img-weather";

    cityEl.textContent=city;
    temperatureEl.textContent=temperature;
    weatherImgEl.src=ImgUrl;

    /*cardEl.appendChild(cityEl)
    cardEl.appendChild(temperatureEl)
    cardEl.appendChild(weatherImgEl)*/

    /*cardEl.append(cityEl)
    cardEl.append(temperatureEl)
    cardEl.append(weatherImgEl)*/

    cardEl.append(cityEl,temperatureEl,weatherImgEl)


    return cardEl;

}

const cardMilan=weatherCardGen("Milano","La temperatura è di 38°", "https://picsum.photos/id/65/500/500");
const cardRome=weatherCardGen("Roma","La temperatura è di 48°", "https://picsum.photos/id/54/500/500");
const cardPalermo=weatherCardGen("Palermo","La temperatura è di 50°", "https://picsum.photos/id/74/500/500");
const cardMadrid=weatherCardGen("Madrid","La temperatura è di 55°", "https://picsum.photos/id/109/500/500");


rootEl.append(cardMilan,cardRome,cardPalermo,cardMadrid);