function validEmail(str) {
  //your JS code here.
	  if (!str) return false;

  const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
