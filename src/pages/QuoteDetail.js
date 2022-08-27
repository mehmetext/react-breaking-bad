import { useParams, Navigate } from "react-router-dom";
import { useQuotes } from "../store/quotes";

export default function QuoteDetail() {
	const { id } = useParams();
	const { quotes } = useQuotes();

	const quote = quotes.find((q) => q.quote_id === +id);

	if (!quote) {
		return <Navigate to="/quotes" />;
	}

	return <div>{JSON.stringify(quote, null, 2)}</div>;
}
