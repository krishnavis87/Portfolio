function UserReacted(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if(name == "" || email == ""){
        alert("Please enter appropiate details");
    }
    else{
        alert("Thankyou for responding we'll get back to you!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }
    
}