var monkes = 999;
var monkeclicker = 0;
var monkeclickercost = 10;
var mps = 0;

  function changeMonkes() {
    monkes += 1;
    var num = monkes;
    var commas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    monkes = num ;
}


 


window.onload = function() {
  setInterval(function() {
    mps2 = mps/10;
    monkes += mps2;
    if (monkes < 1000000) {
      document.getElementById("monkes").innerHTML =
        Math.round(monkes) + " monkeys";
    } else {
      if (monkes > 999999) {
      document.getElementById("monkes").innerHTML =
        Math.round((monkes/1000000)* 1000 ) / 1000 + " million monkeys";
    
        if (monkes > 999999999) {
        document.getElementById("monkes").innerHTML =
          Math.round((monkes/1000000000)* 1000 ) / 1000 + " billion monkeys";
        
          if (monkes > 999999999999) {
            document.getElementById("monkes").innerHTML =
             Math.round((monkes/1000000000000)* 1000 ) / 1000 + " trillion monkeys";
      }
      }
      }
    }
    document.getElementById("mps").innerHTML =
    "per second: " + mps;
  }, 100);
}


  function changeClicker() {
    if (monkes > monkeclickercost) {
    monkeclicker += 1 ;
    monkes -= monkeclickercost ;
    monkeclickercost = Math.round(10 * Math.pow(1.15 ,monkeclicker));
    mps += 1;
    document.getElementById("monkeclicker").innerHTML =
    "monkey clickers " + monkeclicker;
    
    document.getElementById("clickercost").innerHTML =
    "cost: " + monkeclickercost;
    }
  }
  
  function clickerInfo() {
    if (monkeclicker > 0) {
    document.getElementById("clickercost").innerHTML =
      "cost: " + monkeclickercost;
    } else {
    document.getElementById("clickercost").innerHTML =
      "???";
    }
    var x = document.getElementById('clickercost');
    x.style.display = 'block';
  }
  
  function hideclickerInfo() {
    var x = document.getElementById('clickercost');
    x.style.display = 'none';
}
