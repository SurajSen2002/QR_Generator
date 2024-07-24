
     let imgBox=document.getElementById("imgBox");
     let qrImage=document.getElementById("qrImage");
     let qrText=document.getElementById("qrText");

     let modebtn=document.querySelector("#Mode");
     let body=document.querySelector("#body");
     let container=document.querySelector("#container");
     let currMode="burlywood";

      modebtn.addEventListener("click",()=>{
         if(currMode==="burlywood")
           {
             currMode="dark";
             document.querySelector("body").style.backgroundColor="black";
             document.querySelector(".container").style.backgroundColor="burlywood";
           }
        else
         {
            currMode="burlywood";
            document.querySelector("body").style.backgroundColor="burlywood"; 
            document.querySelector(".container").style.backgroundColor="white";
         } 
      });

      function generatQR()
   {
     if( qrText.value.length>0)
     {
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
        imgBox.classList.add("show-img");
        
     }
     else
     {  
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.add('error');
            alert("Input Can't be Empty");
        },500);
     }  
   }       