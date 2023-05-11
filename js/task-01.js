const categoryEl = document.getElementById('categories');
const itemsRef = categoryEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);


itemsRef.forEach((item) => {
   const title = item.querySelector('h2').textContent;
      console.log(`Category: ${title}`);
   const listItems = item.querySelectorAll('li').length;
      console.log(`Elements: ${listItems}`);  
})