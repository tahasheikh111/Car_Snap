import React, { useState, useEffect } from 'react';
import BlackNav from './BlackNav.jsx';
import '../styles/StorePage.css'; // Import CSS file for StorePage styles
import Web3 from 'web3';

const StorePage = () => {
    // Sample data for car parts (replace with your actual data)
    const [carParts, setCarParts] = useState([
        { id: 1, name: 'Bumper', price: 500 },
        { id: 2, name: 'Trunk', price: 100 },
        { id: 3, name: 'Door', price: 100 },
        { id: 4, name: 'Trunk', price: 100 },
        { id: 5, name: 'Side Mirror', price: 50 },
        { id: 6, name: 'Head Lights', price: 50 },
        { id: 7, name: 'Back Lights', price: 50 }
    ]);

    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [web3, setWeb3] = useState(null);
    const [userAddress, setUserAddress] = useState('');
    const [ethPrice, setEthPrice] = useState(0);
    const [userBalance, setUserBalance] = useState(0);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                try {
                    await window.ethereum.enable();
                    const accounts = await web3Instance.eth.getAccounts();
                    setUserAddress(accounts[0]);
                } catch (error) {
                    console.error('User denied account access or other error occurred:', error);
                }
            } else {
                console.error('MetaMask not detected!');
            }
        };
        initWeb3();

        const fetchEthPrice = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await response.json();
                const price = data.ethereum.usd;
                setEthPrice(price);
            } catch (error) {
                console.error('Error fetching ETH price:', error);
            }
        };
        fetchEthPrice();
    }, []);


useEffect(() => {
    const fetchUserBalance = async () => {
        if (!web3 || !userAddress) return;

        try {
            // Fetch the user's balance in Wei
            const balanceWei = await web3.eth.getBalance(userAddress);
            // Convert the balance from Wei to Ether
            const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
            setUserBalance(balanceEth);
        } catch (error) {
            console.error('Error fetching user balance:', error);
        }
    };

    fetchUserBalance();
}, [web3, userAddress]);



    const addToCart = (part) => {
        const existingItemIndex = cart.findIndex(item => item.id === part.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...part, quantity: 1 }]);
        }
    };

    const removeFromCart = (partId) => {
        setCart(cart.filter(item => item.id !== partId));
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const checkout = async () => {
        if (!web3) {
            console.error('Web3 not initialized!');
            return;
        }
    
        // Check if the cart is empty
        if (cart.length === 0) {
            console.log('Cart is empty. No checkout needed.');
            return;
        }
    
        const totalPriceEth = cart.reduce((total, item) => total + (item.price / ethPrice) * item.quantity, 0);
    
        console.log('Total price in ETH:', totalPriceEth);
    
        // Specify the recipient address (parent account)
        const parentAccount = '0xC47ADEc15A050c2cbFC88f602381b7F5D15C65Ca'; // Replace with the Ethereum address of your parent account
    
        try {
            // Send transaction using MetaMask
            const result = await web3.eth.sendTransaction({
                to: parentAccount, // Specify the recipient address
                from: userAddress, // Use the user's address as the sender
                value: web3.utils.toWei(totalPriceEth.toString(), 'ether')
            });
            console.log('Transaction successful:', result);
    
            // Fetch the user's balance again after successful transaction
            const updatedBalanceWei = await web3.eth.getBalance(userAddress);
            const updatedBalanceEth = web3.utils.fromWei(updatedBalanceWei, 'ether');
            setUserBalance(updatedBalanceEth);
    
            // Clear the cart after successful transaction
            setCart([]);
            // Close the cart sidebar
            setIsCartOpen(false);
    
            // Handle further processing, e.g., update database, display success message, etc.
        } catch (error) {
            console.error('Error during transaction:', error);
            // Handle transaction error
        }
    };
    
    
    
    

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <BlackNav />
            <div className="store-container">
                <h2>Car Parts for Sale</h2>
                <div className="car-parts-list">
                    {carParts.map(part => (
                        <div key={part.id} className="car-part">
                            <h3>{part.name}</h3>
                            <p>Price: ${part.price}</p>
                            <button className="add-to-cart-btn" onClick={() => addToCart(part)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Cart Sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
    <div className="cart-header">
        <h2>Cart</h2>
        <button className="close-btn" onClick={toggleCart}>Close</button>
    </div>
    <div className="cart-items-container">
        <div className="cart-items">
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <p>{item.name} - Quantity: {item.quantity}</p>
                    
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
    <p>User Address: {userAddress}</p>
    <p>User Balance: {userBalance} ETH</p>
    <p>Total Price: ${totalPrice}</p> {/* Display total price */}
    <button className="checkout-btn" onClick={checkout}>Checkout</button>
</div>

            {/* Cart Icon Button */}
            <button className="cart-icon-btn" onClick={toggleCart}>Cart</button>
        </div>
    );
};

export default StorePage;
