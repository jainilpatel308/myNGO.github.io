function hide(group_number){
    if(group_number==1){
      document.getElementById("education").style.display = 'none';
    }
    if(group_number==2){
      document.getElementById("training").style.display = 'none';
    }
    if(group_number==3){
      document.getElementById("disaster_relief").style.display = 'none';
    }
    if(group_number==4){
      document.getElementById("covid_relief").style.display = 'none';
    }
    if(group_number==5){
      document.getElementById("child_healthcare").style.display = 'none';
    }
  }
  function show(group_number){
    if(group_number==1){
      document.getElementById("education").style.display = 'inline-block';
      hide(2);
      hide(3);
      hide(4);
      hide(5);
    }
    if(group_number==2){
      document.getElementById("training").style.display = 'inline-block';
      hide(1);
      hide(3);
      hide(4);
      hide(5);
    }
    if(group_number==3){
      document.getElementById("disaster_relief").style.display = 'inline-block';
      hide(1);
      hide(2);
      hide(4);
      hide(5);
    }
    if(group_number==4){
      document.getElementById("covid_relief").style.display = 'inline-block';
      hide(1);
      hide(2);
      hide(3);
      hide(5);
    }
    if(group_number==5){
      document.getElementById("child_healthcare").style.display = 'inline-block';
      hide(1);
      hide(2);
      hide(3);
      hide(4);
    }
  }