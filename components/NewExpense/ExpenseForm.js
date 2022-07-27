import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<Wrapper>
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							min="2019-01-01"
							max="2022-12-31"
							value={enteredDate}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default ExpenseForm;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 1rem;
	flex-direction: column;
	.new-expense__control label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}

	.new-expense__control input {
		font: inherit;
		padding: 0.5rem;

		border-radius: 6px;
		border: 1px solid #ccc;
		width: 20rem;
		max-width: 100%;
	}

	.new-expense__actions {
		text-align: right;
	}
`;
