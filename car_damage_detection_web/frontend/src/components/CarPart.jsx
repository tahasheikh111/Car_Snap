// import React, { useState } from 'react';

// const CarPart = ({ part, onAddToCart }) => {
//     const [quantity, setQuantity] = useState(1);

//     const handleAddToCart = () => {
//         onAddToCart({ ...part, quantity });
//     };

//     return (
//         <div className="car-part">
//             <img src={part.imageUrl} alt={part.name} className="car-part-image" />
//             <div className="car-part-details">
//                 <h3>{part.name}</h3>
//                 <p>{part.description}</p>
//                 <div className="price">${part.price}</div>
//                 <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseInt(e.target.value))}
//                 />
//                 <button onClick={handleAddToCart}>Add to Cart</button>
//             </div>
//         </div>
//     );
// };

// export default CarPart;
