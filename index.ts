#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold("\n#####################################################"));
console.log(chalk.bold("====================================================="));
console.log(chalk.bold("\tWelcome To ABDULLAH Simple Calculator"));
console.log(chalk.bold("====================================================="));
console.log(chalk.bold("#####################################################"));
console.log("\n");

const Choose = await inquirer.prompt([{
	type: "list",
	name: "choose",
	message: chalk.bold.hex("#ffffff")("Select Calculation Type"),
	choices: ["SimpleCalculation", "PercentageCalculation"]
}])

if (Choose.choose == "PercentageCalculation") {
	const Persenatge = await inquirer.prompt([{
		type: "number",
		name: "totalMarke",
		message: chalk.bold.hex("#FF7900")("Enter your Total Markes")
	},
	{
		type: "number",
		name: "obtainMarke",
		message: chalk.bold.hex("#FF7900")("Enter your Obtained Markes")
	}])

	const percentageCalculation: number = Math.round((Persenatge.obtainMarke / Persenatge.totalMarke) * 100);

	if (percentageCalculation >= 90) {
		console.log(chalk.bold.hex("#66FF00")(`Your percentage is : ${percentageCalculation}%, and your Grade is : A+`));
	} else if (percentageCalculation >= 80) {
		console.log(chalk.bold.hex("#66FF00")(`Your percentage is : ${percentageCalculation}%, and your Grade is : A`));
	} else if (percentageCalculation >= 70) {
		console.log(chalk.bold.hex("#fdee00")(`Your percentage is : ${percentageCalculation}%, and your Grade is : B`));
	} else if (percentageCalculation >= 60) {
		console.log(chalk.bold.hex("#fdee00")(`Your percentage is : ${percentageCalculation}%, and your Grade is : C`));
	} else if (percentageCalculation >= 50) {
		console.log(chalk.bold.hex("#fdee00")(`Your percentage is : ${percentageCalculation}%, and your Grade is : D`));
	} else {
		console.log(chalk.bold.hex("#DC1818")(`Your percentage is : ${percentageCalculation}%, and your Grade is : F`));
	}

	console.log(chalk.bold("\n\n=========================================================="));
	console.log(chalk.bold("\t\tGood BY Come Back Later"));
	console.log(chalk.bold("=========================================================="));
}

if (Choose.choose == "SimpleCalculation") {
	const question = await inquirer.prompt([{
		type: "number",
		name: "num1",
		message: chalk.bold.hex("#fcba04")("Enter Your First Number :")
	},
	{
		type: "list",
		name: "operator",
		message: chalk.bold.hex("#ca5310")("Choose Operator"),
		choices: ["+", "-", "x", "/", "^"]

	},
	{
		type: "number",
		name: "num2",
		message: chalk.bold.hex("#fcba04")("Enter Your Secound Number :")

	}])

	if (question.operator == "+") {
		console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 + question.num2));
	} else if (question.operator == "-") {
		console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 - question.num2));
	} else if (question.operator == "x") {
		console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 * question.num2));
	} else if (question.operator == "/") {
		console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 / question.num2));
	} else if (question.operator == "^") {
		console.log(chalk.bold.hex("#ffffff")("Your Answer is :"), chalk.bold.hex("#ffffff")(question.num1 ** question.num2));
	} else {
		
	};
}