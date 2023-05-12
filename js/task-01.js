const categoryEl = document.getElementById('categories');
const itemsRef = categoryEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach((item) => {
      const title = item.firstElementChild.textContent;
         console.log(`Category: ${title}`);
      const listItems = item.children[1].children.length;
         console.log(`Elements: ${listItems}`);  
   })

