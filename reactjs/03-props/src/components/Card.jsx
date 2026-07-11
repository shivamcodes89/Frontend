const Card = (props) => {
  return (
      <div className="card">
        <img
        className="card-img"
        src="https://picsum.photos/300/200"
        alt="Card Image"
        />
      <h2 className="card-heading">{props.user}</h2>
      <h5>my age is {props.age}</h5>

      <p className="card-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatibus.
      </p>

      <button className="card-btn">Read More</button>
    </div>
  );
}

export default Card;
