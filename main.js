
  var drop = document.getElementById("dropDown")
  var go1 = document.getElementById("disappear1")
  var go2 = document.getElementById("disappear2")
  var go3 = document.getElementById("disappear3")


function dropdown(e){
    if(e == 1){
      if(go1.style.display =="none"){
        go1.style = "display:block"
      }else{
      go1.style = "display:none"
      }

    }else if(e == 2){
      if(go2.style.display =="none"){
        go2.style = "display:block"
      }else{
      go2.style = "display:none"
      }
    }else if(e == 3){
      if(go3.style.display =="none"){
        go3.style = "display:block"
      }else{
      go3.style = "display:none"
      }
    }


  }
  
