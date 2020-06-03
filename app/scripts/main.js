function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName
	this.showData = function(){
			console.log(`Hello ${this.firstName} ${this.lastName}`)
	}
}
let newP = new Person('Ivan', 'Ivanov');
newP.showData();
