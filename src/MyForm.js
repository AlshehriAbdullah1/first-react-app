import { useState } from "react";

export default function MyForm() {
  const [bodyParam, setbodyParam] = useState({
    name: "ff",
    email: "test@mail.com",
    generalInfo: "general info",
    country: "",
    status: "",
  });

  function handleNameChange(event) {
    const newBodyParam = { ...bodyParam };
    newBodyParam.name = event.target.value;

    console.log(bodyParam);
    setbodyParam(newBodyParam);
  }
  function handleEmailChange(event) {
    setbodyParam({ ...bodyParam, email: event.target.value });
  }
  function handleGeneralInfoChange(event) {
    setbodyParam({ ...bodyParam, generalInfo: event.target.value });
  }

  return (
    <>
      <form>
        <label>Name:</label>
        <input value={bodyParam.name} onChange={handleNameChange} />
        <hr></hr>
        <label>Email:</label>
        <input value={bodyParam.email} onChange={handleEmailChange} />
        <hr></hr>
        <p>Your nationality</p>
        <select
          value={bodyParam.country}
          onChange={(e) =>
            setbodyParam({ ...bodyParam, country: e.target.value })
          }
        >
          <option selected>Select your country</option>
          <option>KSA</option>
          <option>Egypt</option>
          <option>Qatar</option>
        </select>
        <hr></hr>

        <div>
          <input
            type="radio"
            checked={bodyParam.status == "Student"}
            onClick={(e) => setbodyParam({ ...bodyParam, status: "Student" })}
          />
          Student
          <input
            type="radio"
            checked={bodyParam.status == "Teacher"}
            onClick={(e) => setbodyParam({ ...bodyParam, status: "Teacher" })}
          />
          Teacher
        </div>
        <hr></hr>
        <label>General Info</label>
        <textarea onChange={handleGeneralInfoChange}>
          {bodyParam.generalInfo}
        </textarea>
        <button>Submit</button>
      </form>
    </>
  );
}
