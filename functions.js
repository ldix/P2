

var array = [];
var isArmstrong = function(num) {
	"use strict";
	
	num = String(num);
	
	for (var i = 0 ; i < num.length; ++i) {
		var arm = Math.pow(num[i], num.length);
		array.push(arm);
	

	};
	var total = 0;
	for (var i = 0; i < array.length; ++i) {
		total += array[i];

	};

	if(total == num) {
		console.log("Is an armstrong number.");
		array.length = 0;
<<<<<<< HEAD
		return ("Is an armstrong number.")
=======
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205

	}
		else {
			console.log("Is not an armstrong number.");
			array.length = 0;
<<<<<<< HEAD
			return ("Is not an armstrong number.")
=======
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205


		
	}

}


var num;
var array = [];
var yes = "";
var str = "";
var allArmstrongs = function() {
	"use strict";
for (var i = 1; i < 100000; ++i){

	num = String(i);
	
	for (var j = 0 ; j < num.length; ++j) {
		var arm = Math.pow(num[j], num.length);
		array.push(arm);
	

	};
	var total = 0;
	for (var k = 0; k < array.length; ++k) {
		total += array[k];

	};

	if(total == num) {
		yes += num +", ";
		array.length = 0;

	}
		else {
	
			array.length = 0;}
}


	yes = yes.substring(0, yes.length - 2);
<<<<<<< HEAD
	return(yes);
=======
	console.log(yes);
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205
	yes = "";
}



var str 
var allSubstring1 = function(s) {
		"use strict";
	s = String(s);
	str = ""
	for (var i = 0; i < s.length; ++i) {
        for (var j = i + 1; j <= s.length; ++j) {
           str += s.substring(i,j) + ",";
        }
        
    }
<<<<<<< HEAD
	return(str);
=======
	console.log(str);
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205
};

var ss
var str = [];
var allSubstring2 = function(s) {
	"use strict";
	s = String(s);
	
	for (var i = 0; i < s.length; ++i) {
        for (var j = i + 1; j <= s.length; ++j) {
           ss = ""
           ss = s.substring(i,j);
           str.push(ss)
        }
        
    }
<<<<<<< HEAD
	return(str);
=======
	console.log(str);
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205
};

var str
var maxWord = function(s) {
	"use strict";
	s = String(s);
	str = s.split(" ");
	var max = 0;
	var word = "";
	for (var i = 0; i < str.length; i++) {
        if (max < str[i].length) {
            max = str[i].length;
            word = str[i];
        }
    }
<<<<<<< HEAD
return(word);
=======
console.log(word);
>>>>>>> 49b896b16e94740f780c840ed4745078c2777205
}