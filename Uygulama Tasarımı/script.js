const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
function error(input, message){
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback';
}
function success(input){
    input.className='form-control is-valid';
}
const checkemail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value ===''){
            error(input,`${input.id} is required.`);
        }else{
            success(input);
        }
    });
}
function checklength(input,min,max){
    if(input.value.length < min){
        error(input, `${input.id} en az ${min} karakter kadar olmalıdır`);
    }else if(input.value.length > max){
        error(input, `${input.id} en fazla ${max} karakter kadar olmalıdır`);
    }else{
        success(input);
    }
}
function checkpassword(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor')
    }
}
form.addEventListener('submit',function(e){
e.preventDefault();

checkRequired([username,email,password,repassword]);
checkemail(email);
checklength(username,7,15);
checklength(password,7,12);
checkpassword(password,repassword);

});
