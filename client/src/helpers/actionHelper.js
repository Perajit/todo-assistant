export const createActions = (actionCreators, serviceFunction, ...payloads) => {
  const {
    createRequestAction,
    createSuccessAction,
    createFailureAction
  } = actionCreators;

  return (dispatch) => {
    dispatch(createRequestAction());

    serviceFunction(...payloads)
      .then((result) => {
        dispatch(createSuccessAction(result))
      })
      .catch((error) => {
        dispatch(createFailureAction(error))
      });
  };
};
