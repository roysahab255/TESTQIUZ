 //console.log("vinay");
//alert("hi");

//window.onload = function() {
	//show(0);
//}

let questions = [
 
 {
	 id: 1,
     question: " PQRS is a rectangle. T is a point on PQ such that RTQ is an isosceles triangle and PT = 5QT. If the area of triangle RTQ is 12√𝟑 sq.cm, then the area of the rectangle PQRS (in sq. cm) is:",  
     answer: "144√3",
     options: [
     "144√3",
     "164√3",
    "142√3",
     "142",
    ]
 },
 
 {
	 id: 2,
 question: "If each side of an equilateral triangle is 12 cm, then its altitude is equal to:",
 answer: "6√𝟑 cm",
 options:[
  "3√𝟔 cm", 
  "3√𝟐 cm ",
  "6√𝟑 cm" ,
  "6√𝟐 cm",
 ]
 },
 
 {
	 id:3,
 question: " In a ABC, angle BAC = 900. If BC = 25cm, then what is length of the median AD?",
 answer: "12.5 cm",
 options: [
  "10 cm",
  "24 cm",
  "14.5cm", 
  "12.5cm",
  ]
 },
 
 {
  id:4,
 question: " 4.A chord of the larger among two concentric circles is of length 10 cm and it is tangent to the smaller circle. What is the area (in cm2) of the annular portion between the two circles?",
 answer: "25π",
 options: [
   "5π",
   "46",
   "25π",
  "10π",
 ]
 },
 
{
	 id: 5,
 question: "I is the incentre of ABC. If BIC = 1080, then A = ?",
  answer: "360",
  options:[
  
   "540",
   "810",
   "720",
   "360",
  ] 
}
];




//function submitForm(e) {
	//e.preventDefault();
	
	//let	name = document.forms["welcomes_forms"]["names"].value;

  //sessionStorage.setItem("names",name);
 //location.href = "qui.html";
   //console.log(nam);
 //}
 
 let question_count = 0;
 let points = 0;
 
 window.onload = function() {
	show(question_count);
};

 
 function next() {
	 
	 
	// let user_answer = document.querySelector("li.option.active").innerHTML;
	 //IF QUESTION IS THE LAST THEN REDIRCET QUESTION
	 
	 if(question_count == questions.length - 1){
		 sessionStorage.setItem("time", time);
		 clearInterval(mytime);
		 location.href = "end.html";
    }
		 console.log(question_count);
		 
		 
    let user_answer = document.querySelector("li.option.active").innerHTML;
	 
	 if(user_answer == questions[question_count].answer){
		 
	points += 10;
	sessionStorage.setItem("points", points);
}
	  console.log(points);
		
	question_count++;
	show(question_count);
 }
 
 
 function show(count){
	 let question = document.getElementById("questions");
	 let [first, second, third, fourth] = questions[count].options;
	 
	 
	question.innerHTML = `
	<h2>Q${question_count+1}. ${questions[count].question}</h2>
	<ul class = "option_group">
   <li class = "option"> ${ first}</li>
   <li class = "option">${second}</li>
   <li class = "option">${third}</li>
   <li class = "option">${fourth}</li>
</ul>
 
`;
toggleActive();
 }
 
 function toggleActive(){
	  let option = document.querySelectorAll("li.option");
	  
	  for(let i=0; i < option.length; i++){
		  option[i].onclick = function() {
			  for(let i=0; i < option.length; i++){
				  if(option[i].classList.contains("active")){
					  option[i].classList.remove("active");
				  }
			  }
				  option[i].classList.add("active");
			  };
	  }
 }
 
 
 
 