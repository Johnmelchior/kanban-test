import "./search.scss";
import { useState } from "react";

const Search = () => {
	const [searchVal, setSearchVal] = useState("");

	const handleChange = (e) => {
		console.log(e.target.value);
		setSearchVal(e.target.value);
	}
	return (
		<div className="search">
			<input type="text" name="search" onChange={(e) => handleChange(e)} value={searchVal} />
		</div>
	)
}

export default Search;