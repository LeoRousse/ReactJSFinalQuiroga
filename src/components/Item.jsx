import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="box has-background-white-ter rounded-lg p-5 mx-4 my-4 shadow">
      <header className="has-text-centered mb-4">
        <h2 className="title is-4 has-text-primary">{name}</h2>
      </header>
      <figure className="image is-4by3 has-text-centered">
        <img
          src={img}
          alt={name}
          className="is-rounded"
          style={{
            width: "100%",
            maxWidth: "250px",
            borderRadius: "12px",
            margin: "0 auto",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </figure>
      <footer className="content has-text-centered mt-4">
        <p className="is-size-5 has-text-grey-dark">
          Precio: <strong className="has-text-success">${price}</strong>
        </p>
        <p className="is-size-6 has-text-grey">
          Stock disponible: <strong>{stock}</strong>
        </p>
        <Link
          to={`/item/${id}`}
          className="button is-link is-fullwidth mt-3"
          style={{
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#3273dc";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
