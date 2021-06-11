function myRandom() {
    var x = Math.floor((Math.random() * 100) + 1);
    document.getElementById("demo").innerHTML = x;
    var number = document.getElementById("demo").innerHTML;
    if(number==1){
      number.style.color="green";
    }
    else{
      number.style.color="yellow";
    }
    
  }

 