import React from "react";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const diff = differenceInDays(new Date(taskObj.deadline), new Date());
  const deadlineBg = diff < 3 ? "bg-red-200" : "bg-blue-200";
  const absNumb = Math.abs(diff);


  return (
    <div className="task">
      <h3 className="text-black">{taskObj.title}</h3>
      <div className="deadline">
        
        <span className={deadlineBg}>
        son teslim: {absNumb} gün {diff > 0 ? " sonra" : " önce"}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
