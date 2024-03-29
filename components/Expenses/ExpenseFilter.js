import React from "react";
import styled from "styled-components";

const ExpenseFilter = (props) => {
	const handleChangeH = (e) => {
		props.onChangeFilter(e.target.value);
	};
	return (
		<Wrapper>
			<div className="expenses-filter">
				<div className="expenses-filter__control">
					<label>Filter by year</label>
					<select value={props.selected} name="year" onChange={handleChangeH}>
						<option value="2022">2022</option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
					</select>
				</div>
			</div>
		</Wrapper>
	);
};

export default ExpenseFilter;

const Wrapper = styled.div`
	.expenses-filter {
		color: white;
		padding: 0 1rem;
	}

	.expenses-filter__control {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		margin: 1rem 0;
	}

	.expenses-filter label {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.expenses-filter select {
		font: inherit;
		padding: 0.5rem 3rem;
		font-weight: bold;
		border-radius: 6px;
	}
`;
