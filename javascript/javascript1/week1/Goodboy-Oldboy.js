const dogYearOfBirth= 2023;
const yearFuture = 2045;
const dogYearCoeff = 7;

const dogYearFutureInHumanYears = yearFuture - dogYearOfBirth;

const dogYearFutureInDogYears = dogYearFutureInHumanYears*dogYearCoeff ;


let shouldShowResultInDogYears =false;


if (shouldShowResultInDogYears){
    console.log("Your dog will be "+ dogYearFutureInDogYears +" dog years old in " +yearFuture)
}
else{
    console.log("Your dog will be "+ dogYearFutureInHumanYears +" human years old in " +yearFuture)
}