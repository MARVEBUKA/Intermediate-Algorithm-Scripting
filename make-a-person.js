const Person = function(first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(first, last) {
    firstName = first;
    lastName = last;
  };
};


const person = new Person('Bob', 'Ross');
console.log(person.getFirstName()); 
console.log(person.getLastName()); 
console.log(person.getFullName()); 

person.setFirstName('John');
person.setLastName('Doe');
console.log(person.getFullName());

person.setFullName('Alice', 'Smith');
console.log(person.getFullName());
