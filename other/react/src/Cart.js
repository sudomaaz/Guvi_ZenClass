const Cart = (props) => {
  let total = 0.0;
  let list;
  // console.log(props.list.cartList);
  const del = (id) => {
    const newList = [...props.list.cartList];
    const deleted = newList.splice(id, 1);
    // console.log(deleted);
    const ob = props.list.itemList.map((e) => {
      if (e.id === deleted[0].id) e.added = false;
      return e;
    });
    props.call.updateItem(ob);
    props.call.updateCart(newList);
  };
  if (props.list.cartList.length) {
    list = props.list.cartList.map((e, i) => {
      total = total + +e.price;
      return (
        <h6 key={i} className="list-group-item">
          {e.name} : ${e.price}
          <button
            onClick={() => del(i)}
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
      {list ? <div className="list-group">{list}</div> : null}
      <h6 className="list-group-item active">Total : ${total}</h6>
    </div>
  );
};

export default Cart;
