var lbsInput = document.getElementById("lbsInput");
var kgOutput = document.getElementById("KGOutput");
var gOutput = document.getElementById("GOutput");
var ozOutput = document.getElementById("ozOutput");
var cardBlock = document.querySelectorAll(".cardblock > div");
var output = document.getElementById("output");



// Makes output invisible if nothing is typed
output.style.visibility = 'hidden';

lbsInput.addEventListener('input', (e) =>
{   
    output.style.visibility = 'visible';

    // Makes output visible
    

    
    let pounds = e.target.value;
   //Convertion
   poundsToKG = pounds/2.205;
   poundsToG = pounds * 453.59;
   poundstoOz = pounds * 16;
   // Leave number with 2 decimals numbers.
   gOutput.textContent = poundsToG.toFixed(2);
   kgOutput.textContent = poundsToKG.toFixed(2);
   ozOutput.textContent = poundstoOz.toFixed(2);
  
   // Changes all children inside "cardBlock" at once.
   for(i =0; i < cardBlock.length; i++){
       if (cardBlock[i]){
           cardBlock[i].style.fontWeight = "500";
           cardBlock[i].style.fontSize = "35px";
           cardBlock[i].style.marginLeft = "10px";

           if(cardBlock[i].textContent.length > 7){
            cardBlock[i].style.fontSize = "20px";

           }
       }
   }

});


    
    document.addEventListener('click', (e) => {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;   

            if(isNaN(target) && target != ozOutput && target != gOutput && target != kgOutput){
                // Does Nothing
            }
            else{
                number = parseFloat(text)
                target.textContent = number.toFixed(4)
              
               console.log(typeof(number));
               
            }
    }, false);
