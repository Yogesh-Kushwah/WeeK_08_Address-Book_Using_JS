class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
        if (!/^[a-zA-Z0-9\s]{4,}$/.test(address)) throw new Error("Invalid Address");
        if (!/^[a-zA-Z\s]{4,}$/.test(city)) throw new Error("Invalid City");
        if (!/^[a-zA-Z\s]{4,}$/.test(state)) throw new Error("Invalid State");
        if (!/^\d{6}$/.test(zip)) throw new Error("Invalid Zip Code");
        if (!/^\d{10}$/.test(phone)) throw new Error("Invalid Phone Number");
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email");

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }
}

class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        let isDuplicate = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (isDuplicate) {
            console.log(`Error: Contact ${contact.firstName} ${contact.lastName} already exists in '${this.name}' Address Book`);
            return;
        }
        this.contacts.push(contact);
        console.log(`Contact added successfully to '${this.name}' Address Book`);
    }

    findContactsByCity(city) {
        return this.contacts.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    }

    findContactsByState(state) {
        return this.contacts.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    }

    countContactsByCity() {
        return this.contacts.reduce((countMap, contact) => {
            countMap[contact.city] = (countMap[contact.city] || 0) + 1;
            return countMap;
        }, {});
    }

    countContactsByState() {
        return this.contacts.reduce((countMap, contact) => {
            countMap[contact.state] = (countMap[contact.state] || 0) + 1;
            return countMap;
        }, {});
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
        console.log("\nContacts sorted by Name:");
        this.viewContacts();
    }

    // 🔹 Sort Contacts by City
    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("\nContacts sorted by City:");
        this.viewContacts();
    }

    // 🔹 Sort Contacts by State
    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("\nContacts sorted by State:");
        this.viewContacts();
    }

    // 🔹 Sort Contacts by Zip Code
    sortContactsByZip() {
        this.contacts.sort((a, b) => a.zip - b.zip);
        console.log("\nContacts sorted by Zip Code:");
        this.viewContacts();
    }

    viewContacts() {
        console.log(`\nAddress Book: ${this.name}`);
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.toString()}`);
        });
    }
}

// Creating Address Book
const addressBook = new AddressBook("Personal");

// Adding Contacts
addressBook.addContact(new Contact("Adarsh", "Sharma", "123 Street", "Bhopal", "Madhya Pradesh", "462001", "9876543210", "adarsh.sharma@example.com"));
addressBook.addContact(new Contact("Dipanshu", "Verma", "456 Avenue", "Indore", "Madhya Pradesh", "452001", "8765432109", "dipanshu.verma@example.com"));
addressBook.addContact(new Contact("Purvansh", "Singh", "789 Road", "Gwalior", "Madhya Pradesh", "474001", "7654321098", "purvansh.singh@example.com"));
addressBook.addContact(new Contact("Abhishek", "Mishra", "101 Highway", "Jabalpur", "Madhya Pradesh", "482001", "6543210987", "abhishek.mishra@example.com"));
addressBook.addContact(new Contact("Rahul", "Joshi", "333 Lane", "Pune", "Maharashtra", "411001", "7656789876", "rahul.joshi@example.com"));

// Searching contacts by City
console.log("\nSearching for contacts in 'Bhopal':");
console.log(addressBook.findContactsByCity("Bhopal").map(contact => `${contact.firstName} ${contact.lastName}`));

// Searching contacts by State
console.log("\nSearching for contacts in 'Madhya Pradesh':");
console.log(addressBook.findContactsByState("Madhya Pradesh").map(contact => `${contact.firstName} ${contact.lastName}`));

// Counting contacts by City
console.log("\nNumber of contacts by city:", addressBook.countContactsByCity());

// Counting contacts by State
console.log("\nNumber of contacts by state:", addressBook.countContactsByState());

// Sorting contacts alphabetically by Name
addressBook.sortContactsByName();

// Sorting contacts by City
addressBook.sortContactsByCity();

// Sorting contacts by State
addressBook.sortContactsByState();

// Sorting contacts by Zip Code
addressBook.sortContactsByZip();
