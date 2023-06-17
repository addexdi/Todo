import React, { useState } from "react";

import "../styles/action.css";

const List = (props) => {
  const [view, setView] = useState(false);

  const addListIcon = function (item) {
    if (item.name === "My Day List") {
      return <i class="ri-sun-line"></i>;
    } else if (item.name === "Important List") {
      return <i class="ri-star-line"></i>;
    } else if (item.name === "Long Plan") {
      return <i class="ri-calendar-2-line"></i>;
    } else if (item.name === "Tasks") {
      return <i class="ri-list-check"></i>;
    } else {
      return <i class="ri-menu-add-fill"></i>;
    }
  };

  return (
    <div
      className={props.clas}
      key={props.item.id}
      a-key={props.item.id}
      onClick={(e) => {
        props.activeListFunction(
          e,
          props.newList
        );
        props.assignTaskFunction(props.newList);
      }}
    >
      {addListIcon(props.item)} {props.item.name}
      <i
        class="ri-delete-bin-6-line del__btn"
        onClick={() => {
          setView(!view);
        }}
      ></i>
      {view && (
        <div className="prompt">
          Are you sure:{" "}
          <div className="select__btn">
            <button
              b-key={props.newList.indexOf(
                props.item
              )}
              onClick={(e) =>
                props.deleteListFunction(
                  e,
                  props.newList
                )
              }
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
  );
};

export default List;
