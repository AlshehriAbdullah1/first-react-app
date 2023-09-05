function MyFirstComponent() {
  const Person = {
    name: "Abdullah",
    email: "abdullah@mail.com",
  };
  const elmStyle = {
    backgroundColor: "red",
  };
  return (
    <div>
      <h1 style={elmStyle}>{Person.name} Hello World</h1>
      <button onClick={sayHello}> this is button</button>
    </div>
  );
}

function sayHello() {
  alert("hello");
}
export default MyFirstComponent;
