import { useEffect, useState } from "react";

function States() {
  // const name = 'rishikes';
  // const nickname = 'rishikumar';
  const [heading, setHeading] = useState('');

  const handleNickname = () => setHeading('akash');
  // const handleClear = () => setHeading(name);

  // useEffect(() => {
  //   console.log("useeffect")
  // }, [])

  return (
    <>
      <button onClick={handleNickname}>Click To See Nickname</button>
      <h1>{heading}</h1>
      {/* <button onClick={handleClear}>Clear</button> */}
    </>
  );
}

export default States;
