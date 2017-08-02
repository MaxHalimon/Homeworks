"use strict";
	var countQuest = 0;
	var plus = 0;
	var test_start = 0;
	var strRes;

	//Массив вопросов
				// var questions = ["Hello","Дом","Дерево","Homeland"];
				// localStorage.questions = JSON.stringify(questions);
				// console.log(localStorage.questions);

				//Массив Вопросов
				var questionsT = {
				  0: "Hello",
				  1: "Дом",
				  2: "Дерево",
				  3: "Homeland"
				}
				//Массив Ответов
				var number1T = {
				  0: "Как дела",
				  1: "House",
				  2: "House",
				  3: "Природа"
				}
				var number2T = {
				  0: "Привет",
				  1: "Cat",
				  2: "Door",
				  3: "Родина"
				}
				var number3T = {
				  0: "Пока",
				  1: "Dog",
				  2: "Wall",
				  3: "Остров"
				}
				var number4T = {
				  0: "Hello",
				  1: "Tree",
				  2: "Tree",
				  3: "Планета"
				}
				//Массив правильных ответов
				var answerT = {
				  0: 1,
				  1: 0,
				  2: 3,
				  3: 1
				}

				localStorage.setItem('questionsT', JSON.stringify(questionsT));
				var questions = {}
				if (localStorage.getItem("questionsT")) {
				  questions = JSON.parse(localStorage.getItem("questionsT"));
				}
				localStorage.setItem('number1T', JSON.stringify(number1T));
				var number1 = {}
				if (localStorage.getItem("number1T")) {
				  number1 = JSON.parse(localStorage.getItem("number1T"));
				}
				localStorage.setItem('number2T', JSON.stringify(number2T));
				var number2 = {}
				if (localStorage.getItem("number2T")) {
				  number2 = JSON.parse(localStorage.getItem("number2T"));
				}
				localStorage.setItem('number3T', JSON.stringify(number3T));
				var number3 = {}
				if (localStorage.getItem("number3T")) {
				  number3 = JSON.parse(localStorage.getItem("number3T"));
				}
				localStorage.setItem('number4T', JSON.stringify(number4T));
				var number4 = {}
				if (localStorage.getItem("number4T")) {
				  number4 = JSON.parse(localStorage.getItem("number4T"));
				}
				localStorage.setItem('answerT', JSON.stringify(answerT));
				var answer = {}
				if (localStorage.getItem("answerT")) {
				  answer = JSON.parse(localStorage.getItem("answerT"));
				}
				
				//Массивы вариантов ответов
			// var number1 = ["Как дела","House","House","Природа"];	
			// var number2 = ["Привет","Cat","Door","Родина"];	
			// var number3 = ["Пока","Dog","Wall","Остров"];	
			// var number4 = ["Дом","Tree","Tree","Планета"];
				//Массивы вариантов ответов
				// var number1 = ["Как дела","House","House"];
				// localStorage.number1 = JSON.stringify(number1);	
				// var number2 = ["Привет","Cat","Door"];
				// localStorage.number2 = JSON.stringify(number2);	
				// var number3 = ["Пока","Dog","Wall"];
				// localStorage.number3 = JSON.stringify(number3);	
				// var number4 = ["Дом","Tree","Tree"];
				// localStorage.number4 = JSON.stringify(number4);

						//Массив вопросов
			// var questions = ["Hello","Дом","Дерево","Homeland"];
	
	function check(num){
		localStorage.setItem('num', JSON.stringify(num));
		if(num == 4){ 
			
			document.getElementById('area').style.display='block'; //
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline';
			document.getElementById('result').style.display='inline';

			if(test_start == 0) {
				document.getElementById('question').innerHTML=questions[countQuest];
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];
				
					//Массив правильных ответов
				// var answer = [1,0,3,1];
				
				test_start = 1;	
			}
		}
		else{
				
			
				//Массив правильных ответов
			// var answer = [1,0,3,1];
			
			if(num == answer[countQuest]) {
				plus++;
				strRes = 'У Вас ' + plus + ' правильных ответа!';
				document.getElementById('textRes').innerHTML = ""; 
				document.getElementById('textRes').innerHTML = strRes;
		};
			var counter = 0;

			for (var key in questions) {
			  counter++;
			}
			if(counter - 1> countQuest){

				countQuest++;
				
				document.getElementById('question').innerHTML=questions[countQuest];
			
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];

			}
			else{ 
			
				document.getElementById('area').style.display='none';
				document.getElementById('myModal').style.visibility='visible';
				// alert('У Вас ' + plus + ' правильных ответа!');

			}
		}
	}
	
	
	window.onload = function(){
		document.getElementById('result').onclick = function() {
		document.getElementById('myModal').style.visibility='visible';
		// document.getElementById('textRes').textContent = strRes;
		};
		document.getElementById('close').onclick = function() {
				document.getElementById('myModal').style.visibility='hidden';
		};
	}
