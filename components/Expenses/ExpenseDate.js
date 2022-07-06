import React from "react";
import styled from "styled-components";
const ExpenseDate = (data) => {
	const month = data.date.toLocaleString("en-US", { month: "long" });
	const day = data.date.toLocaleString("en-US", { day: "2-digit" });
	const year = data.date.getFullYear();
	return (
		<Wrapper>
			<div className="expense-date">
				<div className="expense-date__month">{month}</div>
				<div className="expense-date__year">{year}</div>
				<div className="expense-date__day">{day}</div>
			</div>
		</Wrapper>
	);
};

export default ExpenseDate;

const Wrapper = styled.div`
	.expense-date {
		display: flex;
		flex-direction: column;
		width: 5.5rem;
		height: 5.5rem;
		border: 1px solid #ececec;
		background-color: #2a2a2a;
		color: white;
		border-radius: 12px;
		align-items: center;
		justify-content: center;
	}

	.expense-date__month {
		font-size: 0.75rem;
		font-weight: bold;
	}

	.expense-date__year {
		font-size: 0.75rem;
	}

	.expense-date__day {
		font-size: 1.5rem;
		font-weight: bold;
	}
`;
