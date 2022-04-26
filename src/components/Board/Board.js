import Search from "../Search/search";
import { useSelector } from "react-redux";

const Board = () => {

	const users = useSelector(state => state.users);


  return (
		<div className="board">
			<Search />
		</div>
	)
}

export default Board;