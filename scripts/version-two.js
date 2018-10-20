"use strict";

// Creates Address Book Object
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
    // Adds the contact to array
    add(info) {
        this.contacts.push(info);
    }
    // Deletes from array
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    // Loads contacts
    display() {
        // Loops through the "contacts" array and adds all contacts to the contactRow container.
        const container = document.querySelector(".contactRow");
        container.innerHTML = "";

        this.contacts.forEach(contact => {
            //This will create a new contact card //
            let newContact = document.createElement("div");
            newContact.classList.add("contact");
            newContact.innerHTML =
                `<p>` + `Name: ${contact.name}` + `</p>` +
                `<p>` + `Email: ${contact.email}` + `</p>` +
                `<p>` + `Phone: ${contact.phone}` + `</p>` +
                `<p>` + `Relation: ${contact.relation}` + `</p>` +
                `<div class="trashCan-circle">` +
                `<svg class="trashCan" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">` +
                `<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />` +
                `<path d="M0 0h24v24H0z" fill="none" />` + `</svg>` +
                `</div>` +
                `<div class="clearfix">` + `</div>`;
            container.appendChild(newContact);

        });
        // Adds a click event to all trashCan-circle elements
        let trashIcon = document
            .querySelectorAll(".trashCan-circle");
        // for each of the icons, will add the delete method (passing through the value of i for and index) and display method (to refresh the screen with updated contacts).
        for (let i = 0; i < trashIcon.length; i++) {
            trashIcon[i].addEventListener("click", () => {
                addressBook.deleteAt(i);
                addressBook.display();
            }, false);
        };
    }
}

// Initializes New Address Book
const addressBook = new AddressBook();

//Establishes Contact object
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

function clearFields() {


};


// Adds listener to "add" button. On click, inputs will be added to contacts array as a new contact object.
document
    .querySelector(".addBtn")
    .addEventListener("click", () => {
        const inputs = document.querySelectorAll(".address-input");
        let name = inputs[0].value;
        let email = inputs[1].value;
        let phone = inputs[2].value;
        let relation = inputs[3].value;
        addressBook.add(new Contact(name, email, phone, relation));
        // Clears input values
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        inputs[3].value = "";
        addressBook.display();
    });




// Will load contacts as soon as page is loaded.
window.onload = addressBook.display();