document.getElementById('main-form').addEventListener('submit', checkForm);

function checkForm (param) {
    param.preventDefault();
    
    var el = document.getElementById('main-form')

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = '';

    if(name == '' || pass == '' || repass == '' || state == '') {
        fail = 'ээ, заполни все поля';
    }else if(name.length == 1 || name.length > 12){
        fail = 'эээ, не коректное имя'
    }else if (pass != repass) {
        fail = 'ээээ, пароли не совпадают'
    }
        

    if(fail != ''){
        document.getElementById('error').innerHTML = fail;
        document.getElementById('error').style.color = 'red';
    }else{
        document.getElementById('error').innerHTML = alert="Успешно заполнено!";
        document.getElementById('error').style.color = 'green';
    }
    
}