export default function Button(props) {
  function displayMsgConsole() {
    console.log(props.buttonText);
  }

  return (
    <>
      <button onClick={displayMsgConsole} disabled={props.disabled}>
        {props.buttonText}
      </button>
    </>
  );
}
