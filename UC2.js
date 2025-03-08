class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validation Before Assigning Values
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name!");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name!");
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) throw new Error("Invalid Address!");
        if (!/^[a-zA-Z\s]{4,}$/.test(city)) throw new Error("Invalid City!");
        if (!/^[a-zA-Z\s]{4,}$/.test(state)) throw new Error("Invalid State!");
        if (!/^\d{6}$/.test(zip)) throw new Error("Invalid Zip Code!");
        if (!/^\d{10}$/.test(phone)) throw new Error("Invalid Phone Number!");
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email!");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        try {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    viewContacts() {
        console.log(" Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
        });
    }
}

// Creating an Address Book Instance
const addressBook = new AddressBook();

// Adding Valid Contacts
addressBook.addContact(new Contact("John", "Doe", "123 Street", "New York", "New York", "100001", "1234567890", "john.doe@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "Los Angeles", "California", "900001", "9876543210", "jane.smith@example.com"));

// Adding Invalid Contact (This should throw an error)
addressBook.addContact(new Contact("jo", "Doe", "12", "NY", "NY", "12345", "12345", "invalidemail"));

// Viewing Contacts
addressBook.viewContacts();
