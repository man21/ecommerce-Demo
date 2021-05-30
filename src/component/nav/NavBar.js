import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


function NavBar(props) {
  const { products, setProducts } = props;

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    quantity: 1,
    amount: 0,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitButton = () => {
    var tempFormData = { ...formData };
    if (
      tempFormData.title == "" ||
      tempFormData.quantity === 0 ||
      tempFormData.amount === 0
    ) {
      alert("Some field is missing");
    } else {
      var tempProduct = { ...products };
      tempProduct = [...products, { ...tempFormData, id: products.length + 1 }];
      setProducts(tempProduct);

      setFormData({
        title: "",
        quantity: 1,
        amount: 0,
      });
      handleClose(false);
    }
  };

  const setTitle = (e) => {
    var tempFormData = { ...formData };
    tempFormData = { ...tempFormData, title: e.target.value };
    setFormData(tempFormData);
  };
  const setQuantity = (e) => {
    var tempFormData = { ...formData };
    tempFormData = { ...tempFormData, quantity: parseInt(e.target.value) };
    setFormData(tempFormData);
  };

  const setAmount = (e) => {
    var tempFormData = { ...formData };
    tempFormData = { ...tempFormData, amount: parseInt(e.target.value) };
    setFormData(tempFormData);
  };

  return (
    <div>
      <div style={styles.nav}>

        <Button
          style={{
            marginRight: "20px",
            color: "#ffffff",
            background: "#000000",
          }}
          onClick={handleClickOpen}
        >
          FORM
        </Button>

        <div style={{ marginRight: "20px", color: "#ffffff" }}>
          Total Amount:{" "}
          {products.reduce((previous, current) => previous + current.amount, 0)}
        </div>

        <div style={styles.ncartIconContainerav}>
          <img
            style={styles.cartIcon}
            alt="cartIcon"
            src="https://image.flaticon.com/icons/png/512/1170/1170576.png"
          />
          <span style={styles.cartCount}>
            {products.reduce(
              (previous, current) => previous + current.quantity,
              0
            )}
          </span>
        </div>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add Product 
            </DialogContentText>

            <TextField
              margin="dense"
              id="title"
              label="Product Name"
              type="text"
              value={formData.title}
              onChange={(e) => setTitle(e)}
              fullWidth
            />

            <TextField
              margin="dense"
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => setQuantity(e)}
              fullWidth
            />

            <TextField
              margin="dense"
              id="amount"
              type="number"
              value={formData.amount}
              onChange={(e) => setAmount(e)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmitButton} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  cartIconContainer: {
    postiton: "relative",
  },

  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: 10,
  },
};

export default NavBar;
