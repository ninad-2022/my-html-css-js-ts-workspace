var num = 100;
for (var i = 2; i <= num; i++) {
  var isPrime = true;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}
