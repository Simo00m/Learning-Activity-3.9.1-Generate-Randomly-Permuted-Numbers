function getInputNumbers() {
  let totalNumbers = prompt("Enter the total number of unique inputs:", "");
  totalNumbers = parseInt(totalNumbers, 10);
  if (isNaN(totalNumbers) || totalNumbers <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let inputs = new Set();
  while (inputs.size < totalNumbers) {
    let num = prompt("Enter a unique number:", "");
    num = parseInt(num, 10);
    if (isNaN(num)) {
      alert("Please enter a valid number.");
      continue;
    }
    if (inputs.has(num)) {
      alert("Number must be unique. Try again.");
      continue;
    }
    inputs.add(num);
  }
  return Array.from(inputs);
}
function randomPermuteMe(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
  }
  return arr;
}

window.onload = function() {
  numArray = getInputNumbers();
  numbers.textContent = numArray.join(", ");
}

btn.onclick = function() {
  let permutedArray = randomPermuteMe([...numArray]); // Use a copy to permute
  result.textContent = permutedArray.join(", ");
}
