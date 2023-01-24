const search = () => {
  var from_location = document.getElementById("from_location").value;
  var to_location = document.getElementById("to_location").value;
  var departure_date = document.getElementById("departure_date").value;

    var errorFromLocation = document.getElementById("errorFromLocation");
    var errorToLocation = document.getElementById("errorToLocation");
    var errorDepartureDate = document.getElementById("errorDepartureDate");

  if( from_location !== "" && to_location !== "" && departure_date !== ""){
    document.getElementById("buss-details").style.display = "block";
    errorDepartureDate.innerHTML = "";
    errorToLocation.innerHTML = "";
    errorFromLocation.innerHTML = "";
  }
  else{
    if(from_location == ""){
        errorFromLocation.innerHTML = "Please enter boarding location.";
    }
    else{
        errorFromLocation.innerHTML = "";
    }
    if(to_location == ""){
        errorToLocation.innerHTML = "Please enter destination location.";        
    }
    else{
        errorToLocation.innerHTML = ""; 
    }
    if(departure_date == ""){
        errorDepartureDate.innerHTML = "Please select departure date.";        
    }else{
        errorDepartureDate.innerHTML = "";  
    }
  }
};

function validateSearch(){
    var errorFromLocation = document.getElementById("errorFromLocation");
    var errorToLocation = document.getElementById("errorToLocation");
    var errorDepartureDate = document.getElementById("errorDepartureDate");
    if(from_location == ""){
        errorFromLocation.innerHTML = "Please enter boarding location.";
    }
    else{
        errorFromLocation.innerHTML = "";
    }
    if(to_location == ""){
        errorToLocation.innerHTML = "Please enter destination location.";        
    }
    else{
        errorToLocation.innerHTML = ""; 
    }
    if(departure_date == ""){
        errorDepartureDate.innerHTML = "Please select departure date.";        
    }else{
        errorDepartureDate.innerHTML = "";  
    }
  }