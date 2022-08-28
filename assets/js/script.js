const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph) => console.log(paragraph))

// paragraphs.forEach((paragraph) => console.log(paragraph.innerText))

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => console.log(i++)); 

imgs.forEach(() => i++);
