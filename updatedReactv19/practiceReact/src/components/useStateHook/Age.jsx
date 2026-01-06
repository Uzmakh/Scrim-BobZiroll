import {useState} from 'react'

const Age = () => {
  const [age, setAge] = useState(18);

  function increment() {
    // Passing the updater function
    // setAge(age=>age+1)
    // setAge(age=>age+1)
    // setAge(age => age + 1)
    // without updater function
    setAge(age + 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={increment}>+3</button>
    </>
  )
}

export default Age
