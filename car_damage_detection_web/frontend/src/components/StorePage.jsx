import React, { useState, useEffect } from 'react';
import BlackNav from './BlackNav.jsx';
import Footer from './Footer.jsx';
import '../styles/StorePage.css'; // Import CSS file for StorePage styles
import Web3 from 'web3';

const StorePage = () => {
    // State for car parts list and cart
    const [carParts, setCarParts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // State for Ethereum-related data
    const [web3, setWeb3] = useState(null);
    const [userAddress, setUserAddress] = useState('');
    const [ethPrice, setEthPrice] = useState(0);
    const [userBalance, setUserBalance] = useState(0);

    // State for item addition form
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [addItemSidebarOpen, setAddItemSidebarOpen] = useState(false);
    const [inputError, setInputError] = useState('');

    // Function to fetch car parts from backend
    const fetchCarParts = async () => {
        try {
            const response = await fetch('/api/car_parts/');
            if (!response.ok) {
                throw new Error('Failed to fetch car parts');
            }
            const data = await response.json();
            setCarParts(data); // Update the state with fetched car parts
        } catch (error) {
            console.error('Error fetching car parts:', error);
        }
    };

    // Function to handle adding a new item
    const handleAddItem = async () => {
        // Validation: Check if all fields are filled
        if (!itemName || !itemPrice || !itemImage) {
            setInputError('Please fill in all fields.');
            return;
        }

        // Clear input error
        setInputError('');

        // Add the new item to the list of items with the user's address
        const newItem = {
            id: carParts.length + 1,
            name: itemName,
            price: parseFloat(itemPrice),
            image: itemImage,
            added_by: userAddress // Store the user's address with the item
        };
        console.log(newItem);
        try {
            console.log("inside try");
            // Send POST request to backend API endpoint
            const response = await fetch('/api/add_car_part/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });
            console.log("after post");
            console.log(response);            
            console.log("after response print");

            if (!response.ok) {
                console.log("Inside response")
                throw new Error('Failed to add item');
            }
            console.log("before fetchcarparts");
            // Item added successfully, fetch updated car parts list
            fetchCarParts();
            console.log("after fetchcarparts");
            
            // Reset input fields
            setItemName('');
            setItemPrice('');
            setItemImage('');
    
            // Close the item addition sidebar
            setAddItemSidebarOpen(false);
        } catch (error) {
            console.log("inside catch");
            console.error('Error adding item:', error);
            setInputError('Failed to add item. Please try again.');
        }
    };

    const toggleAddItemSidebar = () => {
        setAddItemSidebarOpen(!addItemSidebarOpen);
        // Close the cart sidebar if it's open
        if (isCartOpen) {
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        // Fetch car parts from backend when the component mounts
        fetchCarParts();
    }, []);
    
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
        // Close the add item sidebar if it's open
        if (addItemSidebarOpen) {
            setAddItemSidebarOpen(false);
        }
    };

    const checkout = async () => {
        if (!web3) {
            console.error('Web3 not initialized!');
            return;
        }
    
        if (cart.length === 0) {
            console.log('Cart is empty. No checkout needed.');
            return;
        }
        console.log("before transaction try");
        try {
            for (const item of cart) {
                console.log('Processing item:', item);
                console.log('Current user:', userAddress);
                console.log('item added_by:', item.added_by);

            }
            for (const item of cart) {
                // Log the item details for debugging
                console.log('Processing item:', item);
    
                // Check if the `added_by` field is valid
                if (!item.added_by || !web3.utils.isAddress(item.added_by)) {
                    console.error('Invalid or missing Ethereum address for item:', item.name);
                    continue; // Skip this item and move to the next
                }
    
                const totalPriceEth = (item.price / ethPrice) * item.quantity;
                console.log('Total price in ETH for item:', item.name, totalPriceEth);
    
                // Send transaction using MetaMask
                const result = await web3.eth.sendTransaction({
                    to: item.added_by,
                    from: userAddress,
                    value: web3.utils.toWei(totalPriceEth.toString(), 'ether')
                });
    
                console.log('Transaction successful for item:', item.name, result);
            }
    
            const updatedBalanceWei = await web3.eth.getBalance(userAddress);
            const updatedBalanceEth = web3.utils.fromWei(updatedBalanceWei, 'ether');
            setUserBalance(updatedBalanceEth);
    
            setCart([]);
            setIsCartOpen(false);
    
        } catch (error) {
            console.error('Error during transactions:', error);
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
                            <img src={part.image} alt={part.name} />
                            <p>Price: ${part.price}</p>
                            {part.addedBy && <p>Added by: {part.addedBy.substring(0, 6)}...</p>}

                            <button className="add-to-cart-btn" onClick={() => addToCart(part)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Item Sidebar */}
            <div className={`add-item-sidebar ${addItemSidebarOpen ? 'open' : ''}`}>
                <div className="add-item-header">
                    <h2>Add an Item</h2>
                    <button className="close-btn" onClick={toggleAddItemSidebar}>&times;</button>
                </div>
                <div className="add-item-form">
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={itemImage}
                        onChange={(e) => setItemImage(e.target.value)}
                    />
                    {inputError && <p className="error-msg">{inputError}</p>}
                    <button className="add-item-btn" onClick={handleAddItem}>Add Item</button>
                </div>
                
            </div>

                {/* Button to toggle Add Item Sidebar */}
                <button className="add-item-icon" onClick={toggleAddItemSidebar}>+</button>


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
        
    <Footer />   
    </div>
    );
    

};

export default StorePage;
