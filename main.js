const d = document;

const $email = d.querySelector(".emailP input"),
    $passwd = d.querySelector(".passwordP input"),
    $btnS = d.querySelector(".iniciarSession button"),
    $formulario = d.querySelector(".login"),
    $video = d.querySelector(".video"),
    $main = d.querySelector("main");

const $emailMessage = d.querySelector(".emailMsgI");

function ValidateEmail(){
    
    let x = /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9]{1,30}\@[A-Za-z]{1,20}\.[A-Za-z]{1,20}$/;
    
    $formulario.addEventListener("submit", (e) => {
        
        if(x.test($email.value)){
            $formulario.submit()
            $emailMessage.style.display = "none";



        }else{
            e.preventDefault();

            $emailMessage.style.display = "block";
            $emailMessage.classList.add("emailMsgE");
            $emailMessage.textContent = "El correo o contraseña no es válido";

            $formulario.reset();


        }

    })

}

d.addEventListener("DOMContentLoaded", () => {
    ValidateEmail();

})



















































