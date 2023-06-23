function formvalidate(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var radio_0 = document.getElementById('radio_0').checked;
    var radio_1 = document.getElementById('radio_1').checked;
    var radio_2 = document.getElementById('radio_2').checked;
    var radio_3 = document.getElementById('radio_3').checked;
    var radio_4 = document.getElementById('radio_4').checked;
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
    if(radio_0==false && radio_1==false && radio_2==false && radio_3==false && radio_4==false)
    {
      document.getElementById('choice_error').innerHTML = "**Please select a radio button";
      return false;
    }

    if(radio_0==true)
    {
      var radio_5 = document.getElementById('radio_5').checked;
      var radio_6 = document.getElementById('radio_6').checked;
      var radio_7 = document.getElementById('radio_7').checked;
      var radio_8 = document.getElementById('radio_8').checked;
      // console.log(radio_5);
      // console.log(radio_6);
      // console.log(radio_7);
      // console.log(radio_8);
      if(radio_5==false && radio_6==false && radio_7==false && radio_8==false)
      {
        document.getElementById('err0').innerHTML = "**Please select a radio button";
        return false;
      }
      if(radio_8==true)
      {
        var val = document.getElementById('other1').value;
        if(val=='')
        {
          document.getElementById('err2').innerHTML = "**Please enter the amount";
          return false;
        }
      }
    }
    if(radio_1==true)
    {
      var radio_9 = document.getElementById('radio_9').checked;
      var radio_10 = document.getElementById('radio_10').checked;
      var radio_11 = document.getElementById('radio_11').checked;
      var radio_12 = document.getElementById('radio_12').checked;
      if(radio_9==false && radio_10==false && radio_11==false && radio_12==false)
      {
        document.getElementById('err1').innerHTML = "**Please select a radio button";
        return false;
      }
      if(radio_12==true)
      {
        var val = document.getElementById('other2').value;
        if(val=='')
        {
          document.getElementById('err3').innerHTML = "**Please enter the amount";
          return false;
        }
      }
    }
    if(radio_2==true)
    {
      var val = document.getElementById('donate3').value;
      if(val=='')
      {
        document.getElementById('err4').innerHTML = "**Please enter the amount";
        return false;
      }
    }
    if(radio_3==true)
    {
      var val = document.getElementById('donate4').value;
      if(val=='')
      {
        document.getElementById('err5').innerHTML = "**Please enter the amount";
        return false;
      }
    }
    if(radio_4==true)
    {
      var radio_13 = document.getElementById('radio_13').checked;
      var radio_14 = document.getElementById('radio_14').checked;
      var radio_15 = document.getElementById('radio_15').checked;
      var radio_16 = document.getElementById('radio_16').checked;
      console.log(radio_13);
      console.log(radio_14);
      console.log(radio_15);
      console.log(radio_16);
      if(radio_13==false && radio_14==false && radio_15==false && radio_16==false)
      {
        document.getElementById('err6').innerHTML = "**Please select a radio button";
        return false;
      }
      if(radio_16==true)
      {
        var val = document.getElementById('other3').value;
        if(val=='')
        {
          document.getElementById('err7').innerHTML = "**Please enter the amount";
          return false;
        }
      }
    }
}