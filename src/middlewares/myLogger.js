const myLogger = (store) => (next) => (action) => {
  console.log(action);
  // 먼저 액션을 출력합니다.

  const result = next(action);
  // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.

  console.log("\t", store.getState());

  return result;
  // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

export default myLogger;

/*
미들웨어 안에서는 무엇이든지 할 수 있습니다. 
예를 들어서 액션 값을 객체가 아닌 함수도 받아오게 만들어서 
액션이 함수타입이면 이를 실행시키게끔 할 수도 있습니다 
(이게 우리가 추후 배워볼 redux-thunk 입니다). 
한번 예시를 확인해볼까요?

const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

그러면 나중엔 dispatch 할 때 다음과 같이 할 수도 있는거죠.

const myThunk = () => (dispatch, getState) => {
  dispatch({ type: 'HELLO' });
  dispatch({ type: 'BYE' });
}

dispatch(myThunk());
*/
