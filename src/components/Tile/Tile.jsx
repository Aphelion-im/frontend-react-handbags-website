export default function Tile(props) {
  return (
    <>
      <section>
        {props.image && <img src={props.image} alt={props.title} />}
        {props.header && <h2>{props.header}</h2>} {/* Correctie ivm geeft een lege h2 weer in de DOM bij de afbeeldingen */}
        {props.children}
      </section>
    </>
  );
}
