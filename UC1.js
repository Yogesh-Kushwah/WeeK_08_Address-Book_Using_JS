class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
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
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    viewContacts() {
        console.log("Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
        });
    }
}

// Creating an Address Book Instance
const addressBook = new AddressBook();

// Adding Contacts
addressBook.addContact(new Contact("John", "Doe", "123 Street", "NYC", "NY", "10001", "1234567890", "john@example.com"));
addressBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "LA", "CA", "90001", "9876543210", "jane@example.com"));

// Viewing Contacts
addressBook.viewContacts();
