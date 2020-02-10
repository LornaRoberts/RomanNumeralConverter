function convertToRoman(num) {
let newStr="";
let newStr2="";
let thousandsCount=0;
let hundredsString="";
let hundredsString1="";
let hundredCount=0;
let tensCount=0;
let tensString="";
let tensString1="";
let unitCount=0;
let unitString="";
let unitString1="";
let thousands = Math.floor(num /1000);
let remainder= num % 1000;
let hundreds= Math.floor(remainder/100);
let remainder2= remainder % 100;
let tens= Math.floor(remainder2/10);
let units= remainder2 % 10;


if (thousands){
    for (let i=0; i<thousands; i++){
     thousandsCount++;
    }
}

if (thousandsCount==1){
  newStr2= newStr.concat("M");
}else if (thousandsCount==2){
  newStr2= newStr.concat("MM");
}else if (thousandsCount==3){
  newStr2= newStr.concat("MMM");
}

if (hundreds){
  for (let j=0; j<hundreds; j++){
    hundredCount++;
    }
}
     if(hundredCount==1){
       hundredsString1= hundredsString.concat("C");
    }else if(hundredCount==2){
       hundredsString1= hundredsString.concat("CC");
       }else if(hundredCount==3){
         hundredsString1= hundredsString.concat("CCC");
       }else if(hundredCount==4){
         hundredsString1=hundredsString.concat("CD");
       }else if(hundredCount==5){
         hundredsString1=hundredsString.concat("D")
       }else if(hundredCount==6){
         hundredsString1=hundredsString.concat("DC")
       }else if(hundredCount==7){
         hundredsString1=hundredsString.concat("DCC");
       }else if(hundredCount==8){
         hundredsString1=hundredsString.concat("DCCC");
       }else if (hundredCount==9){
         hundredsString1=hundredsString.concat("CM");
       }
     
    
  


if (tens){
  for (let k=0; k< tens; k++){
    tensCount++;
  }
}
  if(tensCount===1){
    tensString1=tensString.concat("X");
  }else if(tensCount===2){
    tensString1=tensString.concat("XX");
  }else if(tensCount===3){
    tensString1=tensString.concat("XXX");
  }else if(tensCount===4){
    tensString1=tensString.concat("XL");
  }else if(tensCount===5){
    tensString1=tensString.concat("L");
  }else if(tensCount===6){
    tensString1=tensString.concat("LX");
  }else if(tensCount===7){
    tensString1=tensString.concat("LXX");
  }else if (tensCount===8){
    tensString1=tensString.concat("LXXX");
  }else if (tensCount===9){
    tensString1=tensString.concat("XC");
  }

if (units){
  for (let m=0; m<units; m++){
 unitCount++;
  }
}

if (unitCount==1){
  unitString1=unitString.concat("I");
}else if (unitCount==2){
  unitString1=unitString.concat("II");
}else if (unitCount==3){
  unitString1=unitString.concat("III");
}else if (unitCount==4){
  unitString1=unitString.concat("IV");
}else if (unitCount==5){
  unitString1=unitString.concat("V");
}else if (unitCount==6){
  unitString1=unitString.concat("VI");
}else if (unitCount==7){
  unitString1=unitString.concat("VII");
}else if (unitCount==8){
  unitString1=unitString.concat("VIII");
}else if (unitCount==9){
  unitString1=unitString.concat("IX");
}

let final=newStr2.concat(hundredsString1);
let final1= final.concat(tensString1);
let total= final1.concat(unitString1);

console.log(total);


}


convertToRoman(3999);