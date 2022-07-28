import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";
const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<Wrapper>
			<div className="chart">
				{props.dataPoints.map((dataPoint) => (
					<ChartBar
						key={dataPoint.label}
						value={dataPoint.value}
						maxValue={totalMaximum}
						label={dataPoint.label}
					/>
				))}
			</div>
		</Wrapper>
	);
};

export default Chart;
const Wrapper = styled.div`
	.chart {
		padding: 1rem;
		border-radius: 12px;
		background-color: #f8dfff;
		text-align: center;
		display: flex;
		justify-content: space-around;
		height: 10rem;
	}
`;
