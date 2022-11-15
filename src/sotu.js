'use strict';

document.getElementById('form').ariaSelected.onchange = function() {
    location.href = document.getElementById('form').ariaSelected.valueOf;
}