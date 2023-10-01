import LoanInput from "./LoanInput";
export default function LoanForm() {
  function validateInputs(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    if (e.target.name.value == null || e.target.name.value == "") {
      alert("Please enter your name");
    } else if (e.target.phone.value == null || e.target.phone.value == "") {
      alert("Please enter your phone number");
    } else if (
      e.target.Age.value == null ||
      e.target.Age.value == "" ||
      e.target.Age.value < 18 ||
      e.target.Age.value > 100
    ) {
      alert("Please enter your age correctly");
    } else {
      console.log(e.target.name.value);
      console.log(e.target.phone.value);
      console.log(e.target.Age.value);
      alert("Your request has been submitted");
    }
  }
  return (
    <div>
      <h1
        style={{ marginLeft: "10rem", marginRight: "10rem", fontSize: "1rem" }}
      >
        {" "}
        Requesting a loan
      </h1>

      <hr></hr>
      <form onSubmit={validateInputs}>
        <LoanInput
          required={false}
          style={{ fontSize: "1rem" }}
          title="name"
          type="text"
        ></LoanInput>
        <LoanInput
          required={false}
          style={{ fontSize: "1rem" }}
          title="phone"
          type="phone"
          min="10"
          max="12"
        ></LoanInput>
        <LoanInput
          required={false}
          style={{ fontSize: "1rem" }}
          title="Age"
          type="text"
        ></LoanInput>

        <div style={{ marginTop: "1rem" }}></div>
        <LoanInput
          required={false}
          title="Are you an employee?"
          type="checkbox"
          style={{ fontSize: "1rem" }}
        ></LoanInput>
        <div>
          <p style={{ fontSize: "1rem", marginBottom: "0" }}>Salary</p>
          <select
            style={{
              width: "95%",
              marginLeft: "1rem",
              marginRight: "1rem",
              marginTop: "0",
            }}
          >
            <option>Less than $500</option>
            <option>More than $1000</option>
            <option>between $500 and $1000</option>
          </select>
        </div>

        <div
          style={{
            marginBottom: "1rem",
            marginTop: "1rem",
            padding: "1rem",
            display: "inline",
            marginRight: "5rem",
            marginLeft: "5rem",
          }}
        >
          <button style={{ padding: "0.5rem", backgroundColor: "grey" }}>
            Submit
          </button>
          {/* <input
            style={{ padding: "0.5rem" }}
            type="submit"
            value={"Submit"}
          ></input> */}
        </div>
      </form>
    </div>
  );
}


// import Heading from './Heading.js';
import Section from './Section.js';
import {LevelContext} from './LevelContext.js'
import Heading from './Heading.js'
export default function Page() {
 
  return (
    <LevelContext.provider value={1}> 
   <Section>
      <Heading>Title</Heading>
     <LevelContext.provider value={2}>
     <Section >
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <LevelContext.provider value={3}>
         <Section >
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
           <LevelContext.provider value ={4}>
            <Section >
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
           </LevelContext.provider>
         
        </Section>
        </LevelContext.provider>
       
      </Section>
   
     </LevelContext.provider>
       </Section>
  </LevelContext.provider>
  );
}
