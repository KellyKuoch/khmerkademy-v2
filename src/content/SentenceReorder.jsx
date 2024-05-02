import React, { useState } from "react";
import {
  DndContext,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  useSortable,
  sortableKeyboardCoordinates,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./SentenceReorder.css";

const DraggableWord = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    margin: 5,
    padding: 30,
    border: "1px solid gray",
    borderRadius: "10px",
    cursor: "grab",
    background: "white",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {id}
    </div>
  );
};

const SentenceReorder = () => {
  const reorderedWords = [
    {
      id: 1,
      initialWords: ["ខ្ញុំ  khnom", "ទេវី  Tevy", "ឈ្មោះ  chamous", "ថា  tha"],
      correctOrder: ["ខ្ញុំ  khnom", "ឈ្មោះ  chamous", "ថា  tha", "ទេវី  Tevy"],
      englishWords: "My name is Tevy.",
    },
  ];
  const firstWord = reorderedWords[0];

  const [words, setWords] = useState(firstWord.initialWords);
  const [correctOrder] = useState(firstWord.correctOrder);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setWords((currentWords) => {
        const oldIndex = currentWords.indexOf(active.id);
        const newIndex = currentWords.indexOf(over.id);
        return arrayMove(currentWords, oldIndex, newIndex);
      });
    }
  };
  const checkOrder = () => {
    if (JSON.stringify(words) === JSON.stringify(correctOrder)) {
      alert("Correct! Well done!");
    } else {
      alert("Incorrect, try again!");
    }
  };

  return (
    <div
      className="sentence-reorder-main"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h1>Reorder the Sentence</h1>

      <div className="prompt-reorder"></div>
      <div className="each-sentence-reordered">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragEnd={handleDragEnd}
        >
          {/* <div className="each-word-reorderd"> */}
          <SortableContext
            items={words}
            strategy={horizontalListSortingStrategy}
          >
            {words.map((word) => (
              <DraggableWord key={word} id={word} />
            ))}{" "}
          </SortableContext>
          {/* </div> */}
        </DndContext>
      </div>
      <button className="button-8" onClick={checkOrder}>
        Check Sentence
      </button>
    </div>
  );
};

export default SentenceReorder;
