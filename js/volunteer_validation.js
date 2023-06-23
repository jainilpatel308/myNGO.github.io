function formvalidate(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var radio_0 = document.getElementById('radio_0').checked;
    var radio_1 = document.getElementById('radio_1').checked;
    var radio_2 = document.getElementById('radio_2').checked;
    if(name=='')
    {
        document.getElementById('username').innerHTML=" **Please Fill The Name Field ";
        return false;
    }
    if((name.length <= 3) || (name.length > 50))
    {
        document.getElementById('username').innerHTML=" **User Length Must be between 3 and 50 ";
        return false;
    }
    if(!isNaN(name))
    {
        document.getElementById('username').innerHTML=" **Only characters are allowed ";
        return false;
    }
    var phonepattern = /^\d{10}$/
    if(!phone.match(phonepattern))
    {
      document.getElementById('phonenumber').innerHTML=" **Enter a proper phone number ";
      return false;
    }  
    var emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!email.match(emailpattern))
    {
      document.getElementById('emails').innerHTML=" **Enter proper email id";
      return false;
    }
    if(address=='')
    {
      document.getElementById('addr').innerHTML = "**Please fill up the Address field";
      return false;
    }


    //for choice
    if(radio_0==false && radio_1==false && radio_2==false)
    {
      document.getElementById('choice_error').innerHTML = "**Please select a radio button";
      return false;
    }

    if(radio_0==true)
    {
      console.log("radio_0");
      var radio_3 = document.getElementById('radio_3').checked;
      var radio_4 = document.getElementById('radio_4').checked;
      var radio_5 = document.getElementById('radio_5').checked;
      var radio_6 = document.getElementById('radio_6').checked;
      var days = document.getElementById('days1').value;
      
      if(radio_3==false && radio_4==false && radio_5==false && radio_6 == false)
      {
        document.getElementById('err0').innerHTML = "**Please select a radio button";
        return false;
      }

      if(days=='')
      {
        document.getElementById('err1').innerHTML = "**Please fill up this field";
        return false;
      }
    }

    if(radio_1==true)
    {
      var days = document.getElementById('days2').value;
      if(days=='')
      {
        document.getElementById('err2').innerHTML = "**Please fill up this field";
        return false;
      }
    }
    if(radio_2==true)
    {
      var days = document.getElementById('days3').value;
      if(days=='')
      {
        document.getElementById('err3').innerHTML = "**Please fill up this field";
        return false;
      }
    }
}