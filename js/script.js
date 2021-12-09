        document.getElementById('name').addEventListener('blur', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('phone').addEventListener('blur', validatePhone);
        
        function validateName(){
            const name = document.getElementById('name');
            const re = /^[a-zA-Z]{2,10}$/;

            if(!re.test(name.value)){
                document.getElementById('nameChk').innerHTML = "Name must be between 2 and 10 characters";
                name.parentElement.classList.add('error');
                name.parentElement.classList.remove('success');
            }
            else{
                document.getElementById('nameChk').innerHTML = "";
                name.parentElement.classList.add('success');
                name.parentElement.classList.remove('error');
            }
        }

        function validateEmail(){
            const email = document.getElementById('email');
            const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

            if(!re.test(email.value)){
                document.getElementById('emailChk').innerHTML = "Enter valid email";
                email.parentElement.classList.add('error');
                email.parentElement.classList.remove('success');
            }
            else{
                document.getElementById('emailChk').innerHTML = "";
                email.parentElement.classList.add('success');
                email.parentElement.classList.remove('error');
            }
        }

        function validatePhone(){
            const name = document.getElementById('phone');
            const re = /^[1-9]\d{9}$/;

            if(!re.test(phone.value)){
                document.getElementById('phoneChk').innerHTML = "Enter valid phone number";
                phone.parentElement.classList.add('error');
                phone.parentElement.classList.remove('success');
            }
            else{
                document.getElementById('phoneChk').innerHTML = "";
                phone.parentElement.classList.add('success');
                phone.parentElement.classList.remove('error');
            }
        }
