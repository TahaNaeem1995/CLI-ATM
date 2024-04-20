import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdrawl", "check balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns === "withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =, -=, +=
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is: + myBalance)");
    }
}
