const learningPathway = [
  {
    day: 1,
    topic: "Foundations 1",
    content: "Introduction to JavaScript - Basic syntax, data types, variables."
  },
  {
    day: 2,
    topic: "Foundations 2",
    content: "Control Flow - Conditional statements (if-else), loops (for, while)."
  },
  {
    day: 3,
    topic: "Foundations 3",
    content: "Functions - Declaring functions, parameters, return statements."
  },
  {
    day: 4,
    topic: "Foundations 4",
    content: "Arrays - Creating arrays, accessing elements, array methods (push, pop, splice)."
  },
  {
    day: 5,
    topic: "Foundations 5",
    content: "Objects - Object literals, accessing object properties, methods."
  },
  {
    day: 6,
    topic: "DOM Manipulation 1",
    content: "Introduction to the DOM (Document Object Model) - Understanding the structure of web pages."
  },
  {
    day: 7,
    topic: "DOM Manipulation 2",
    content: "Selecting DOM Elements - Using document.getElementById, document.querySelector, etc."
  },
  {
    day: 8,
    topic: "DOM Manipulation 3",
    content: "Manipulating DOM Elements - Changing text content, styles, attributes."
  },
  {
    day: 9,
    topic: "DOM Manipulation 4",
    content: "Events - Event handling, adding event listeners."
  },
  {
    day: 10,
    topic: "DOM Manipulation 5",
    content: "DOM Manipulation Project - Create a simple interactive webpage using DOM manipulation."
  },
  {
    day: 11,
    topic: "Advanced JavaScript 1",
    content: "Scope and Closures - Understanding lexical scope, closures."
  },
  {
    day: 12,
    topic: "Advanced JavaScript 2",
    content: "ES6 Features - Arrow functions, let and const, template literals."
  },
  {
    day: 13,
    topic: "Advanced JavaScript 3",
    content: "Classes - Introduction to ES6 classes."
  },
  {
    day: 14,
    topic: "Advanced JavaScript 4",
    content: "Promises - Asynchronous JavaScript, handling asynchronous operations."
  },
  {
    day: 15,
    topic: "Advanced JavaScript 5",
    content: "Async/Await - Using async functions and await keyword for asynchronous programming."
  },
  {
    day: 16,
    topic: "Intermediate Concepts 1",
    content: "Array Methods - forEach, map, filter, reduce."
  },
  {
    day: 17,
    topic: "Intermediate Concepts 2",
    content: "Higher Order Functions - Functions that operate on other functions, like map and filter."
  },
  {
    day: 18,
    topic: "Intermediate Concepts 3",
    content: "Error Handling - try-catch blocks, throwing and catching errors."
  },
  {
    day: 19,
    topic: "Intermediate Concepts 4",
    content: "Modules - Introduction to JavaScript modules for better code organization."
  },
  {
    day: 20,
    topic: "Intermediate Concepts 5",
    content: "Local Storage - Storing data locally using localStorage."
  },
  {
    day: 21,
    topic: "Frameworks and Libraries 1",
    content: "Introduction to jQuery - Basic DOM manipulation with jQuery."
  },
  {
    day: 22,
    topic: "Frameworks and Libraries 2",
    content: "Introduction to React - Setting up a React project, understanding components."
  },
  {
    day: 23,
    topic: "Frameworks and Libraries 3",
    content: "React Components and Props - Creating components, passing data via props."
  },
  {
    day: 24,
    topic: "Frameworks and Libraries 4",
    content: "React State and Lifecycle - Managing component state, component lifecycle methods."
  },
  {
    day: 25,
    topic: "Frameworks and Libraries 5",
    content: "Introduction to Node.js - Understanding server-side JavaScript with Node.js."
  },
  {
    day: 26,
    topic: "Projects and Practice #1",
    content: "Build a To-Do List App - Practice DOM manipulation and event handling."
  },
  {
    day: 27,
    topic: "Projects and Practice #2",
    content: "Build a Weather App - Fetching data from an API and displaying it on a webpage."
  },
  {
    day: 28,
    topic: "Projects and Practice #3",
    content: "Build a Simple Game - Implement a basic game using JavaScript."
  },
  {
    day: 29,
    topic: "Projects and Practice #4",
    content: "Portfolio Website - Create a personal portfolio website using HTML, CSS, and JavaScript."
  },
  {
    day: 30,
    topic: "Projects and Practice #5",
    content: "Review and Refinement - Review concepts, refactor code, and continue practicing."
  }
];


let container = document.querySelector('.pathway .container')

learningPathway.forEach(e=>{
  let box = document.createElement('div')
  box.classList.add('card')
  box.innerHTML=`
   <div class="line"></div>
      <div class="index flex">${e.day}</div>
      <div class="text">
      <div class="day">Day ${e.day}</div>
      <div class="topic">${e.topic}</div>
      <div class="content">${e.content}</div>
  `
  container.appendChild(box)
})