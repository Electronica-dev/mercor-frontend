import Card from "./Card"
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toDocards, onProgressCards, completedCards } from "../cards";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;

  const { source, destination } = result;
  console.log('result', result);

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (destination.droppableId === 'completed') {
      removed.completed = "true"
    } else {
      removed.completed = "false"
    }

    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1);

    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}

export default function List({ cardList }) {

  const columnsFromBackend =
  {
    'todo': {
      name: 'To Do',
      colour: "bg-[#5030E5]",
      lineColour: "border-[#5030E5]",
      items: toDocards
    },
    'onprogress': {
      name: 'On Progress',
      colour: "bg-[#FFA500]",
      lineColour: "border-[#FFA500]",
      items: onProgressCards
    },
    'completed': {
      name: 'Completed',
      colour: "bg-[#76A5EA]",
      lineColour: "border-[#8BC48A]",
      items: completedCards
    }
  }
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <>
      <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <div className='flex flex-col h-[40vh] xl:h-[55vh] 2xl:h-[60vh] w-[32.5%] bg-[#F5F5F5] p-4'>
                    <div className='flex flex-row items-center'>
                      <span className={`rounded-full ${column.colour} w-2 h-2 mr-2`}></span>
                      <div className='mr-4'>
                        {column.name}
                      </div>
                      <div className='rounded-full w-[20px] h-[20px] bg-[#E0E0E0] mr-auto'>
                        <div className='text-center align-middle leading-[20px] text-[#625F6D]'>
                          {column.items.length}
                        </div>
                      </div>
                      <button>
                        <img src="add-purple.svg" alt="add" width={"24px"} height={"24px"} />
                      </button>
                    </div>
                    <div className={`border-[1px] ${column.lineColour} my-4`}></div>
                    <div className='flex flex-col overflow-y-auto [&>*]:mb-4 min-h-full'
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                    {column.items.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: 'none',
                                  ...provided.draggableProps.style
                                }}
                              >
                                <Card
                                  importance={item.importance}
                                  completed={item.completed}
                                  title={item.title}
                                  textDescription={item.textDescription}
                                  imageDescription={item.imageDescription}
                                  comments={item.comments}
                                  files={item.files}
                                  assignedTo={item.assignedTo}
                                />
                              </div>
                            )
                          }}
                        </Draggable>
                      )
                    })}
                  {provided.placeholder}
                  </div>
                  </div>
                )
              }}
            </Droppable>
          )
        })}
      </DragDropContext>
    </>
  )
}