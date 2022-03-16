import React from 'react';
function FilterButton({ name, setFilter }) {
  return (
    <div className="filterBtn" onClick={() => setFilter(name)}>
      {name}
    </div>
  );
}
export default FilterButton;
