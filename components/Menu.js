// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
//Nesting all the items


function menuMaker(menuItems){
//Formatting the stuff
  const header = document.querySelector('.header');
  const menuDiv = document.createElement('div');
  const menuList = document.createElement('ul');
  const menuButton = document.querySelector('.menu-button');

//appending to the divs
  header.appendChild(menuDiv);
  menuDiv.appendChild(menuList);  

  //adding the class names
  menuDiv.className = 'menu';

  //click toggle
    menuButton.addEventListener('click', event => {
    menuDiv.classList.toggle('menu--open');
    });

  //Add menu items to menuList
  menuItems.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  });

    return menuDiv;
  };
  
  menuMaker(menuItems);
  
// const menuDiv = document.createElement('div');
// const menuList = document.createElement('ul');
// const menuButton =document.querySelector('.menu-button');

// // Adding the class name(s)
// menuDiv.className = 'menu';

// //Appending to the divs
// header.appendChild(menuDiv)
// menuDiv.appendChild(menuList);

// //Add menu items to menuList
// const menuMaker = menuItems.map(item => {
//   const menuItem = document.createElement('li');
//   menuItem.textContent = item;
  
//   return menuItem;
// });
// // toggles the menu open 
// menuButton.addEventListener('click', event => {
//   /*this is where the problem is happening*/
//   menuDiv.classList.toggle('menu--open');
// });

// menuMaker.forEach(li => {
//   menuList.appendChild(li);
// });