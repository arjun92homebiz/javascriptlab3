"use strict";

class contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class addressBook {
    constructor() {
        this.contact = [new contact(
            "Victor VonDoom", "drdoomruletheworld@gmail.com", "231-234-7856", "ally"),
            new contact ("Lex Luthor", "lexluthordominatetheglobe@outlook.com", "432-876-3763", "competitor"
        )];
    }
    add(info) {
        this.contact.push(info);
    }
    deleteAt(index) {
        this.contact.splice(index, 1);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(
            `Name: ${this.contacts[i].name}, 
            Email: ${this.contacts[i].email}, 
            Phone: ${this.contacts[i].phone}, 
            Relation: ${this.contacts[i].relation}`);
        }
    }
}

const book = new addressBook();

while (true) {
    let choice = prompt("Add, Remove, Print, Quit?");
    if (choice === "Quit") {
        console.log("Goodbye.");
        break;
    } else if (choice === "Print") {
        book.print("Print");
    } else if (choice === "Delete") {
        book.deleteAt(prompt("Index to delete?"));
    } else if (choice === "Add") {
        book.add(new contact(
            prompt("Enter a name."),
            prompt("Enter an email."),
            prompt("Enter a phone number."),
            prompt("Enter a relation.")
        ));
    }
}