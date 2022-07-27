import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	const [Expenses, setExpenses] = useState("");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter(() => {});
	return (
		<Wrapper>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
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
