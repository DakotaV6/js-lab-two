"use strict";

// 3. Add a display method to the AddressBook. This method must update the DOM to display all the contacts from the AddressBook.
// 4. Call display when the page first loads to show the contacts.
// 5. Create a delete button next to each contact, clicking this button will call the deleteAt method on the AddressBook and then call display to update the DOM.
// 6. Create a form on the page. When the form is submitted, call the add method on the AddressBook and then call display to update the DOM.

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
    add(info) {
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    display() {
        // Loops through the "contacts" array and adds all contacts to the contactRow container.
        const container = document.querySelector(".contactRow");
        container.innerHTML = "";

        this.contacts.forEach(contact => {
            let newContact = document.createElement("div");
            newContact.classList.add("contact");
            newContact.innerHTML =
                `<p class="name">` + `Name: ${contact.name}` + `</p>` +
                `<p class="email">` + `Email: ${contact.email}` + `</p>` +
                `<p class="phone">` + `Phone: ${contact.phone}` + `</p>` +
                `<p class="relation">` + `Relation: ${contact.relation}` + `</p>` +
                `<div class="trashCan-circle">` +
                `<svg class="trashCan" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">` +
                `<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />` +
                `<path d="M0 0h24v24H0z" fill="none" />` + `</svg>` +
                `</div>` +
                `<div class="clearfix">` + `</div>`;
            container.appendChild(newContact);

        });
        let trashIcon = document
            .querySelectorAll(".trashCan-circle");
        for (let i = 0; i < trashIcon.length; i++) {
            trashIcon[i].addEventListener("click", () => {
                console.log("I've been clicked!")
            }, false);
        };
    }
}

// Initializes New Address Book
const addressBook = new AddressBook();

//Establishes Contact
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

// Adds listener to "add" button. On click, inputs will be added to contacts array as a new contact.
document
    .querySelector(".addBtn")
    .addEventListener("click", () => {
        const inputs = document.querySelectorAll(".address-input");
        let name = inputs[0].value;
        let email = inputs[1].value;
        let phone = inputs[2].value;
        let relation = inputs[3].value;
        addressBook.add(new Contact(name, email, phone, relation));
        addressBook.display();
        console.log(addressBook);
    });

window.onload = addressBook.display();






