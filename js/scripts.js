$(document).ready(function() {
  $("form#form1").submit(function(event) {
    $("#response").show();// this will change once we have somthing to show/hide
    event.preventDefault();
    var namePatient = $("input#nameEntry").val();
    var addressData = $("input#addressEntry").val();
    var phoneData = $("input#phoneEntry").val();
    var emailData = $("input#emailEntry").val();
    $(".name").text(namePatient);
    $(".address").text(addressData);
    $(".phone").text(phoneData);
    $(".email").text(emailData);
  });
});
