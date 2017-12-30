(function() {
    
    
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    var quote_btn = document.getElementById('quote2');
    quote_btn.addEventListener('click', function(event){
        var quote_btn = document.getElementById('quote2');
        var email2 = document.getElementById('email2').value;
                if(validateEmail(email2)) {
                    event.preventDefault();
                    document.getElementById('quote').style.display = 'none';
                }
        
            
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               document.getElementById("gquote").innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "https://raw.githubusercontent.com/LaurTor2/Tehnici-Web-RPA/master/ajax_info.txt", true);
            xhttp.send();
        
        });
    
})();
  