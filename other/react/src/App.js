import React, { useState, useEffect } from "react";
import Header from "./Header";
import Side from "./SideMenu";
import Card from "./Card";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [itemList, addItem] = useState(null);
  let ilist;
  //console.log(itemList);
  useEffect(() => {
    if (!itemList) {
      axios
        .get("https://5ffeaf57a4a0dd001701ae13.mockapi.io/guvi")
        .then((res) => {
          const body = res.data.map((e) => {
            return {
              name: e.name,
              price: e.price,
              added: false
            };
          });
          addItem(body);
        })
        .catch((err) => console.log(err));
    }
  });

  const addNewItem = (id) => {
    const ob = [...itemList];
    const ob1 = { ...itemList[id], added: true };
    ob[id] = ob1;
    addItem(ob);
  };

  if (itemList) {
    ilist = itemList.map((e, i) => {
      return (
        <Card
          key={i}
          name={e.name}
          price={e.price}
          call={addNewItem}
          id={i}
          disable={e.added}
        />
      );
    });
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <Side list={itemList} call={addItem} />
          <div className="col-lg-9">
            <div className="row">
              {itemList ? (
                ilist
              ) : (
                <p className="col-lg-4 text-center">Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
