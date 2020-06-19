import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {
        props.deleteFeature(props.feature.id, props.feature.price)
        props.setReload(!props.reload)
      }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
