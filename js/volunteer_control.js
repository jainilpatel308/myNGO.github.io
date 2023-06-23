function hide(group_number){
    if(group_number==1){
      document.getElementById("education").style.display = 'none';
    }
    if(group_number==2){
      document.getElementById("covid").style.display = 'none';
    }
    if(group_number==3){
      document.getElementById("tree").style.display = 'none';
    }
  }
  function show(group_number){
    if(group_number==1){
      document.getElementById("education").style.display = 'inline-block';
      hide(2);
      hide(3);
    }
    if(group_number==2){
      document.getElementById("covid").style.display = 'inline-block';
      hide(1);
      hide(3);
    }
    if(group_number==3){
      document.getElementById("tree").style.display = 'inline-block';
      hide(1);
      hide(2);
    }
  }