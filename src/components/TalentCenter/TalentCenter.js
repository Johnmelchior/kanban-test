
import fetchCandidates from './../../store/Candidates/FetchCandidates';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import BoardColumns from "./BoardColumns";
import Lanes from './../Lanes/Lanes';
import { DragDropContext } from 'react-beautiful-dnd';
import "./talentCenter.scss";

const TalentCenter = () => {
	

	const talentState = useSelector(state => state);
	console.log("talentState", talentState);
	
	const dispatch = useDispatch();
	// const [users, setUsers] = useState([]);
	const [columns, setColumns] = useState(BoardColumns);

	useEffect(() => {
		dispatch(fetchCandidates());
	}, [dispatch]);

	useEffect(() => {
		setColumns(talentState.columns);
	},[talentState.columns])


	const handleDragEnd = result => {
		const { destination, source } = result;

		console.log("result", result);
		console.log("columns", columns);

		// Check destination is null. If user drop the card outside the drop container
		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index) {
			return;
		}

		const column = columns[source.droppableId];

		const newMembers = Array.from(column.members);
		newMembers.splice(source.index, 1);
		newMembers.splice(destination.index, 0, column.members[source.index]);
		console.log("new columns", newMembers);

		const newColumns = {
			...column,
			members: newMembers,
		}

		const newState = {
			...columns,
			[newColumns.id]: newColumns

		}

		console.log("old columns", columns);
		console.log("new columns", newColumns);
		console.log("New State", newState);
		setColumns(newState);
	}

	return (
		<DragDropContext
			onDragEnd={handleDragEnd}
		>
			<div className="talent_center">
				<div className="columns">
					{talentState.columnOrder.map(laneId => {
						// talentState.colums.length > 0 && {
						// 	let lane = talentState ?.columns[laneId];
						// 	// for (let user of users) {
						// 	// 	if (user.laneId === lane.id) {
						// 	// 		if(!lane.members.includes(user)){
						// 	// 			lane.members.push(user);
						// 	// 		}
						// 	// 	}
						// 	// }
						// 	return(
						// 	<Lanes key = { talentState.columns[laneId].id } column = { lane } members = { talentState.columns[laneId].members } />
						// )
						// }
						if (talentState.columns && Object.keys(talentState.columns).length) {
							let lane = talentState?.columns[laneId];
							return (
								<Lanes key={talentState.columns[laneId].id} column={lane} members={talentState.columns[laneId].members} />
							)
						}
					})}
				</div>
			</div>
		</DragDropContext>
	)
}

export default TalentCenter;