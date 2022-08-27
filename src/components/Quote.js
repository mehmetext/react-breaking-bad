import { Link } from "react-router-dom";

export default function Quote({ quote }) {
	return (
		<Link to={`${quote.quote_id}`}>
			<div className="quote">
				<div>"{quote.quote}"</div>
				<div className="quote-author">-{quote.author}</div>
			</div>
		</Link>
	);
}
