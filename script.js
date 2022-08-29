/*document.getElementById('button').addEventListener('click', function () {
    const emailField = document.getElementById('Useremail');
    const useremail = emailField.value;
    console.log(useremail);
})*/

document.getElementById('button').addEventListener('click', function() {
    const firstInput = document.getElementById('Useremail');
    const user=firstInput.value;

    const SecondInput = document.getElementById('Userpassword');
    const userP=SecondInput.value;

    if( user=='arif@gmail.com' && userP== 'polyhi'){
        window.location.href="banking.html"
    }
    });
 
   