class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validation checks
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
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        try {
            this.contacts.push(contact);
            console.log(` Contact added successfully to '${this.name}' Address Book!`);
        } catch (error) {
            console.error(" Error:", error.message);
        }
    }

    viewContacts() {
        console.log(` Address Book: ${this.name}`);
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
        });
    }
}

class AddressBookManager {
    constructor() {
        this.addressBooks = [];
    }

    createAddressBook(name) {
        this.addressBooks.push(new AddressBook(name));
        console.log(` New Address Book '${name}' created successfully!`);
    }

    getAddressBook(name) {
        return this.addressBooks.find(book => book.name === name);
    }

    viewAllAddressBooks() {
        console.log(" Available Address Books:");
        this.addressBooks.forEach((book, index) => {
            console.log(`${index + 1}. ${book.name} (${book.contacts.length} contacts)`);
        });
    }
}

// Creating Address Book Manager Instance
const addressBookManager = new AddressBookManager();

// Creating Multiple Address Books
addressBookManager.createAddressBook("Personal");
addressBookManager.createAddressBook("Work");

// Getting Specific Address Book and Adding Contacts
const personalBook = addressBookManager.getAddressBook("Personal");
personalBook.addContact(new Contact("John", "Doe", "123 Street", "New York", "New York", "100001", "1234567890", "john.doe@example.com"));
personalBook.addContact(new Contact("Jane", "Smith", "456 Avenue", "Los Angeles", "California", "900001", "9876543210", "jane.smith@example.com"));

// Getting Work Address Book and Adding Contacts
const workBook = addressBookManager.getAddressBook("Work");
workBook.addContact(new Contact("Alice", "Johnson", "789 Blvd", "San Francisco", "California", "94101", "1122334455", "alice.johnson@work.com"));

// Viewing All Address Books
addressBookManager.viewAllAddressBooks();


personalBook.viewContacts();
workBook.viewContacts();
