export default function Product(props) {
  return (
    <>
      <article>
        <span>{props.labelText}</span>
        <img src={props.image} alt={props.title} />
        <p>{props.name}</p>
        <h4>&euro;{props.price}</h4>
      </article>
    </>
  );
}
