/**
 * Created by Harshal on 1/3/2016.
 */

var Employee = function(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.manager = null;
}

Employee.prototype.printName = function() {
    console.log(this.firstName + " " + this.lastName);
};

Employee.prototype.setManager = function(employee) {
    this.manager = employee;
};

Employee.prototype.printManager = function() {
    this.manager.printName();
};

var emp1 = new Employee("Carlos", "Leiva", 1);
emp1.printName();

var emp2 = new Employee("Bob", "Smith", 2);
emp2.setManager(emp1);
emp2.printName();
emp2.printManager();

var emp3 = new Employee("Charlie", "Brown", 3);
emp3.setManager(emp1);
emp3.printName();
emp3.printManager();