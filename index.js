
var sum_total = 0;

if (process.argv.length > 2) {
  let value = process.argv[2];
  var number_arrays = value.split("");
  console.log("Array length is : " + number_arrays.length);
  var array_index = 0;

  while (array_index < number_arrays.length) {
    var current_value = number_arrays[array_index];
    if (current_value === "-") {
      console.log("Current value is negative operator");
      console.log(current_value);
      var next_value = parseInt(number_arrays[array_index + 1]);
      sum_total -= next_value;
      console.log("Current array index is: " + array_index);
      array_index ++;
      console.log("Current total is :" + sum_total);
    }
    else {
      console.log("Current value is not negative");
      console.log(current_value);
      var number = parseInt(current_value);
      sum_total += number;
      console.log("Current array index is: " + array_index);
      array_index ++;
      console.log("Current total is :" + sum_total);
    }
  }
  console.log("Total is: " + sum_total);
}
