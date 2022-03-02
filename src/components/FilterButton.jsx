import React from 'react';
function FilterButton(props) {
  return (
    <div className="filterBtn" onClick={() => props.setFilter(props.name)}>
      {props.name}
    </div>
  );
}
export default FilterButton;
