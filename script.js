function grabInputArray() {
  //Grabing the following inputs
  let input1 = document.getElementById('arrayInput1').value;
  let input2 = document.getElementById('arrayInput2').value;
  let input3 = document.getElementById('arrayInput3').value;
  let input4 = document.getElementById('arrayInput4').value;
  let input5 = document.getElementById('arrayInput5').value;
  
  //Putting all Inputs together
  let output = []
  output.push(input1)
  output.push(input2)
  output.push(input3)
  output.push(input4)
  output.push(input5)
  
  //Converting inputs into strings
  for (let i = 0 ; i < output.length; i++) { 
    output[i] = +output[i]; 
  }
  
  
  //Showing inputs on console
  console.log(input1 + " | " + input2 + " | " + input3 + " | " + input4 + " | " + input5);
  
  //Activating Main Function
  initFunction(output);
}

function initFunction(arr) {
  
  //Variables
  let resultHTML = document.getElementById("result");
  let validCounterHTML = document.getElementById("valid");
  let failedCounterHTML = document.getElementById("failed");
  let result = [];
  let validCounter = 0;
  let failedCounter = 0;
  let numberPossZero = [];
  let numberPossOne = [];
  let numberPossTwo = [];
  let numberPossThree = [];
  let numberPossFour = [];

  const testNumbers = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  //Calculating Possibilities
  for(i = 0; i < testNumbers.length; i++) {
    numberPossZero.push(arr[0] * testNumbers[i]);
    numberPossOne.push(arr[1] * testNumbers[i]); 
    numberPossTwo.push(arr[2] * testNumbers[i]);
    numberPossThree.push(arr[3] * testNumbers[i]); 
    numberPossFour.push(arr[4] * testNumbers[i]); 
  } 


  //Calculating Result
  for (const key0 in numberPossZero) {
    const elem0 = numberPossZero[key0];
    for (const key1 in numberPossOne) {
      const elem1 = numberPossOne[key1];
      for (const key2 in numberPossTwo) {
        const elem2 = numberPossTwo[key2];
        for (const key3 in numberPossThree) {
          const elem3 = numberPossThree[key3];
          for (const key4 in numberPossFour) {
            const elem4 = numberPossFour[key4];

            if (elem0 + elem1 + elem2 + elem3 + elem4 == 100) {
              validCounter++;
              result.push(" [" + elem0 + ", " + elem1 + ", " + elem2 + ", " + elem3 + ", " + elem4 + "]  ");
            } else {
              failedCounter++;
            }
          }
        }
      }
    }
  }

  //Sending Result (Via Document and Console) 
  resultHTML.innerHTML = "Possible Combinations:" + "<span class='output'>" + result + "</span>";
  validCounterHTML.innerHTML = "Valid Combinations: " + "<span class='output'>" + validCounter + "</span>";
  failedCounterHTML.innerHTML = "Invalid Combinations: " + "<span class='output'>" + failedCounter + "</span>";
  return result;
}