#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const question = await inquirer.prompt([{
	type: "number",
	name: "num1",
	message: chalk.bold.hex("#fcba04")("Enter Your First Number :")
},
{
	type: "number",
	name: "num2",
	message: chalk.bold.hex("#fcba04")("Enter Your Secound Number :")
},
{
	type: "list",
	name: "operator",
	message: chalk.bold.hex("#ca5310")("Choose Operator"),
	choices: ["Addition", "Subtraction", "Multiplication", "Division"]
}])

if (question.operator == "Addition") {
	console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 + question.num2));
} else if (question.operator == "Subtraction") {
	console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 - question.num2));
} else if (question.operator == "Multiplication") {
	console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 * question.num2));
} else if (question.operator == "Division") {
	console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 / question.num2));
} else {
	console.log(chalk.bold.italic.red("Enter Number Please"));

};

