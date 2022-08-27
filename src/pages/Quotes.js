import { useEffect } from "react";
import Info from "../components/Info";
import Quote from "../components/Quote";
import { useQuotes } from "../store/quotes";
import { getQuotesDispatch } from "../store/storeDispatch";

export default function Quotes() {
	const { quotes, status } = useQuotes();

	useEffect(() => {
		if (status === "idle") getQuotesDispatch();
		// eslint-disable-next-line
	}, []);

	if (status === "loading") return <Info />;

	return (
		<div className="quotes">
			{quotes.map((quote) => (
				<Quote key={quotes.quote_id} quote={quote} />
			))}
		</div>
	);
}
