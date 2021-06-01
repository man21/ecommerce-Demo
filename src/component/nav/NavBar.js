import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { useSelector, useDispatch } from "react-redux";

import "../Products/ProductItem.css";
function NavBar(props) {
  const dispatch = useDispatch();

  const wishList = useSelector((state) => state.wishList);

  const cart = useSelector((state) => state.cart);

  const { products } = props;

  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    quantity: 1,
    amount: 0,
  });

  const handleAddProductClickOpen = () => {
    setOpenAddProduct(true);
  };

  const handleAddProductClose = () => {
    setOpenAddProduct(false);
  };

  const handleOpenWishListClickOpen = () => {
    setOpenWishList(true);
  };

  const handleOpenWishListClose = () => {
    setOpenWishList(false);
  };

  const handleOpenCartClickOpen = () => {
    setOpenCart(true);
  };

  const handleOpenCartListClose = () => {
    setOpenCart(false);
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

      // setProducts(tempProduct);

      setFormData({
        title: "",
        quantity: 1,
        amount: 0,
      });
      handleAddProductClose(false);
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

  const handleIncreaseQuantity = (id) => {

    const checkProductInCart = cart.data.filter((x) => x.id === id)

    dispatch({type: 'UPDATE_ONE_CART', payload: {...checkProductInCart[0], quantity: checkProductInCart[0].quantity+1}})

    
  };

  const handleDecreaseQuantity = (id) => {
    const checkProductInCart = cart.data.filter((x) => x.id === id)[0]

    if(checkProductInCart && checkProductInCart.quantity ===1){
      dispatch({type: 'UPDATE_ONE_CART', payload: {...checkProductInCart, quantity: checkProductInCart.quantity-1}})
      dispatch({type: 'DELETE_CART', payload: {...checkProductInCart}})
    }else{
      dispatch({type: 'UPDATE_ONE_CART', payload: {...checkProductInCart, quantity: checkProductInCart.quantity-1}})
    }

  };

  const handleDeleteItem = (id) => {


    const checkProductInCart = cart.data.filter((x) => x.id === id)[0]

    if(checkProductInCart)
      dispatch({type: 'DELETE_CART', payload: {...checkProductInCart}})

  };

  const handleWishList =(id)=>{

    var dataAvailble = wishList.data.findIndex(item => item.id === id)

    if(dataAvailble === -1){
      const newDATA = cart.data.filter((x) => x.id === id);
      dispatch({type: 'ADD_WISHLIST', payload: newDATA[0]})
    }else{

      dispatch({type: 'DELETE_WISHLIST', payload: {id: id}})

    }

    
  }

  const handleAddProductInCart = (id) => {

    const newDATA = wishList.data.filter((x) => x.id === id);

    const checkProductInCart = cart.data.filter((x) => x.id === id);
    if (checkProductInCart.length > 0) {
      dispatch({
        type: "UPDATE_ONE_CART",
        payload: {
          ...checkProductInCart[0],
          quantity: checkProductInCart[0].quantity + 1,
        },
      });

    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...newDATA[0], quantity: 1 },
      });
    }
  };

  return (
    <div >
      <div style={styles.nav}>
        <Button
          style={{marginRight: "20px",color: "#ffffff", background: "#000000"}}
          onClick={handleAddProductClickOpen}> 
          Add New Product
        </Button>
        <div style={styles.ncartIconContainerav}>
          <img
            style={styles.cartIcon}
            onClick={handleOpenWishListClickOpen}
            alt="wishList"
            src="https://image.flaticon.com/icons/png/512/4379/4379561.png"
          />
          <span style={styles.wishListCount}>
            {wishList && wishList.data.length ? wishList.data.length : 0}
          </span>
        </div>

        <div style={styles.ncartIconContainerav}>
          <img
            style={styles.cartIcon}
            alt="cartIcon"
            src="https://image.flaticon.com/icons/png/512/1170/1170576.png"
            onClick={handleOpenCartClickOpen}
          />
          <span style={styles.cartCount}>{cart.data.reduce((a,b)=> a+b.quantity, 0)}</span>
        </div>
      </div>

      {/* ADD PRODUCT POPUP */}
      <div>
        <Dialog
          open={openAddProduct}
          onClose={handleAddProductClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
          <DialogContent>
            <DialogContentText>Add Product</DialogContentText>

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
            <Button onClick={handleAddProductClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmitButton} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Display WISHLIST */}
      <div>
        <Dialog
          fullScreen
          onClose={handleOpenWishListClose}
          aria-labelledby="customized-dialog-title"
          open={openWishList}
        >
          <AppBar className={styles.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleOpenWishListClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                wishList
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleOpenWishListClose}
              >
                save
              </Button>

              <Typography
                variant="h6"
                style={{ marginRight: "1px" }}
                className={styles.title}
              >
                <b style={{ color: "#fff000" }}>Total Amount: </b>{" "}
                {wishList.data.reduce((a, b) => a + b.price.current.text, "")}{" "}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent dividers style={{ marginTop: "50px", display: 'flex', flexWrap: 'wrap',gap: '16px', flex: '0 0 auto'  }}>
            {wishList.data.length > 0 ? (
              wishList.data.map((list) => (
                <div
                  key={list.id}
                  style={{
                    margin: "20px 7px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    display: 'flex', flexGrow: 0,width: '48%',flexShrink: 1
                  }}
                >
                  <div>
                    <img
                      alt="productImage"
                      style={{
                        height: 110,
                        width: 110,
                        borderRadius: 4,
                        alignItems: "right",
                        backgroundColor: " #ccc",
                        margin: "5px auto",
                        display: "block",
                      }}
                      src={`https://${list.imageUrl}`}
                    />
                  </div>

                  <div className="right-block">
                    <div style={{marginTop: "10px"}}>
                      <b>Title:</b> {list.name}
                    </div>
                    <div>
                      <b>Amount: </b>
                      {list.price.current.text}
                    </div>

                    <div className="cart-item-actions">
                      {/* <img
                        className="action-icons"
                        alt="addToCart"
                        style={{ height: "24px", padding: "5px 5px" }}
                        src="https://image.flaticon.com/icons/png/512/4379/4379578.png"
                      /> */}


                      <Button
                        className="action-icons"
                        style={{ margin: "15px 15px" }}
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddProductInCart(list.id)}
                        >
                        Add to cart
                      </Button>

                     

                      <Button
                        className="action-icons"
                        style={{ margin: "15px 15px" }}
                        variant="outlined"
                        color="secondary"
                        onClick={() =>
                          dispatch({
                            type: "DELETE_WISHLIST",
                            payload: { id: list.id },
                          })
                        }
                      >
                        {" "}
                        Remove from WishList
                      </Button>

                      {/* <img
                        className="action-icons"
                        alt="favourite"
                        style={{
                          height: "24px",
                          padding: "5px 5px",
                          color: "#fff000",
                        }}
                        src={
                          wishList.data.filter((item) => item.id === list.id).length > 0
                            ? "https://image.flaticon.com/icons/png/512/4379/4379680.png"
                            : "https://image.flaticon.com/icons/png/512/4379/4379561.png"
                        }
                      /> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No RESULT</div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Display CART */}
      <div>
        <Dialog
          fullScreen
          onClose={handleOpenCartListClose}
          aria-labelledby="customized-dialog-title"
          open={openCart}
        >
          <AppBar className={styles.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleOpenCartListClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={styles.title}>
                Cart
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={handleOpenCartListClose}
              >
                save
              </Button>

              <Typography
                variant="h6"
                style={{ marginRight: "1px" }}
                className={styles.title}
              >
                <b style={{ color: "#fff000" }}>Total Amount: </b> USD{" "}
                {cart.data.reduce((a, b) => a + b.price.current.value, 0)}{" "}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent dividers style={{ marginTop: "50px", display: 'flex', flexWrap: 'wrap',gap: '16px', flex: '0 0 auto'  }}>
            {cart.data.length > 0 ? (
              cart.data.map((list) => (
                <div
                  key={list.id}
                  style={{
                    // display: "inline-block",
                    // margin: "20px 10px",
                    margin: "20px 7px",
                    borderStyle: "solid",
                    borderWidth: "thin",
                    display: 'flex', flexGrow: 0,width: '48%',flexShrink: 1
                  }}
                >
                  <div>
                    <img
                    alt="productImage"
                      style={{
                        height: 110,
                        width: 110,
                        borderRadius: 4,
                        alignItems: "right",
                        backgroundColor: " #ccc",
                        margin: "5px auto",
                        display: "block",
                      }}
                      src={`https://${list.imageUrl}`}
                    />
                  </div>

                  <div className="right-block">
                    <div style={{marginTop: "10px"}}>
                      <b>Title:</b> {list.name}
                    </div>
                    <div>
                      <b>Amount: </b>
                      {list.price.current.text}
                    </div>

                    <div>
                      <b>Qty:</b> {list.quantity}
                    </div>

                    <div className="cart-item-actions">
                      <img
                        className="action-icons"
                        alt="increase"
                        style={{
                          height: "24px",
                          width: "24px",
                          padding: "5px 5px",
                        }}
                        src="https://image.flaticon.com/icons/png/512/992/992651.png"
                        onClick={()=>handleIncreaseQuantity(list.id)}
                      />
                      <img
                        className="action-icons"
                        alt="decrease"
                        style={{
                          height: "24px",
                          width: "24px",
                          padding: "5px 5px",
                        }}
                        src="https://image.flaticon.com/icons/png/512/1828/1828906.png"
                        onClick={()=>handleDecreaseQuantity(list.id)}
                      />
                      <img
                        className="action-icons"
                        alt="delete"
                        style={{
                          height: "24px",
                          width: "24px",
                          padding: "5px 5px",
                        }}
                        src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
                        onClick={()=>handleDeleteItem(list.id)}
                      />

                      {/* <img
                        className="action-icons"
                        alt="favourite"
                        style={{
                          height: "24px",
                          padding: "5px 5px",
                          color: "#fff000",
                        }}
                        src={
                          wishList.data.filter((item) => item.id === list.id)
                            .length > 0
                            ? "https://image.flaticon.com/icons/png/512/4379/4379680.png"
                            : "https://image.flaticon.com/icons/png/512/4379/4379561.png"
                        }
                        onClick={() =>handleWishList(list.id)}
                      /> */}

        {wishList.data.filter((item) => item.id === list.id).length > 0 ? (
            <Button
              className="action-icons"
              style={{ marginTop: '-22px' }}
              variant="outlined"
              color="secondary"
              onClick={() => handleWishList(list.id)}
            >
              {" "}
              Remove from WishList
            </Button>
          ) : (
            <Button
              className="action-icons"
              style={{ marginTop: '-22px' }}
              variant="contained"
              color="primary"
              onClick={() => handleWishList(list.id)}
            >
              Add To WishList
            </Button>
          )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No RESULT</div>
            )}
          </DialogContent>
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

  wishListCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 50,
    top: 10,
  },

  root: {
    margin: 0,
    padding: 2,
  },
  closeButton: {
    position: "absolute",
    right: 1,
    top: 1,
    color: "#fff000",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: 2,
    flex: 1,
  },
};

export default NavBar;
