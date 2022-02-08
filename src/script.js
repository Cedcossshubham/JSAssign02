const products = [];

function submitForm(){
    var productId = document.getElementById("productId").value;
    var productName = document.getElementById("productName").value;
    var productPrice = document.getElementById("productPrice").value;
    
    var record = {
         pId:"",
         pName:"",
         pPrice:""

    };
         
    var error ={
        type:[],
        field:[]
    };
    
    
    if(checkData(error,productId,productName,productPrice)){
            document.getElementById("error").innerHTML=error.type + " " + error.field;   
    }
    else{
            document.getElementById("error").innerHTML="";
            appendRecord(record,productId,productName,productPrice);
        }

}


//check for empty fields and data type   
function checkData(error, productId,productName,productPrice){
            
          console.log("check data");
           if(productId==""|| productName=="" || productPrice=="")
           {
               error.field ="Some fields are empty";
               return true;
           }

           if (!Number.isInteger(parseInt(productId)) || !Number.isInteger(parseInt(productPrice))){
              error.type ="Data type mismatch";
              return true;
           }
                 
           return false;

    }


//append record into product table
    function appendRecord(record,productId,productName,productPrice){
        record.pId = productId;
        record.pName = productName;
        record.pPrice = productPrice;
        
        //check for duplicate Id
        if(checkProduct(record)){
            document.getElementById("error").innerHTML ="Id already exist!";
        }
        else{
            products.push(record);  //adding new records
            displayRecord(); //display record
        }

        
    }


    //check for duplicate id
     function checkProduct(record){
        for (let i = 0 ; i < products.length;i++){
            if(products[i].pId === record.pId){
               return true;
            }                
        
        }
       
       return false;
     }


    //display record
     function displayRecord(){

        console.log("display record");
         
        let html="<tr>\
        <th>Product ID</th>\
        <th>Product Name</th>\
        <th>Product Price</th>\
        </tr>";

        document.getElementById("Table").innerHTML = html;

        for (let j=0 ; j< products.length ; j++){
            html +="<tr><td class='tabData'>"+products[j].pId+"</td><td class='tabData'>"+products[j].pName+"</td><td class='tabData'>"+products[j].pPrice+"</td></tr>";
            
            document.getElementById("Table").innerHTML = html;
        }

     }


