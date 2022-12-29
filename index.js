function button(){
    let fName=document.getElementById("firstName").value;
    let lName=document.getElementById("lastName").value;
    const full=fName+" "+lName;
    document.getElementById("fullName").value=full;
}