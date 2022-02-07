function submitForm(){
    var productId = document.getElementById("productId").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;

    
  var record = {
   id:[],
   name: [],
   price:[]
  };
         
  var error ={
      type:[],
      field:[]
  };
  
    
    if( checkData(error, productId,productName,productPrice)){
              document.getElementById("error").innerHTML=error.type + " " + error.field;   
    }
    else{
        document.getElementById("error").innerHTML="";
        appendRecord(record,productId,productName,productPrice);
        displayRecord(record);
    }

}


   
       //check data
    function checkData(error, productId,productName,productPrice){

           if(productId==""|| productName=="" || productPrice=="")
           {
               error.field.push("Some fields are empty");
               return true;
           }

           if (!Number.isInteger(parseInt(productId)) || !Number.isInteger(parseInt(productPrice))){
              error.type.push("Data type mismatch");
              return true;
           }
          
                 
           return false;

    }


      function appendRecord(record,productId,productName,productPrice){
          record.id.push(productId);
          record.name.push(productName);
          record.price.push(productPrice);
     }


     function displayRecord(record){
        
        let row="";

        for(let i=0;i<record.id.length;i++){
            let node = document.createElement("tr");
            textnode = "<td class='tabData'>"+record.id[i]+"</td><td class='tabData'>"+record.name[i]+"</td><td class='tabData'>"+record.price[i]+"</td>";
        
            node.innerHTML= textnode;
            document.getElementById("Table").appendChild(node);

        }

     }


