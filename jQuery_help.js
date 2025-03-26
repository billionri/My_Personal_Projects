    if(!$("#myForm")[0].checkValidity()) {
        $("#myForm")[0].reportValidity();
        return false;
    }
