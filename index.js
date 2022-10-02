let btn = document.querySelector(".btn");
let red = document.querySelector(".red");
let modea = document.getElementById("modea");
// let modeal = document.getElementById("modeal");


btn.addEventListener('click', function(){
    if (modea.style.display != 'grid')
      {modea.style.display = 'grid';
    
    }
})

red.addEventListener('click', function(){
    if (modea.style.display != 'none')
      {modea.style.display = 'none';
      
    }
})