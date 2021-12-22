import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { InitialData } from "./initial_data";
import Column from "./column";

const grid = 20;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const QuoteItem = styled.div`
  width: 80%;
  margin-bottom: ${grid}px;
  background-color: #F3F6F8;
  padding: ${grid}px;
  border-radius: 0px 20px 20px 0px;
  font-size: 30px;
  margin: 16px 0px;
  display: flex;
  justify-content: space-between;
`;

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div>
            {quote.name}
            <button>
              button to expand
            </button>
          </div>
          <span
            {...provided.dragHandleProps}
          >
            handle to drop
          </span>
        </QuoteItem>
      )}
    </Draggable>
  );
}

// const QuoteList = React.memo(function QuoteList({ quotes }) {
//   return quotes.map((quote, index) => (
//     <Quote quote={quote} index={index} key={quote.id} />
//   ));
// });

const QuoteList = ({quotes}) => {
  return quotes.map((quote, index) => (
    <Quote quote={quote} index={index} key={quote.id} />));
}

function App() {
  const [state, setState] = useState({ quotes: InitialData.category });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }
  console.log('ER:: quotes', state)
  return (
    <Column>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="message">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <QuoteList quotes={state.quotes} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Column>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
