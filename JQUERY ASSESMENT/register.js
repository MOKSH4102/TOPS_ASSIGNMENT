function menu() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile")
    let male = document.getElementById("m");
    let female = document.getElementById("f");
    let dob = document.getElementById("dob");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let pin = document.getElementById("pincode");
    let state = document.getElementById("state");
    let select = document.getElementById("qualification");
    let cs = document.getElementById("cs");
    let it = document.getElementById("it");
    let ds = document.getElementById("ds");
    let ca = document.getElementById("ca");
    let pass = document.getElementById("pass");
    if (fname.value == '' || fname.value == null) {
        alert("enter the first name");
        fname.focus()
    } else if (lname.value == '' || lname.value == null) {
        alert("enter the last name");
    }
    else if (email.value == '' || email.value == null) {
        alert("enter the email");
    }
    else if (mobile.value == '' || mobile.value == null) {
        alert("enter the mobile number");
    } else if (male.checked == false && female.checked == false) {
        alert("select gender");
    }
    else if (dob.value == '' || dob.value == null) {
        alert("enter the date of birth");
    }
    else if (address.value == '' || address.value == null) {
        alert("enter your address");
    }
    else if (city.value == '' || city.value == null) {
        alert("enter your city");
    }
    else if (pin.value == '' || pin.value == null) {
        alert("enter your pincode");
    }
    else if (state.value == '' || state.value == null) {
        alert("enter your state");
    }
    else if (select.value ==="select") {
        alert("enter your choice");
    }
    else if(cs.checked == false && it.checked == false && ds.checked == false && ca.checked == false){
        alert("select your choice");
    }
    else if(pass.value == '' || pass.value == null){
        alert("enter your password");
    }else{
        fname.value ="";
        lname.value = "";
        mobile.value="";
        male.checked="";
        female.checked="";
        dob.value="";
        address.value="";
        city.value="";
        pin.value="";
        state.value="";
        select.value="";
        cs.checked="";
        it.checked="";
        ds.checked="";
        ca.checked="";
        pass.value="";
    }
    return false;
}