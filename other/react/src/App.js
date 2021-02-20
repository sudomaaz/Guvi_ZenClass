import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cart from "./Cart";
import Menu from "./Menu";
import Footer from "./Footer";
import axios from "axios";

export default function App() {
  const [itemList, updateItem] = useState([]);
  const [cartList, updateCart] = useState([]);
  //console.log(itemList);
  useEffect(() => {
    if (!itemList.length) {
      axios
        .get("https://5ffeaf57a4a0dd001701ae13.mockapi.io/guvi")
        .then((res) => {
          const body = res.data.map((e, i) => {
            return {
              id: i,
              name: e.name,
              price: e.price,
              added: false
            };
          });
          updateItem(body);
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <Cart
            list={{ itemList, cartList }}
            call={{ updateItem, updateCart }}
          />
          <Menu
            list={{ itemList, cartList }}
            call={{ updateItem, updateCart }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
