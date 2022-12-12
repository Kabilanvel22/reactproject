import { useRef } from "react";
function FormRef() {
    const firstNameRef = useRef(null);
    const passwordRef = useRef(null);
    const onSubmit = (event) => {
        const obj={
        name:firstNameRef.current.value,
        pass:passwordRef.current.value

      }
      alert(JSON.stringify(obj))
      event.preventDefault();
    };
  
    return (
      <form onSubmit={onSubmit}>
    <input placeholder="Enter name"
     ref={firstNameRef} />
<input
          placeholder="Enter password"
          type={"password"}
          ref={passwordRef}
        />
        <br/>
  
        <input type="submit" />
      </form>
    );
  }
  export default FormRef;