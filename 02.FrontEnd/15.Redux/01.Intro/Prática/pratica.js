const Redux = require('redux');

const buttonPrevious = document.getElementById("previous");
const buttonNext = document.getElementById("next");
const colorValue = document.getElementById("value");

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const goNext = (number) => ({type: "NEXT_COLOR", index: number});
const goPrevious = (number) => ({type: "PREVIOUS_COLOR", index: number});

const reducer = (state = INITIAL_STATE, action) => {
  action.index = action.index === state.colors.length ? 0 : action.index;
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        colors: state.colors,
        index: index + action.index,
      };
    case 'PREVIOUS_COLOR':
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};
const store = Redux.createStore(reducer);

buttonPrevious.addEventListener("click", () => {
  store.dispatch(goPrevious(-1)) // parecido com o this.setState
})

buttonNext.addEventListener("click", () => {
  store.dispatch(goNext(1)) // parecido com o this.setState
})

store.subscribe(() => {
  const { index } = store.getState();
  colorValue.innerText = INITIAL_STATE[index]
})
