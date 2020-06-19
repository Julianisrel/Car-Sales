import React from 'react';
import { connect } from 'react-redux'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item, idx) => (
            <AddedFeature reload={props.reload} setReload={props.setReload} deleteFeature={props.deleteFeature} key={String(item.id) + String(idx) + `${idx + item.id % 2}`} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    deleteFeature: (id, price) => dispatch({type: 'DELETE_FEATURE', payload: {id, price}})
  }
)

export default connect(null, mapDispatchToProps)(AddedFeatures);
