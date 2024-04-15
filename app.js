#! usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 6231;
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    }
]);
// consloe.log(pinEntered.pin)
if (pinEntered.pin === pinNumber) {
    let atmQuestion = await inquirer.prompt([
        {
            name: "account type",
            message: "select your account type",
            type: "list",
            choices: [
                "Current Account",
                "saving Account",
            ]
        },
        {
            name: "transMethod",
            message: "slect your transaction method",
            type: "list",
            choices: [
                "Cash Withdrawal",
                "fast Cash"
            ]
        }
    ]);
    if (atmQuestion.transMethod == "Cash Withdrawal") {
        let cashwithdrawalAccount = await inquirer.prompt([
            {
                name: "withdrawal",
                message: "Enter the ammount you went to withdrawal",
                type: "number",
            }
        ]);
        // Greater then or equals to operator
        if (totalBalance >= cashwithdrawalAccount.withdrawal) {
            totalBalance -= cashwithdrawalAccount.withdrawal; //totalBalance = totalBalance -cashwithdrawalAccount
            console.log(`Your Total Balance is ${totalBalance}`);
        }
        else
            (console.log(`Insufficent Balance`));
    }
    else {
        let fastCashAccount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the you went to withdrawal",
                type: "list",
                choices: [
                    "1000",
                    "5000",
                    "7000"
                ]
            }
        ]);
        if (totalBalance >= fastCashAccount.fastCash) {
            totalBalance -= fastCashAccount.fastCash; //totalBalance = totalBalance -cashwithdrawalAccount
            console.log(`Your Total Balance is :${totalBalance}`);
        }
        else
            (console.log('Insufficent Balance'));
    }
}
