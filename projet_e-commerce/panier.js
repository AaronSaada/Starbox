const product = [
  {
      id: 0,
      image: 'images/corsair-m65.jpg',
      nom: 'Corsair M65 RGB',
      prix: 72.50,
  },
  {
      id: 1,
      image: 'images/hyperx-cloud-2.jpg',
      nom: 'HyperX Cloud',
      prix: 89.50,
  },
  {
      id: 2,
      image: 'images/logitech-g213.jpg',
      nom: 'Logitech G213',
      prix: 99.40,
  },
  {
      id: 3,
      image: 'images/logitech-gpro.webp',
      nom: 'Logitech GPRO',
      prix: 170,
  },
  {
    id: 4,
    image: 'images/mm800.jpg',
    nom: 'Corsair MM800',
    prix: 72.50,
},
{
    id: 5,
    image: 'images/odyssey-g5.jpg',
    nom: 'Samsung Odyssey G5',
    prix: 89.50,
},
{
    id: 6,
    image: 'images/pack-ordinateurs.webp',
    nom: 'Pack ordinateur',
    prix: 99.40,
},
{
    id: 7,
    image: 'images/razer-kraken.jpg',
    nom: 'Razer Kraken V3',
    prix: 170,
},
{
  id: 8,
  image: 'images/rtx-4090.jpg',
  nom: 'Nvidia GeForce RTX 4090',
  prix: 99.40,
},
{
  id: 9,
  image: 'images/u32r.avif',
  nom: 'Samsung U32R',
  prix: 170,
},
];

const categories = [...new Set(product.map((item) =>
  {return item}))]
  var i = 0;
document.querySelector('#root').innerHTML = categories.map((item) =>{
  var {image, nom, prix} = item;
  return(
      `<div class="box">
          <div class="img-box">
              <img class="images" src=${image}>
          </div>
          <div class="bottom">
              <p>${nom}</p>
              <h2>${prix} €</h2>`+
              "<button onclick='addtocart("+(i++)+")' class='add-to-cart'>Ajouter au panier</button>"+
          `</div>
      </div>`
  )
}).join('');

var cart = [];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a){
  let j=0, total= 0;
  document.getElementById('count').innerHTML = cart.length;
  document.getElementById('total').innerHTML = 0 + " €";
  if(cart.length == 0){
      document.getElementById('cartItem').innerHTML = "Votre panier est vide";
  }else{
      document.getElementById('cartItem').innerHTML = cart.map((items)=>
      {
          var {image, nom, prix} = items;
          total = total+prix;
          document.getElementById('total').innerHTML = total + " €"
          return(
              `<div class="cart-item">
              <div class="row-img-container">
                  <img class="row-img" src=${image}>
              </div>
              <div class="bottom">
                  <p>${nom}</p>
                  <h2>${prix} €</h2>`+
                  "<button onclick='delElement("+(j++)+")' class='delete-button'><img src='images/trash-solid.svg'></button>"+
              `</div>
          </div>`
          )
      }).join('');
      
  }
}