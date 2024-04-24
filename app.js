const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Customer = require('./customer.js');



const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

const createCustomer = async () => {
    const customerData = {
        name: `${individual}`,
        age: `${age}`,
    };
    const customer = await Customer.create(customerData);
    console.log("New Customer", customer)
};


const customerQueries = async () => {
    console.log(`Queries running.`);
    await createCustomer();
}

















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
    const greeting = prompt(`Welcome, ${username}, Please enjoy you're time today`);
};

userIntroduction();

const action = () => {
    const choices = `What would you like to do?

 1. Create a customer \n
 2. View all customers \n
 3. Update a customer \n
 4. Delete a customer \n
 5. quit \n
 `
    console.log(choices)
    const answer = prompt(`Please select a choice `);
    console.clear();


    if (choices.toLowerCase() === 1 || "create a customer" || `1. create a customer`) {
        console.clear(); const individual = prompt("Enter the indiviual's name "); console.log(); const age = prompt("Enter the indiviual's age "); customerQueries();
    } else if (action.toLowerCase() === "select a bot") {
        console.clear(), selectBot();
    } else {
        console.log('Please give your Bot a valid command.');
        console.log();
        getActions()
    };
}

action();














connect();