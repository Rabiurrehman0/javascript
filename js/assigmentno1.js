//Task 1 zakat:
// var zakatpercentage=0.025;
// var UserInput=prompt("Enter Your amount on which you want to calculate Zakat");
// var Result=zakatpercentage * Number(UserInput);
// alert("Your Zakat is " + Result);


// // // // Task 2 fitra:
// let familymembers=+prompt("Enter the number of your family members?");
// let fitraform=prompt("Select D way in which u give FITRA?:Press 1 for gandum.....Press 2 for jo'oo....... press 3 for khajooor.......press 4 for kishmish");
// if(fitraform=='1'){
//     console.log("Your Fitra amount according to GUNDUM is ",250*familymembers);
// }
// else if(fitraform=='2'){
//     console.log("Your Fitra amount according to JO'OO is ",450*familymembers);
// }
// else if(fitraform=='3'){
//     console.log("Your Fitra amount according to KHAJOOR is ",2100*familymembers);
// }
//  else if(fitraform=='4'){
//     console.log("Your Fitra amount according to KISHMISH is ",2800*familymembers);
// }
// else{
//     console.log("Invalid Options Entered");
// }



// //Task 3 for secret no..
// var secretNumber=3;
// // var secretNumber = Math.floor(Math.random() * 10) + 1;
// var guess = prompt("Guess the secret number between 1 and 10");
// if (guess == secretNumber) {
//   alert("Congratulations! you Read my mind");
// } else if (guess < secretNumber) {
//   alert("oopx high your thought n guess again.");
// } else {
//   alert("dont go high down down down! n guess again.");
// }

// // Task 4 for capatilixied name..
// var Name=prompt("Enter Your Name");
// Name=Name.toLowerCase()
// var firstletter=Name.slice(0,1);
// firstletter=firstletter.toUpperCase();
// var finalname=firstletter + Name.slice(1,Name.length);
// console.log(finalname);

// // Task 5 save contct name n contct no...
// var contactNumbers = [];
// var contactNames = [];
// var numContacts =+prompt("How many contacts do you want to save in console?");
// for (var i = 0; i < numContacts; i++) {
//   var uname = prompt("CONTACT NAME:");
//   var number = prompt("CONTACT NO:");
//   contactNames.push(uname);
//   contactNumbers.push(number);
// }
// console.log("Contacts Details:");
// for (var i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNumbers[i] + " **-** " + contactNames[i]);
// }

// //Task 6 product remove..
// var products = ["dairy_milk", "kit_kat", "YOU", "tobler_one", "sankers"];
// var position =+prompt("enter d position of product that u want to remove (0-" + products.length + "):");
// var removedproduct = products.splice(position - 0, 1);
// console.log("Removed product: " + removedproduct);
// console.log("Remaining products : " + products);
// console.log("remaining products : " + products.length);

// // Task 7  ask for nationality age gender.
var nationality = prompt("enter your nationality?");
if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian") {
  var gender = prompt("enter your gender?");
  var age =+prompt("enter your age?");
  if (gender.toLowerCase() === "male") {
    if (age >= 18) {
      console.log("hurryy! u grow up n now u are eligible to vote.");
    } else {
      console.log("oopx u are not eligible to vote..");
    }
  } else if (gender.toLowerCase() === "female") {
    if (age >= 18) {
      var married = prompt("r u married? ans in y & n");
      if (married.toLowerCase() === "y") {
        console.log("u are eligible to vote lady.");
      } else {
        console.log("u are not eligible to vote girl");
      }
    } else {
      console.log("u are not eligible to vote..");
    }
  }
} else {
  console.log("You are not eligible to vote..");
}



//Task 8 pakistani 15 players..
// var worldcupsquad = ["Imran Khan", "Wasim Akram", "Waqar Younis", "Javed Miandad", "Inzamam-ul-Haq","Babar Azam","Fakhar Zaman","Imam-ul-Haq","Asif Ali","Haris Sohail","Shoaib Malik","Sarfaraz Ahmed","Mohammad Amir","Wahab Riaz","Shadab Khan"]
// var finalteam = worldcupsquad.slice(0, 11);
// console.log("team that play against d india");
// for (var i = 0; i < finalteam.length; i++) {
//   console.log(i + 1 + '- ' + finalteam[i]);
// }



