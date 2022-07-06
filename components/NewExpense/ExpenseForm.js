import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [expenseData, setExpenseData] = useState({});

	return (
		<Wrapper>
			<Formik
				initialValues={{ title: "", amount: "", date: "" }}
				onSubmit={(values, { resetForm }) => {
					setEnteredTitle(values.title);
					setEnteredAmount(values.amount);
					setEnteredDate(values.date);
					setExpenseData({
						title: enteredTitle,
						amount: enteredAmount,
						date: new Date(enteredDate),
					});
					console.log(expenseData);
					props.onSaveExpenseData(expenseData);
					resetForm();
				}}
			>
				{({ isSubmitting }) => (
					<Form className="new-expense__control">
						<label>Title</label>
						<Field type="title" name="title" />
						<label>Date</label>
						<Field type="date" name="date" />
						<label>Amount</label>
						<Field type="amount" name="amount" />
						<div className="new-expense__actions">
							<button type="submit">Add Expense</button>
						</div>
					</Form>
				)}
			</Formik>
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
