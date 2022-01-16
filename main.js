const pointsInput = document.querySelectorAll('.point-input');
const submitBtn = document.getElementById('submit-btn');
const subjectCredits = document.querySelectorAll('.sub-credits');
const outputEl = document.querySelector('.output-val')
const percent = document.querySelector('.cgpaper')
const fc1 = document.querySelector(".failCount")


let pointsArr = [];
let creditsArr = [];
let sgpaArr = [];
let AlphatoPointsArr = [];

// function to get the points and store it in the array
function getPoints() {
   pointsInput.forEach(sub => {
      pointsArr.push((sub.value));
   });
   console.log(pointsArr);
   for(let i = 0; i<pointsArr.length;i++)
   { 
      if(pointsArr[i]=='A'|| pointsArr[i]=='a')
      {
         AlphatoPointsArr[i] = 9;
      }
      if(pointsArr[i]=='S'|| pointsArr[i]=='s')
      {
         AlphatoPointsArr[i] = 10;
      }
      if(pointsArr[i]=='B'|| pointsArr[i]=='b')
      {
         AlphatoPointsArr[i] = 8;
      }
      if(pointsArr[i]=='C'|| pointsArr[i]=='c')
      {
         AlphatoPointsArr[i] = 7;
      }
      if(pointsArr[i]=='D'|| pointsArr[i]=='d')
      {
         AlphatoPointsArr[i] = 6;
      }
      if(pointsArr[i]=='E'|| pointsArr[i]=='e')
      {
         AlphatoPointsArr[i] = 5;
      }
      if(pointsArr[i]=='F'|| pointsArr[i]=='f')
      {
         AlphatoPointsArr[i] = 0;
      }
      if(pointsArr[i]=='X'|| pointsArr[i]=='x')
      {
         AlphatoPointsArr[i] = 0;
      }
      
   }

   getCredits();
   
   calculateCGPA(creditsArr, AlphatoPointsArr);
}

// funtion to get all the credits

function getCredits() {
   subjectCredits.forEach(sub => {
      creditsArr.push(parseFloat(sub.innerText))
   })

   console.log(creditsArr)
}

// Logic here
let c =0
let a = 0
let g = 0
let sgpa = 0
let f = 0
// function to calculate the CGPA
function calculateCGPA(credits, points) {
   

   for(let i = 0; i<credits.length;i++)
   {
      c = credits[i]; //c = 2, 3
      
      a +=c; // a = 2, 5
      g = points[i]; // g = 4, 6
      if(g < 5)
      {
         f += 1 ;
      }
      sgpa += c*g; //sgpa = 0 + 2*4 + 3*6
   }
   outputEl.innerText = `SGPA = ${(sgpa / a).toFixed(2)}`;
   percent.innerText = `percentage = ${(((sgpa / a)-0.75)*10).toFixed(2)}`;
   if(f >= 1)
   {
      fc1.innerText = ` **** You Failed in = ${f} subject(s) ****`;
      console.log(f)
   }
   else{ fc1.innerText=`*******CONGRATULATIONS******`}

   
  
}

   


submitBtn.addEventListener('click', getPoints);
