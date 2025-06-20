let texto= document.getElementById('texto1')
let texto2= document.getElementById('texto2')
let texto3= document.getElementById('texto3')
let texto4= document.getElementById('texto4')
let image = document.getElementById('img1')
const prevButton = document.getElementById('esquerda');
const nextButton = document.getElementById('direita');

let imageIndex = 0;
const images =[`carrossel1.png`,
              `carrossel2.png` ,
              `carrossel3.png` ,
              `teste.png`,
];



function showImage(index) {
  image.src = '/img/'+images[index];
  texto= {texto:images[index]}
};

prevButton.addEventListener("click", () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length; 
  console.log(imageIndex);
  
  showImage(imageIndex);
});

nextButton.addEventListener("click", () => {
  imageIndex = (imageIndex + 1) % images.length; 
  showImage(imageIndex);
});








