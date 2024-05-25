let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inpu = document.querySelector("input");


inpu.addEventListener("keypress" , function(e){
   if(e.key == "Enter")
    {
        if(inpu.value == "")
            {
                alert("Please Enter a Task");
            }
            else
            {
                let li = document.createElement("li");
                li.textContent = inpu.value;
                let del = document.createElement("button");
                del.innerHTML = "&#10005;";
                del.classList.add("btn") ;
                li.appendChild(del);
                ul.appendChild(li);
                console.log(inpu.value);
                inpu.value = "";
            }
    }
      
  });


btn.addEventListener("click" , function(){
    if(inpu.value == "")
      {
          alert("Please Enter a Task");
      }
      else
      {
          let li = document.createElement("li");
          li.textContent = inpu.value;
          let del = document.createElement("button");
          del.innerHTML = "&#10005;";
          del.classList.add("btn") ;
          li.appendChild(del);
          ul.appendChild(li);
          console.log(inpu.value);
          inpu.value = "";
      }
      
  });

ul.addEventListener("click" , function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("done");
    }
    else if(e.target.tagName == "BUTTON")
    {
        e.target.parentElement.remove();
    }
});

// let btns = document.querySelectorAll(".btn");
// for (del of btns)
//     {
//         del.addEventListener("click" , function(){
//             this.parentElement.remove();
//         });


//     }