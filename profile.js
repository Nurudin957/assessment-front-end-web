
let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');


function favouriteColor() {
    alert('my favourite color is red');
}

function favouritePlace() {
    alert('my favourite place is texas');
}
function favouriteRitual () {
    alert('my favourite ritual  is praying');
}



favColor.addEventListener('click', favouriteColor);
favPlace.addEventListener('click', favouritePlace);
favRitual.addEventListener('click', favouriteRitual);