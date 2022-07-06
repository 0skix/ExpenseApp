import React, { useContext } from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
	const filterChangeHandler = (selectedYear) => {
		console.log("Expenses.js");
		console.log(selectedYear);
	};
	return (
		<Wrapper>
			<Card className="expenses">
				<ExpenseFilter onChangeFilter={filterChangeHandler} />
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				></ExpenseItem>
			</Card>
		</Wrapper>
	);
};

export default Expenses;
const Wrapper = styled.div`
	.expenses {
		padding: 1rem;
		background-color: rgb(31, 31, 31);
		margin: 2rem auto;
		width: 50rem;
		max-width: 95%;
	}
`;
