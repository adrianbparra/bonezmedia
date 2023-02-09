import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = window.localStorage.getItem("cart");
        if (cart) {
            setCartItems(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        if (cartItems.length > 0) {
            window.localStorage.setItem("cart", JSON.stringify(cartItems));
        }
        if (cartItems.length === 0) {
            window.localStorage.removeItem("cart")
        }
    }, [cartItems]);

    function getItemQuantity(price_id) {
        return (
            cartItems.find((product) => product.default_price === price_id)
                ?.quantity || 0
        );
    }

    function updateCartQuantity(price_id, quantity) {
        setCartItems((currItems) => {
            return currItems.map((item) => {
                if (item.default_price === price_id) {
                    return {
                        ...item,
                        quantity: quantity,
                    };
                } else {
                    return item;
                }
            });
        });
    }

    function incrAmountCartQuantity(product, quantity) {
        setCartItems((currItems) => {
            if (
                currItems.find(
                    (items) => items.default_price === product.default_price
                ) == null
            ) {
                return [...currItems, { ...product, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.default_price === product.default_price) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function increaseCartQuantity(product) {
        setCartItems((currItems) => {
            if (
                currItems.find(
                    (item) => item.default_price === product.default_price
                ) == null
            ) {
                return [...currItems, { ...product, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.default_price === product.default_price) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(price_id) {
        setCartItems((currItems) => {
            if (
                currItems.find((item) => item.price === price_id)?.quantity ===
                1
            ) {
                return currItems.filter((item) => item.price !== price_id);
            } else {
                return currItems.map((item) => {
                    if (item.price === price_id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(price_id) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.default_price !== price_id);
        });
    }

    function getTotalItems() {
        return cartItems.reduce((acc, curr) => {
            return acc + curr.quantity;
        }, 0);
    }

    function getTotalPrice() {
        return cartItems.reduce((acc, curr) => {
            const total = curr.unit_amount * curr.quantity;
            return acc + total;
        }, 0);
    }
    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                getTotalItems,
                incrAmountCartQuantity,
                updateCartQuantity,
                cartItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
