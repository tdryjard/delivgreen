import {useContext} from 'react';

import { GlobalStateContext } from '../context/GlobalStateContext';

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  // Connexion
  const userConnect = function connectTheUser (user) {
    dispatch({
      type: 'USER_CONNECT',
      payload: {
        user
      }
    });
  };

  // Deconnexion
  const userDisconnect = function disconnectTheUser() {
    dispatch({ type: 'USER_DISCONNECT' });
  }

  return { userConnect, userDisconnect, user: state.user };
}

export default useGlobalState;