function validation(values){
    alert("")
    let error={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.email ===""){
        errors.email ="Name should not be empty"}
    else if(!email_pattern.test(values.email)){
    errors.email ="Email Didn't match"
    }
    else{
    errors.email =""
    }
    if(values.password ===""){
    
        errors.password ="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
    error.password="Password didn't match"
    }
    else{
    error.password= ""
    }
    return error;
    
}
export default validation;