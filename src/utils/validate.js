export const checkValidData=(email,password)=>{

    const isEmaiValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isEmaiValid){
        return "Email Not Valid";
    }
   
    if(!isPasswordValid){
        return "Password must contain 8 characters with minimum 1 letter and 1 digit";
    }
    return null;
}