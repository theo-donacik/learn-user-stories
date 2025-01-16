import { Bank } from '../src/banks';

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// scenario 2: unsuccessful account creation due to customer being below 18

try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// User story #2

// Senario 1: succssful deposit
bank.deposit(1234567890, 1000)
//acc = bank.findAccountById(1234567890)
if(accounts[0].balance = 6000) {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}

// Senario 2: unsuccssful deposit due to bad id number
try {
    bank.deposit(6480973476, 1000) 
    console.log('Scenario 2 failed');
}
catch {
    console.log('Scenario 2 passed');
}

// Senario 3: unsuccssful deposit due to bad deposit value 
try {
    bank.deposit(1234567890, -1000) 
    console.log('Scenario 2 failed');
}
catch {
    console.log('Scenario 2 passed');
}

// User story #3

// Senario 1: succssful withdrawal
bank.deposit(1234567890, 2000)
//acc = bank.findAccountById(1234567890)
if(accounts[0].balance = 4000) {
    console.log('Scenario 1 passed');
}
else {
    console.log('Scenario 1 failed');
}

// Senario 2: unsuccssful withdrawal due to bad id number
try {
    bank.deposit(6480973476, 1000) 
    console.log('Scenario 2 failed');
}
catch {
    console.log('Scenario 2 passed');
}

// Senario 3: unsuccssful deposit due to bad withdrawal value 
try {
    bank.deposit(1234567890, -1000) 
    console.log('Scenario 2 failed');
}
catch {
    console.log('Scenario 2 passed');
}
