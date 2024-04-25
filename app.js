const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./customer.js');
let customerName;
let customerAge;
let id;


//-----------------------------------------------------------//


// Connect to Mongo
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
};

// Disconnect from Mongo
const disconnect = async () => {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

// Create a new Customer
const createCustomer = async () => {
    const customerData = {
        name: customerName,
        age: customerAge,
    };
    const customer = await Customer.create(customerData);
    console.log();
    console.log("New Customer Entered:", customer)
};

// View all Customers
const viewAllCustomers = async () => {
    const customers = await Customer.find({})
    console.log();
    console.log("Showing All Customers:", customers);
};

// Update a customer
const updateCustomer = async () => {
    const customer = await Customer.findByIdAndUpdate(id, {updatedInfo});
    const updatedInfo = {
        name: customerName,
        age: customerAge,
    };
    console.log();
    console.log("The New Updates:", customer)
};

// Delete a Customer
const deleteCustomer = async () => {
    const customer = await Customer.findByIdAndDelete(id);
    console.log();
    console.log("Customer Has Been Deleted:", customer)
};

//Launch New Customer Function
const createCustomerQueries = async () => {
    console.log(`Queries running.`);
    await createCustomer();
};

//Launch View All Customers function
const viewAllCustomersQueries = async () => {
    console.log(`Queries running.`);
    await viewAllCustomers();
};

//Launch Update a Customer function
const updateCustomerQueries = async () => {
    console.log(`Queries running.`);
    await updateCustomer();
};

//Launch Delete a Customer function
const deleteCustomerQueries = async () => {
    console.log(`Queries running.`);
    await deleteCustomer();
};

//Launch Quit/Disconnect function
const disconnectQueries = async () => {
    console.log(`Queries running.`);
    await disconnect();
};



//--------------------------------------------------//



// Introduction to CRM
const showIntro = () => {
    console.clear();
    const introMessage = `Welcome to the CRM. It's a pleasure to be able to assit you today!
    
Press "Enter"`;

    console.log(introMessage);
    prompt(); // This will pause the screen until the user selects the Enter command.
};

showIntro();

const userIntroduction = () => {
    console.clear();
    console.log();
    const username = prompt('What shall I call you? ');

    console.clear();
    const greeting = prompt(`Welcome, ${username}, Please enjoy your time today`);
};

userIntroduction();



//-------------------------------------------------------------//


// CRM Actions
const action = () => {
    const choices = `What would you like to do?

 1. Create a customer \n
 2. View all customers \n
 3. Update a customer \n
 4. Delete a customer \n
 5. Quit \n`

    console.log(choices)
    const answer = prompt(`Please select a choice `);
    console.clear();
    connect();


    if (answer === `1`) {
        console.clear(); customerName = prompt("Enter the indiviual's name: "); console.log(); customerAge = prompt("Enter the indiviual's age: "); createCustomerQueries();
    } else if (answer === `2`) {
        console.clear(); viewAllCustomersQueries();
    } else if (answer === `3`) {
        console.clear(); id = prompt(`To Update, Please Enter the Customer's ID: `); customerName = prompt(`What should the Customer's name be updated to? `); customerAge = prompt(`What should the Customer's age be updated to? `); updateCustomerQueries();
    } else if (answer === `4`) {
        console.clear(); id = prompt(`To Delete, Please Enter the Customer's ID: `);  deleteCustomerQueries();
    } else if (answer === `5`) {
        console.clear(); disconnectQueries();
    } else {
        console.log();
        console.log('Please select an answer choice using your number pad from the above choices.');
        console.log();
        action();
    };
}

action();