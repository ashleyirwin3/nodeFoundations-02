#!/usr/bin/env node


const first = 'Jane'; // const
const second = 'Doe'; // const

// object literal shorthand
const myName = { first, second } //const

const nodeCheer = ({first, second}) => { // destructuring assignment
  let name = `${first} ${second}`.toUpperCase(); // string template literal
  [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
    let conj = 'aeiofhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`
    console.log(`Gimmmie ${conj} ${letter.toLowerCase()}!`); // string template literals again
  });
  console.log(`What's that spell?\n${name}!`);
};

nodeCheer(myName);
