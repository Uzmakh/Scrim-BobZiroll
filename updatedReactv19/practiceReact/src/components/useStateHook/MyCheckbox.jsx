import { useState } from 'react'

const MyCheckbox = () => {
  const [liked, setLiked] = useState(true);

  function handleChange() {
    // setLiked(e.target.checked);
    // OR without e,
    setLiked(!liked);
  }
  return (
    <>
      <label> 
        <input type="checkbox" checked={liked} onChange={handleChange} />
        LIKED!
      </label>
      <p>{liked ? "I like it!": "I don't like it!"}</p>
    </>
  )
}

export default MyCheckbox

