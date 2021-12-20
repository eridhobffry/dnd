import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"

const Name = styled.h3`
    padding: 10px;
    background-color: #F3F6F8;
    width: 80%;
    font-size: 44px;
    border-radius: 0px 20px 20px 0px
`

const Card = ({ name, id, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <Name
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {name}
                </Name>
            )}
        </Draggable>
    )
}

export default Card
