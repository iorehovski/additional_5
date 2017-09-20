module.exports = function check(str, bracketsConfig) {
  var aBrakets = [];
//получаем пары скобок
  for(var i = 0; i < bracketsConfig.length; i++){
  	var patt = "";
  	for(var j = 0; j < bracketsConfig[i].length; j++){
  		patt += bracketsConfig[i][j];
  	}
  	aBrakets.push(patt);
  }
//удаляем 
  for(var i = 0; i < str.length; i++){
  	for(var j = 0; j < aBrakets.length; j++){
  	  if(str.indexOf(aBrakets[j]) >= 0){
  	  	str = str.replace(String(aBrakets[j]),'');
  	  	i--;
  	  	break;
  	  }
  	}
  }
  
  if(str.length === 0)
  	return true;
  else 
  	return false;
}
