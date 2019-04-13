/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
 
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const list = document.getElementsByClassName('student-item');






//dont display the whole list or delete parts. Just display the listItems chosen.

function showPage(list, page){
    
    for (var i = 0; i <list.length; i++){
        list[i].style.display="none";
    }
    
   for(var i=0+page*10; i<10+page*10; i++){
       list[i].style.display="block";
    }
  
    
}



//this function creates the page link list at the bottom of the page
function appendPageLinks(list) {
    
    var div = document.createElement("DIV");
    div.className = "pagination";
    var ul = document.createElement("UL");
    div.appendChild(ul);
    
    for(var i = 0; i < (Math.floor(list.length/10))+1; i++){
        var a = document.createElement("A");
        var li = document.createElement("LI");
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML = i+1;
    }
    document.querySelector("div.page").appendChild(div);
    

}

//one more function that controls the page links with event listeners


appendPageLinks(list);

showPage(list,2);



