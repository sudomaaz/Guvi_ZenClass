import Card from "./Card";

const Menu = (props) => {
  let ilist = <p>Loading...</p>;

  const addNewItem = (id) => {
    const ob = [...props.list.itemList];
    const ob1 = { ...props.list.itemList[id], added: true };
    ob[id] = ob1;
    //console.log(ob);
    props.call.updateItem(ob);
    props.call.updateCart([...props.list.cartList, ob[id]]);
  };

  if (props.list.itemList.length) {
    ilist = props.list.itemList.map((e, i) => {
      return <Card key={i} item={e} call={addNewItem} id={i} />;
    });
  }
  return (
    <div className="col-lg-9">
      <div className="row">{ilist}</div>
    </div>
  );
};

export default Menu;
