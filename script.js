let change_colr = document.querySelectorAll('.fav_colr');
function activeLink(){
    change_colr.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add("active");
}

change_colr.forEach((item)=>
item.addEventListener('click',activeLink));