function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    // Fallback for older browsers without classList support
    var classes = element.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
      element.className = classes.join(' ');
    }
  }
}

// Usage
var listing = document.querySelector('.listing');
addClass(listing, 'leader-listing');
