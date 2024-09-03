'use strict';

// JS find() exercise

const guestList = require('./mockData.js').data;

// Your code here

let searchItem = prompt("Enter the first name you're looking for");


const foundPerson = guestList.find(element => element.first_name.toLowerCase() === searchItem.toLowerCase());

                                 
  if (foundPerson != undefined) {
    console.log(`Name: ${foundPerson.first_name} ${foundPerson.last_name} Birth year: ${foundPerson.birth_year}`);
  } else {
    console.log("This name was not found on the guest list.");
  }

// console.log(foundPerson);
// console.log(guestList);