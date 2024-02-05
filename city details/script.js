let button=document.querySelector("#button");
let result=document.createElement("div");
   result.id="res"
   document.getElementById("wrapper").appendChild(result)
button.addEventListener('click',showstats);
function showstats(){
   let population=0,literacyrate=0,language=0;
   //select dropdown
   let dropdown= document.getElementById("dropdown")

   let city=dropdown.options[dropdown.selectedIndex].value

   switch(city)
   {
    case 'Bangalore' :
        population=844367
        literacyrate=88.71
        language='Kannada';
        break;

    case 'Chennai' :
        population=4646732
        literacyrate=90.20
        language='Tamil';
        break;

    case 'Mumbai':
        population=1224456
        literacyrate=89.20
        language='Marathi'; 
        break;  
        
    case 'Delhi' :
        population=16787942
        literacyrate=86.20
        language='Hindi';    
        break;
   }
   let text= `The indian city of ${city} has a population of ${population}.language spoken is ${language} and  literacy rate is ${literacyrate}%`

   
   document.querySelector("#res").innerHTML=text;




}