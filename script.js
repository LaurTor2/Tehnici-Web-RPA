(function(){
    var subscribe_btn = document.getElementById('subscribe');

    subscribe_btn.addEventListener('click', function(event){
        var email = document.getElementById('email').value;
        if(validateEmail(email)) {
            event.preventDefault();
            document.getElementById('subscribe_form').style.display = 'none';
            var pmessage = document.createElement('p');
            pmessage.setAttribute('id','message');
            pmessage.innerHTML = 'Thank you for subscribing to our newsletter!';
            var formContainer = document.getElementById('form-container');
            formContainer.appendChild(pmessage);
        }

    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    
})();