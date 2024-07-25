addEventListener("DOMContentLoaded",function() {
       
    const form = document.querySelector("form");
    const firstName = document.querySelector("firstName")
    const lastName = document.querySelector("lastName")
    const password = document.querySelector("password")
    const email = document.querySelector("email")

    form.addEventListener("submit",(event)=>{
        
            if(!inputChecks()){
                event.preventDefault()
            }
    })

        function inputChecks(element,message){
            const firstNameVal = firstName.value.trim()
            const lastNameVal = lastName.value.trim()
            const passwordVal = password.value.trim()
            const emailVal = email.value.trim()
            let success = true


            if(firstNameVal === ""){
                setError("firstName","Not fill the firstName")
            }else{
                setSuccess(firstName)
            }

            if(lastNameVal === ""){
                setError("lastName","Not fill the lastName")
            }else{
                setSuccess(lastName)
            }

            if(emailVal === ""){
                setError("email","Not fill the  email")
            }else if (!validEmail(emailVal)){
                setError("email","email Not required")
            }else{
                setSuccess(email)
            }

            if(passwordval === ""){
                setError("password","Not fill the  password")
            }else if (!passwordVal.length < 8){
                setError("password","atleast 8 character set the password")
            }else{
                setSuccess(password)
            }
    }

    function setError(element,message){
            const inputGroup = element.parentElement; 
            const showError = inputGroup.queryselector(".error")

            showError.innerHTML = message;
            inputGroup.classList.add("error")
            inputGroup.classList.remove(".success")
    }
    function setSuccess(element){
            const inputGroup = element.parentElement; 
            const showError = inputGroup.queryselector(".error")

            showError.innerHTML = "";
            inputGroup.classList.add("success")
            inputGroup.classList.remove("error")
    }
    function validEmail(email) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
    }
})