function getFullname(firstname, surname, useFormalName) {
  let message;
  if (!firstname || !surname) {
    console.log("Firstname and Surname fields should be filled!");
    return;
  }

  if (useFormalName) {
    message = `Lord ${firstname} ${surname}`;
  } else {
    message = `${firstname} ${surname}`;
  }

  return message;
}

const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2 = getFullname("Benjamin", "", false);

if (fullname1) {
  console.log("fullname1 is: " + fullname1);
}

if (fullname2) {
  console.log("fullname2 is: " + fullname2);
}

// To fix the gender issue I would add another parameter to
//  the function for gender and based on the gender
//  would change the message. like this:
// for gender true is Male and false is Female
// if(gender){
//     message= `Lord ${firstname} ${surname}`
// }else{
//     message= `Madame ${firstname} ${surname}`
// }
