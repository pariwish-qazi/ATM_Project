#! /usr/bin/env node
import inquirer from "inquirer";
let theBalance = 80000;
let myPin = 123;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }]);
if (pinAnswer.pin == myPin) {
    console.log("Correct pin");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "Select any one option.",
            choices: ["Check Balance", "Withdraw"]
        }]);
    console.log(operationAns);
    if (operationAns.operation == "Withdraw") {
        let withdrawAmount = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter amount you want to withdraw"
            }]);
        theBalance -= withdrawAmount.amount;
        console.log("Your remaining balance is" + theBalance);
    }
    else if (operationAns.operation == "Check Balance") {
        console.log("Your remaining balance is" + theBalance);
    }
}
else {
    console.log("Wrong pin");
}
