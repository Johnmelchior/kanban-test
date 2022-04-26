
import Card from './../Card/card';
import { Droppable } from 'react-beautiful-dnd';

const Lanes = ({ column, members }) => {
	let cardUsers;
	if (members !== undefined || members !== null) {
		cardUsers = members.map((user, index) => {
			return <Card key={index} name={`${user.name.first} ${user.name.last}`} email={user.email} index={index}></Card>
		})
	}

	return (
		<Droppable droppableId={column.id}>
			{provided => (
				<div className="lanes"
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<div className="title">{column.title} - {members.length}</div>

					<div className="members">
						{cardUsers}
					</div>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default Lanes;