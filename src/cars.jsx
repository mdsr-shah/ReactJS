export default function Car(props) {
  const {brand, model} = props; /*Destructuring props*/
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}