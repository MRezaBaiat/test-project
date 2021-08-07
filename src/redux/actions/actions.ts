import GeocodeApi from '../../api/geocode.api';
import throttleAction from 'throttle-action';

export const ACTION_FETCH_GEOCODE = 'ACTION_FETCH_GEOCODE';

export const actionFetchGeocodeResults = throttleAction((search: string) => {
  return (dispatch, getState) => {
    GeocodeApi.geocode(search)
      .then((res) => {
        dispatch({
          type: ACTION_FETCH_GEOCODE,
          payload: res
        });
      }).catch(() => {
        dispatch({
          type: ACTION_FETCH_GEOCODE,
          payload: []
        });
      });
  };
}, 300);
