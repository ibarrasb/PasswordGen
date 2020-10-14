// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){

var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*)(<>?";
 passwordLength = prompt("How many characters would you like your password?(8-128 char): ");
 low = confirm("Include lowercase?");
 upCase = confirm("Include Uppercase?");
 hNun = confirm("Include numbers?");
 Special = confirm("Include special characters?");
 var password1 = "";



 // User accepter lower case
  if(low){
    //user accepts upper case
    if(upCase){
      //user accepts numbers
      if(hNun){
        //user accepts special characters
        if(Special){
    for(var i = 0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      password1 += chars.substring(randomNumber,randomNumber+1);
      }
      return password1;
    } else {
      // User accepts ALL but Special Char
      var uln ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for(var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * uln.length);
        password1 += uln.substring(randomNumber,randomNumber+1);
        }
  
        return password1;
    }
    }else { 
      if(Special){
        var LUn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*)(<>?";
        for(var i = 0; i < passwordLength; i++){
          var randomNumber = Math.floor(Math.random() * LUn.length);
          password1 += LUn.substring(randomNumber,randomNumber+1);
          }
          return password1;


      }else{
        var UpLowLet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i = 0; i < passwordLength; i++){
          var randomNumber = Math.floor(Math.random() * UpLowLet.length);
          password1 += UpLowLet.substring(randomNumber,randomNumber+1);
          }
          return password1;

      }

    }
    }else{
      if(hNun){
        if(Special){
          var Low = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*)(<>?";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;
        } else{
          var Low = "0123456789abcdefghijklmnopqrstuvwxyz";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;
        }

      }else{
        //Accepts ONLY lowercase and special
        if(Special){
          var LowSpec = "abcdefghijklmnopqrstuvwxyz)(!@#$%^&*><?";
        for(var i = 0; i < passwordLength; i++){
          var randomNumber = Math.floor(Math.random() * LowSpec.length);
          password1 += LowSpec.substring(randomNumber,randomNumber+1);
          }
          return password1;

        }else {
          //Accepts ONLY lowercase
          var Low = "abcdefghijklmnopqrstuvwxyz";
        for(var i = 0; i < passwordLength; i++){
          var randomNumber = Math.floor(Math.random() * Low.length);
          password1 += Low.substring(randomNumber,randomNumber+1);
          }
          return password1;

        }
      }
    }
  } 

  
  // User Declines LOWERCASE
  else{
    //User accepts UPPERCASE
       if(upCase){
         if(hNun){
           if (Special) {
            var Low = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*)(<>?";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;
           } else{
            var Low = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;
           }
         } else{
           if(Special){
            var Low = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*)(<>?";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;

           } else{
            var Low = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;

           }
         }

       } 
       //User Declined UPPERCASE
       else{
         //User accepts NUMBERS
         if(hNun){ 
           if(Special){
            var chars = "0123456789!@#$%^&*)(<>?";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * chars.length);
              password1 += chars.substring(randomNumber,randomNumber+1);
              }
              return password1;
           } else{
            var Low = "0123456789";
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * Low.length);
              password1 += Low.substring(randomNumber,randomNumber+1);
              }
              return password1;
           }

         }
         //User declines NUMBERS
         else{
           //User Accepts special Chars
           if(Special){
             var spcl = "!@#$%^&*)(><?"
            for(var i = 0; i < passwordLength; i++){
              var randomNumber = Math.floor(Math.random() * spcl.length);
              password1 += spcl.substring(randomNumber,randomNumber+1);
              }
              return password1;
           }
           //USER DECLINED ALL OPTIONS
           else {
             alert('Accept at least one of the following to generate a unique password');
           }
         }
       }
    
} 
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
