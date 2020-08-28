import React from "react";
export default function File() {
  const style = {
    btn: {
      width: "10rem",
    },
  };
  return (
    <div>
      <form>
        <input style={style.btn} type="file" /> <br></br>
        <br></br>
        <button style={style.btn}> Upload! </button>
      </form>
    </div>
  );
}
