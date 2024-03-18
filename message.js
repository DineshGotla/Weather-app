let name=document.getElementsByName('name').value;
function emailSend(){
    Email.send({
        SecureToken : "793063b7-b7de-4b76-bc29-ae4bcc9cb5b9",
        To : 'gotladinesh@gmail.com',
        From : "gotladinesh@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}