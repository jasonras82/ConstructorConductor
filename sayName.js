//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var me = new Person('Jason', 31);
var wife = new Person('Brittany', 27);
var daughter = new Person('Lyla', 0.85);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
  alert(this.name);
};
