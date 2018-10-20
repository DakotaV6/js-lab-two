"use strict";

// Creating Address Book
class AddressBook {
    constructor() {
        this.contacts = [
            {
                name: "Xander",
                email: "x@gmail.com",
                phone: "111-111-1111",
                relation: "Rando"
            },
            {
                name: "Poppy",
                email: "p@gmail.com",
                phone: "222-222-2222",
                relation: "Family"
            },
            {
                name: "Yoko",
                email: "y@gmail.com",
                phone: "333-333-3333",
                relation: "Friend"
            }
        ];
    }
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        this.contacts.forEach(person => {
            console.log(`Name: ${person.name} | Email: ${person.email} | Phone: ${person.phone} | Relation: ${person.relation}`);
        })
    }
}

// Establishes Contact
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

// Initializes Address Book to variable
const addressBook = new AddressBook();

while (true) {
    let choice = prompt(`Would you like to add, delete, print, or quit?`);
    if (choice.toLowerCase() === "add") {
        let name = prompt("Enter a name for the contact, please");
        let email = prompt("Please enter the contact's email.");
        let phone = prompt("Enter phone number.");
        let relation = prompt("What is your relation to the new contact?");
        addressBook.add(new Contact(name, email, phone, relation));
    } else if (choice.toLowerCase() === "delete") {
        let number = prompt("At what index would you like to delete?");
        addressBook.deleteAt(number);
    } else if (choice.toLowerCase() === "print") {
        addressBook.print();
    } else {
        console.log("See you l8r.")
        break;
    }
}