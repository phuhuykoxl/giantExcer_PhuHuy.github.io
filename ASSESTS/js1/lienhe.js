(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          else{
            alert("Chúng tôi đã nhận được thông tin của bạn, chúng tôi sẽ phản hồi sau 24h");
          }
          form.classList.add('was-validated')
        }, false)
      })
    })()
    