import React, {useContext, useState} from "react";
import CartContext from "./cartContext";


export default function AllProducts(){
  const products = [

    { id: 1, name: 'Smartwatch', price: 4999, description: 'Fitness tracker with heart rate monitor', category: 'Electronics', subCategory: 'Gadgets', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 2, name: 'Bluetooth Speaker', price: 2999, description: 'Portable speaker with surround sound', category: 'Electronics', subCategory: 'Gadgets', inStock: false, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 3, name: 'VR Headset', price: 6999, description: 'Virtual reality headset for immersive experiences', category: 'Electronics', subCategory: 'Gadgets', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 4, name: 'Smartphone', price: 25000, description: 'Latest model with high-resolution camera', category: 'Electronics', subCategory: 'Mobiles', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 5, name: 'Tablet', price: 15000, description: '10-inch display with powerful processor', category: 'Electronics', subCategory: 'Mobiles', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 6, name: 'Feature Phone', price: 1500, description: 'Basic phone with long battery life', category: 'Electronics', subCategory: 'Mobiles', inStock: false, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 7, name: 'Leather Jacket', price: 8000, description: 'Premium leather jacket for men', category: 'Clothing', subCategory: 'Men', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 8, name: 'Casual T-Shirt', price: 500, description: 'Comfortable cotton T-shirt', category: 'Clothing', subCategory: 'Men', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 9, name: 'Jeans', price: 2000, description: 'Slim-fit jeans with stretch', category: 'Clothing', subCategory: 'Men', inStock: false, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 10, name: 'Evening Dress', price: 3000, description: 'Elegant dress for special occasions', category: 'Clothing', subCategory: 'Women', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 11, name: 'Summer Top', price: 700, description: 'Light and breezy top for summer', category: 'Clothing', subCategory: 'Women', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 12, name: 'Yoga Pants', price: 1200, description: 'Comfortable yoga pants for workout', category: 'Clothing', subCategory: 'Women', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 13, name: 'Backpack', price: 1500, description: 'Spacious backpack for travel', category: 'Accessories', subCategory: 'Bags', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 14, name: 'Handbag', price: 2500, description: 'Stylish handbag for daily use', category: 'Accessories', subCategory: 'Bags', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 15, name: 'Gym Bag', price: 1200, description: 'Water-resistant gym bag', category: 'Accessories', subCategory: 'Bags', inStock: false, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 16, name: 'Digital Watch', price: 2000, description: 'Multifunction digital watch', category: 'Accessories', subCategory: 'Watches', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 17, name: 'Analog Watch', price: 3500, description: 'Classic analog wristwatch', category: 'Accessories', subCategory: 'Watches', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 18, name: 'Smartwatch', price: 15000, description: 'Premium smartwatch with fitness tracking', category: 'Accessories', subCategory: 'Watches', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 19, name: 'Aviator Sunglasses', price: 2000, description: 'Stylish aviator sunglasses', category: 'Accessories', subCategory: 'Sunglasses', inStock: true, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' },
    { id: 20, name: 'Wayfarer Sunglasses', price: 1500, description: 'Classic wayfarer style', category: 'Accessories', subCategory: 'Sunglasses', inStock: false, image: 'https://img.freepik.com/free-photo/delicious-ice-cream-flavours-arrangement_23-2150735420.jpg?uid=R153526573&ga=GA1.1.1221977940.1718963261&semt=ais_hybrid' }
  ];
  


    const [product, setProduct] = useState(products);
    const {addToCart} = useContext(CartContext);
    return (
      <>
      <h2>Welcome to Products Section</h2>
           <div className='products'>
                
                {product.map((item)=>(
                <div key={item.id} >
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <h4>Price: ${item.price}</h4>
                  <button onClick={()=>addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
           
            </>
           
    )
    
  }

  
      

  
        
  