document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {

    // F12 Engelle
    if (e.keyCode == 123) {
        return false;
    }

    // CTRL+I Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    // CTRL+J Engelle
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // CTRL+S Engelle
    if (e.ctrlKey && e.keyCode == 83) {
        return false;
    }

    // CTRL+U Engelle
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}




const element = new Image();
Object.defineProperty(element, 'id', {
  get: function () {
    /* TODO */
    alert('囧');
  }
});
console.log('%cHello', element);

