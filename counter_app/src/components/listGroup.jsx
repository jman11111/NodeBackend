import React from "react";
//text property and value property are string that represent fields on passed in items, element[valueProperty] is equivalent to element.valueProperty
const ListGroup = (props) => {
  const {
    items,
    selectedItem,
    onItemSelect,
    textProperty,
    valueProperty,
  } = props;
  return (
    <ul className="list-group">
      {items.map((element) => {
        return (
          <li
            onClick={() => onItemSelect(element)}
            key={element[valueProperty]}
            className={
              element === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {element[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
