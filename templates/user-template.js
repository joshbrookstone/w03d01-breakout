/*
To Do: Create and export a function that accepts an object as a parameter and returns a string

Expected input:
{
  username: 'jsmith',
  firstName: 'Jane',
  lastName: 'Smith',
  dateJoined: '2019-01-01'
}

Expected return value:
"<div>
  <h1>Hi Jane Smith!</h1>
  <h2>Username: jsmith</h2>
  <p>You have been a member since 2019-01-01</p>
</div>"

Note: You don't need to worry about new lines or tabs. The return string can be all on one line.
*/

const stringify = function(obj) {
  
  return `<div>
  <h1> ${obj.firstName} ${obj.lastName}</h1>
  <h2>Username: ${obj.username}</h2>
  <p>You have been a member since ${obj.dateJoined} </p>
  </div>`;

};

module.exports = {stringify};