class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validation checks
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

    updateContact(updatedData) {
        // Update and validate new details
        Object.keys(updatedData).forEach(key => {
            if (updatedData[key]) {
                if (key === "firstName" && !/^[A-Z][a-zA-Z]{2,}$/.test(updatedData[key])) throw new Error("Invalid First Name");
                if (key === "lastName" && !/^[A-Z][a-zA-Z]{2,}$/.test(updatedData[key])) throw new Error("Invalid Last Name");
                if (key === "address" && !/^[a-zA-Z0-9\s]{4,}$/.test(updatedData[key])) throw new Error("Invalid Address");
                if (key === "city" && !/^[a-zA-Z\s]{4,}$/.test(updatedData[key])) throw new Error("Invalid City");
                if (key === "state" && !/^[a-zA-Z\s]{4,}$/.test(updatedData[key])) throw new Error("Invalid State");
                if (key === "zip" && !/^\d{6}$/.test(updatedData[key])) throw new Error("Invalid Zip Code");
                if (key === "phone" && !/^\d{10}$/.test(updatedData[key])) throw new Error("Invalid Phone Number");
                if (key === "email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(updatedData[key])) throw new Error("Invalid Email");

                this[key] = updatedData[key];
            }
        });
        console.log("Contact updated successfully");
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
            console.log(`Contact added successfully to '${this.name}' Address Book`);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    editContact(firstName, lastName, updatedData) {
        let contact = this.findContactByName(firstName, lastName);
        if (contact) {
            try {
                contact.updateContact(updatedData);
            } catch (error) {
                console.error("Error updating contact:", error.message);
            }
        } else {
            console.log("Contact not found");
        }
    }

    deleteContact(firstName, lastName) {
        let index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact ${firstName} ${lastName} deleted successfully`);
        } else {
            console.log("Contact not found");
        }
    }

    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }

    viewContacts() {
        console.log(`Address Book: ${this.name}`);
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}, ${contact.phone}, ${contact.email}`);
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

// Viewing Contacts
addressBook.viewContacts();

// Displaying Contact Count
console.log(`\nTotal Contacts in Address Book: ${addressBook.getContactCount()}`);

// Editing Existing Contact
console.log("\nEditing Adarsh Sharma's Contact");
addressBook.editContact("Adarsh", "Sharma", { phone: "9998887776", email: "adarsh.new@example.com", city: "Ujjain" });

// Viewing Updated Contacts
addressBook.viewContacts();

// Deleting a Contact
console.log("\nDeleting Dipanshu Verma's Contact");
addressBook.deleteContact("Dipanshu", "Verma");

// Viewing Contacts After Deletion
addressBook.viewContacts();

// Displaying Contact Count After Deletion
console.log(`\nTotal Contacts in Address Book: ${addressBook.getContactCount()}`);
