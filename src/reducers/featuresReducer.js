const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

const addFeature = (action, state) => {
    return {...state, car: {...state.car, price: (state.car.price + action.payload.price), features: [...state.car.features, action.payload]}}
}

const deleteFeature = (action, state) => {
  let newState = {...state}
  let idxToDelete = null
  newState.car.features.map((feat, idx) => {
    if (feat.id === action.payload.id) idxToDelete = idx
  })

  if (idxToDelete === 0 || idxToDelete) newState.car.features.splice(idxToDelete, 1)
  return {...newState, car: {...newState.car, price: newState.car.price - action.payload.price}}
}

const featuresReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE': return addFeature(action, state);
        case 'DELETE_FEATURE': return deleteFeature(action, state);
        default: return state;
    }
}

export default featuresReducer
