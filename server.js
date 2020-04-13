/*
Stretch To Do: 
Refactor this file to listen for arguments from the command line.
If the command line argument is "user", console.log the userRender.
If the command line argument is "todo", console.log the todoRender.
*/

const userTemplate = require('./templates/user-template');

const userObject = {
  username: 'jsmith',
  firstName: 'Jane',
  lastName: 'Smith',
  dateJoined: '2019-01-01'
};

const userRender = userTemplate(userObject);
console.log(userRender);

// const todoTemplate = require('./templates/todo-template');

// const todoObject = {
//   username: 'jsmith',
//   todos: [
//     { id: 1, task: 'go shopping' },
//     { id: 2, task: 'walk the dog' },
//     { id: 3, task: 'take out the garbage' }
//   ]
// };

// const todoRender = todoTemplate(todoObject);
// console.log(todoRender);
