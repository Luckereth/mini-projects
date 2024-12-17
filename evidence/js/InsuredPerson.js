// Definice třídy pro pojištěnce
class InsuredPerson {
    constructor(firstName, lastName, age, phone) {
        this.id = Date.now(); // Unikátní ID na základě aktuálního času
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phone = phone;
    }
}