import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature reload={props.reload} setReload={props.setReload} addFeature={props.addFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addFeature: (name, id, price) => dispatch({type: 'ADD_FEATURE', payload: {name, id, price}}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);
