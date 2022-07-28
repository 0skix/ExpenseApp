import React from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";
const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return (
			<Wrapper>
				<h2 className="expenses-list__fallback">Found no expenses</h2>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<ul className="expense-list">
				{props.items.map((expense) => {
					return (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					);
				})}
			</ul>
		</Wrapper>
	);
};

export default ExpensesList;

const Wrapper = styled.div`
	.expenses-list {
		list-style: none;
		padding: 0;
	}

	.expenses-list__fallback {
		color: white;
		text-align: center;
	}
`;
