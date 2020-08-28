import React, { useState } from "react";
import File from "./folders/File";
import Form8 from "./folders/Form8";

function Companydetails() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const style = {
    btn: {
      width: "15rem",
    },
  };

  return (
    <div>
      <form>
        <span className="formtext"></span>
        <div class="text-left mb-3">
          <button
            type="button"
            id="rov"
            onClick={() => setOpen(!open)}
            style={style.btn}
            class="btn btn-primary mb-3"
          >
            Set Data Manually
          </button>
          <br></br>
          {open && <Form8 />}
          <button
            type="button"
            id="rov"
            onClick={() => setOpen1(!open1)}
            style={style.btn}
            class="btn btn-primary mb-3"
          >
            Upload File
          </button>
          <br></br>
          {open1 && <File />}
        </div>
      </form>
    </div>
  );
}

export default Companydetails;
