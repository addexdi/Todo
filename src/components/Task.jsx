import React, { useState } from "react";

import "../styles/detail.css";

const Task = (props) => {
  const [view, setView] = useState(false);

  return (
    <div class="tasks--1">
      <div class="task">
        <p class="task--detail">
          {props.detail.duty}
        </p>
        <p class="time">
          <i class="ri-calendar-event-fill"></i>{" "}
          {props.datefunc(props.detail.date)}
        </p>
      </div>
      <div className="to__important">
        <i
          class="ri-delete-bin-6-line"
          onClick={() => setView(!view)}
        ></i>
        {view && (
          <div className="prompt">
            Are you sure:{" "}
            <div className="select__btn">
              <button
                b-key={props.parent.indexOf(
                  props.detail
                )}
                onClick={(e) => {
                  props.delFunc(e, props.list);
                  setView(!view);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => setView(!view)}
              >
                No
              </button>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
