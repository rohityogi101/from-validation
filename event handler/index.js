function Validate() {
    let Email= document.getElementById("email").value
    let password = document.getElementById("inputPassword").value
    let error = false;
   

    if (
        Email.includes(".") &&
        Email.indexOf("@") != 0 &&
        Email.length - Email.lastIndexOf(".") >= 3
      ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
      } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
            error = true
      }

      if (password){
        document.getElementById("password-valid").style.display ="block";
        document.getElementById("password-invalid").style.display ="none";

      } else {
        document.getElementById("password-invalid").style.display = "block";
        document.getElementById("password-valid").style.display = "none";
        error = true;
      }

      if(error==false) {
        document.getElementById("email").value ="";
        document.getElementById("inputPassword").value="";
		alert('Your details have been saved successfully!')

      } else{
        // alert('Your details have not been saved successfully!')
      }      
    //   console.log(password)

}


