import { useContext } from "react";
import Expenses from "../components/Expenses/Expenses";
import { AppContext } from "../contexts/AppContext";
import NewExpense from "../components/NewExpense/NewExpense";
export default function Home() {
	const { expenses, useExpenses } = useContext(AppContext);
	const addExpenseHandler = (expense) => {
		console.log("in App.js");
		console.log(expenses);
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />;
			<Expenses items={expenses} />
		</div>
	);
}
