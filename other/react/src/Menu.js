import Card from "./Card";

const Menu = (props) => {
  let ilist = (
    <div className="col">
      <p className="text-center">Loading...</p>
    </div>
  );

  const addNewItem = (id) => {
    const ob = [...props.list.itemList];
    ob[id].added = true;
    //console.log(ob);
    props.call.updateItem(ob);
    props.call.updateCart([...props.list.cartList, ob[id]]);
  };

  if (props.list.itemList.length) {
    ilist = props.list.itemList.map((e, i) => {
      return <Card key={i} item={e} call={addNewItem} />;
    });
  }
  return (
    <div className="col-lg-9">
      <div className="row">{ilist}</div>
    </div>
  );
};

export default Menu;
