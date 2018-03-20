
// For exercise up till bonus 1
// if (process.argv.length > 2) {
//   let value = process.argv[2];
//   var number_arrays = value.split("");
//   console.log("Array length is : " + number_arrays.length);
//   var array_index = 0;
//
//   while (array_index < number_arrays.length) {
//     var current_value = number_arrays[array_index];
//     if (current_value === "-") {
//       console.log("Current value is negative operator");
//       console.log(current_value);
//       var next_value = parseInt(number_arrays[array_index + 1]);
//       sum_total -= next_value;
//       console.log("Current array index is: " + array_index);
//       array_index += 2;
//       console.log("Current total is :" + sum_total);
//     }
//     else {
//       console.log("Current value is not negative");
//       console.log(current_value);
//       var number = parseInt(current_value);
//       sum_total += number;
//       console.log("Current array index is: " + array_index);
//       array_index ++;
//       console.log("Current total is :" + sum_total);
//     }
//   }
//   console.log("Total is: " + sum_total);
// }

// For bonus 2
if (process.argv.length > 2) {
  if (process.argv[2] === "addNumbers") {
    addNumbers();
  }
  else if (process.argv[2] === "addLetters") {
    addLetters();
  }
}

function addNumbers(){
  var sum_total = 0;

  let value = process.argv[3];
  var number_arrays = value.split("");

  var regExp = /^[0-9]*$/;
  if (regExp.test(value)) {
    console.log("Array length is : " + number_arrays.length + "\n");

    var array_index = 0;

    while (array_index < number_arrays.length) {
      var current_value = number_arrays[array_index];
      if (current_value === "-") {
        console.log("Current value is negative operator");
        var next_value = parseInt(number_arrays[array_index + 1]);
        console.log("Current value is : -" + next_value);
        sum_total -= next_value;
        console.log("Current array index is: " + array_index);
        array_index += 2;
        console.log("Current total is :" + sum_total + "\n");
      }
      else {
        console.log("Current value is not negative");
        console.log("Current value is : " + current_value);
        var number = parseInt(current_value);
        sum_total += number;
        console.log("Current array index is: " + array_index);
        array_index ++;
        console.log("Current total is :" + sum_total + "\n");
      }
    }
    console.log("Total is: " + sum_total);
  }
  else {
    console.log("SORRY, ONLY NUMBERS ALLOWED, NO LETTERS!!~~~~");
  }
}

function addLetters(){
  var sum_total = 0;

  var letters_to_add = process.argv[3];
  var letters_to_add_array = letters_to_add.split("");

  var alphabets = "abcdefghijklmnopqrstuvwxyz";
  var letters = alphabets.split("");

  for (var i = 0; i < letters_to_add_array.length; i++) {
    console.log("Current letter is : " + letters_to_add_array[i]);
    let letter_value = letters.indexOf(letters_to_add_array[i]);
    console.log("Value of letter is : " + letter_value);
    sum_total += (letter_value + 1);
  }

  console.log("Total is " + sum_total);
}
