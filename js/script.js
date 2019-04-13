//global constants
const list = document.getElementsByClassName('student-item');
var page = 0;

//function that displays the items from the list
function showPage(list, page){
    
    for(var i = 0; i < list.length; i++){
        
        if(i >= (page*10) && i < (page*10)+10){
            list[i].style.display="block";
        }
        else{
            list[i].style.display="none";
        }
    }
    
}


//this function creates the page link list at the bottom of the page
function appendPageLinks(list, page) {
    
    //creates the div and ul
    var div = document.createElement("DIV");
    div.className = "pagination";
    var ul = document.createElement("UL");
    div.appendChild(ul);
    
    //creates the list of pages
    for(var i = 0; i < Math.floor(list.length/10)+1; i++){
        var a = document.createElement("A");
        var li = document.createElement("LI");
        ul.appendChild(li);
        li.appendChild(a);
        a.innerHTML = i+1;
        
    }
    //appends it all to the doc
    document.querySelector("div.page").appendChild(div);
    
    
    //event listeners for clicks
    document.getElementsByTagName('A')[0].addEventListener('click', function(){
                                                           showPage(list, 0);
                                                           });
    document.getElementsByTagName('A')[1].addEventListener('click', function(){
                                                           showPage(list, 1);
                                                           });
    document.getElementsByTagName('A')[2].addEventListener('click', function(){
                                                           showPage(list, 2);
                                                           });
    document.getElementsByTagName('A')[3].addEventListener('click', function(){
                                                           showPage(list, 3);
                                                           });
    document.getElementsByTagName('A')[4].addEventListener('click', function(){
                                                           showPage(list, 4);
                                                           });
    document.getElementsByTagName('A')[5].addEventListener('click', function(){
                                                           showPage(list, 5);
                                                           });
    document.getElementsByTagName('A')[6].addEventListener('click', function(){
                                                           showPage(list, 6);
                                                           });
    document.getElementsByTagName('A')[7].addEventListener('click', function(){
                                                           showPage(list, 7);
                                                           });
    document.getElementsByTagName('A')[8].addEventListener('click', function(){
                                                           showPage(list, 8);
                                                           });
    document.getElementsByTagName('A')[9].addEventListener('click', function(){
                                                           showPage(list, 9);
                                                           });
}


//executes the program
showPage(list, page);
appendPageLinks(list, page);
