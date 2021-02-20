const Card = (props) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#">
          <img
            className="card-img-top"
            src="http://placehold.it/700x400"
            alt=""
          />
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{props.name}</a>
          </h4>
          <h5>${props.price}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            numquam aspernatur!
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <small className="text-muted">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </small>
          <button
            name="addbutton"
            onClick={() => props.call(props.id)}
            className={props.disable ? "btn btn-secondary" : "btn btn-primary"}
            disabled={props.disable}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
