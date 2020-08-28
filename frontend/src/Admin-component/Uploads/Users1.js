import React, { useState } from "react";
import Sdm from "./folders/Sdm";
import File from "./folders/File";
import Form from "./folders/Form";

function Users1() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const openForm = () => {
    setOpen2(true);
  };

  const style = {
    btn: {
      width: "15rem",
    },
  };

  const form = (e) => {
    e.preventDefault();
    setOpen(false);
    openForm();
  };
  return (
    <div>
      <div>HIIII</div>
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
          {open && <Sdm />}
          {open2 && <Form />}
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

export default Users1;
