var menuBtn = document.getElementById('menu-icon');
var menuContainer = document.getElementById('body');

var menuContClosed = "closed-menu";
var menuContOpened = "opened-menu";

menuBtn.onclick = function() {
  if (menuContainer.className == menuContClosed) {
    menuContainer.className = menuContOpened;
  } else if (menuContainer.className == menuContOpened) {
    menuContainer.className = menuContClosed;
  }
}

