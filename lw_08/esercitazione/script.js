// Esercitazione lw_08

//ESERCIZIO 1

const ROOT_EL = document.querySelector(".root");

//Creo container

const createContainer = () => {
  const containerEl = document.createElement("div");

  containerEl.className = "container";

  return containerEl;
};

//Creo titolo

const createTitle = (productData) => {
  const titleEl = document.createElement("h1");

  titleEl.className = "title-1";

  titleEl.textContent = productData.title;

  return titleEl;
};

//Creo immagine

const createImage = (productData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "image";

  imageEl.src = productData.image;
  imageEl.alt = productData.title;

  return imageEl;
};

// Creo paragrafo

const createParagraph = (productData) => {
  const paragraphEl = document.createElement("p");

  paragraphEl.className = "paragraph";

  paragraphEl.textContent = productData.description;

  return paragraphEl;
};

// Faccio fetch e appendo alla root

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const container = createContainer();
    const title = createTitle(data);
    const image = createImage(data);
    const paragraph = createParagraph(data);
    container.append(title, image, paragraph);
    ROOT_EL.append(container);
  });

/// ESERCIZIO 2

const createMessageError = () => {
  const Error = document.createElement("h2");
  Error.textContent = "La fetch non è andata a buon fine! Try again";
  //Error.className = "error";
  return Error;
};

const createMessageNotError = () => {
  const notError = document.createElement("h2");
  notError.textContent = "La fetch è andata a buon fine! Good job!";
  //notError.className = "notError";
  return notError;
};

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const notErrorCatch = createMessageNotError();
    ROOT_EL.append(notErrorCatch);
  })
  .catch((error) => {
    const errorCatch = createMessageError();
    ROOT_EL.append(errorCatch);
  });

///ESERCIZIO 3

const createProduct = (DataProduct) => {
  const containerEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const imageEl = document.createElement("img");
  const paragraphEl = document.createElement("p");

  containerEl.className = "container";
  titleEl.className = "title";
  imageEl.className = "image";
  paragraphEl.className = "paragraph";

  titleEl.textContent = DataProduct.title;
  imageEl.src = DataProduct.image;
  imageEl.alt = DataProduct.title;
  paragraphEl.textContent = DataProduct.description;

  containerEl.append(titleEl, imageEl, paragraphEl);

  return containerEl;
};

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const product = createProduct(data);

    ROOT_EL.append(product);
  });
