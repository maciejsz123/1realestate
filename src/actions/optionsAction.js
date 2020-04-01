import { OPTIONS_CHANGE, HOME_TYPE_CHANGE, REMOVE_VALUE, MOUSEOVER_TOOLTIP_MAP } from './types';

export function changeOptions(e) {
  return function(dispatch) {
    if(e.target.name === 'homeType') {
      dispatch({
        type: HOME_TYPE_CHANGE,
        value: e.target.value,
        checked: e.target.checked
      });
    } else {
      dispatch({
        type: OPTIONS_CHANGE,
        payload: e.target
      });
    }
  }
}

export function removeValue(e) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_VALUE,
      payload: e.target.name,
      value: ''
    })
  }
}

export function mouseOverTooltipData(e, latitude = '', longitude = '') {
  return function(dispatch) {
    dispatch({
      type: MOUSEOVER_TOOLTIP_MAP,
      payload: (latitude && longitude) ? [[latitude, longitude]] : []
    })
  }
}
