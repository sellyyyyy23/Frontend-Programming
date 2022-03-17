function Hello(props) {
  
  const { name } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} </p>
    </div>
  );
}

export default Hello;
