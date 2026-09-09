import React from 'react'
import { useState } from 'react'
import './Home.css'
import IV from '../assets/IV.jpg'
import pp from '../assets/pp.png'
import D from '../assets/D.jpg'
import sun from '../assets/sun.jpg'
import { useCart } from '../Context/CartContext' // Import the custom hook to access cart context
import { useEffect } from 'react'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
    const { addToCart } = useCart();
    const [popupMessage, setPopupMessage] = useState(""); // State to store the popup message
    // const MenuItems = [
    //     { _id: 1, title: "Vada Platter", price: 50, information: "Wow Vada Platter" , img: IV},
    //     { _id: 2, title: "Pani Puri Feast", price: 30, information: "Juicy Pani Puri", img: pp},
    //     { _id: 3, title: "Dosa Delight", price: 70, information: "Delicious Dosa", img: D},
    //     { _id: 4, title: "Sundae Bowl", price: 40, information: "Creamy Sundae", img: sun},
    // ];
    const [MenuItems, setMenuItems] = useState([]); // State to store menu items fetched from the backend
    const getMenu = async () => {
        try {
            const response = await fetch("http://localhost:5000/menu"); // Replace with your backend endpoint
            const data = await response.json();
            console.log(data); // Log the fetched data for debugging
            setMenuItems(data); // Store the fetched menu items in state
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };

    // Fetch menu items when the component mounts
    useEffect(() => {
        getMenu();
    }, []);

    const filteredMenuItems = MenuItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const handleAddToCart = (item) => {
        addToCart(item); // Add the item to the cart
        setPopupMessage(`${item.title} added to cart`); // Set the popup message
        setTimeout(() => setPopupMessage(""), 3000); // Clear the message after 3 seconds
    };

    return (
        <>
            <section className="home">
                <div className='left'>
                    <div className="header-container">
                        <h1>Good Food, Good Mood !!!</h1>
                        <div className="search-container">
                        <input
                                type="text"
                                placeholder="Search for food..."
                                className="search-bar"
                                value={searchQuery} // Bind input value to searchQuery state
                                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
                            />
                            <span
                                className="search-icon"
                                onClick={() => console.log("Search clicked")} // Optional: Add click functionality
                            >&#128269;</span>
                        </div>
                    </div>
                    <div className='card-container'>
                    {filteredMenuItems.length > 0 ? (
                            filteredMenuItems.map((item) => (
                         
                            <div key={item._id} className='card'>
                                <img src={`${item.img}`} width="120px" height="100px"></img>
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                    <div className='price'>{item.price}/-</div>
                                    <div className='information'>{item.information}</div>
                                        <button className='add-to-cart' onClick={() => handleAddToCart(item)}>Add +</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p> No Items Found</p>
                    )
                }
                    </div>
                </div>
            </section>
            {popupMessage && (
                <div className="popup-message">
                    {popupMessage}
                </div>
            )}
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#a2d9ff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,154.7C384,181,480,235,576,229.3C672,224,768,160,864,138.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </>
    )
}
