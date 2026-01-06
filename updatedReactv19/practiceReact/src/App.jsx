import MyCheckbox from "./components/useStateHook/MyCheckbox";
import Counter from "./components/useStateHook/Counter";
import MyInput from "./components/useStateHook/MyInput";
import TwoStates from "./components/useStateHook/TwoStates";
import Age from "./components/useStateHook/Age"
import Form from "./components/StateWithObjects/Form";
import NestedObject from "./components/StateWithObjects/NestedObject";
import Parent from "./components/StateWithArrays/Parent";
import ComplexStateArray from "./components/ComplexStatewithArray/ComplexStateArray";

const App = () => {
  return (
    <div>
      <Counter />
      <MyInput />
      <MyCheckbox />
      <TwoStates />
      <Age />
      <Form />
      <NestedObject />
      <Parent />
      <ComplexStateArray/>
    </div>
  );
};

export default App;
