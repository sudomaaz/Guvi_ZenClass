const Side = (props) => {
  let total = 0.0;
  let list = props.list ? props.list.filter((e) => e.added) : null;
  const del = (name) => {
    const newlist = props.list.map((e) => {
      if (e.name === name) e.added = false;
      return e;
    });
    props.call(newlist);
  };
  if (list) {
    list = list.map((e, i) => {
      const name = e.name;
      const price = +e.price;
      total = total + price;
      return (
        <h6 key={i} className="list-group-item">
          {name} : ${price}
          <button
            onClick={() => del(name)}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </h6>
      );
    });
    total = total.toFixed(2);
  }
  return (
    <div className="col-lg-3">
      <h1 className="my-4">Shop Name</h1>
      {list ? (
        <div className="list-group">
          {list}
          <h6 className="list-group-item active">Total : ${total}</h6>
        </div>
      ) : null}
    </div>
  );
};

export default Side;
