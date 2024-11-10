"useclient";
import { useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../StrictModeDroppable/StrictModeDroppable";
import WidgetLayout from "../WidgetLayout";
interface WidgetContainerProps {
  children: React.ReactNode[];
}

const WidgetContainer = ({ children }: WidgetContainerProps) => {
  const [widgets, setWidgets] = useState(children);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedWidgets = Array.from(widgets);
    const [removed] = reorderedWidgets.splice(result.source.index, 1);
    reorderedWidgets.splice(result.destination.index, 0, removed);

    setWidgets(reorderedWidgets);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StrictModeDroppable
        droppableId="widget-container"
        direction="horizontal"
      >
        {(provided) => (
          <div
            className="widget-container h-[80vh] grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg shadow-lg"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {widgets.map((widget, index) => (
              <Draggable
                key={index}
                draggableId={`widget-${index}`}
                index={index}
              >
                {(provided) => (
                  // TODO 위젯 레이아웃 만들기.
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="widget-item"
                  >
                    <WidgetLayout>{widget}</WidgetLayout>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default WidgetContainer;
