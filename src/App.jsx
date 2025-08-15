import Product from './components/ProductCard';
import Header from './components/header.jsx';
import Highlight from './components/highlight.jsx';
import Buttom from './components/buttom.jsx';

function App() {
  
    const items = [
        {
        id: 0,
        image: "Iphone16G.jpg",
        name: "Iphone 16",
        description: "Sell or swap my Iphone 16 (Green) 256GB",
        price: '45,000',
        buttonConsole: "Successfully bought an Iphone 16 (Green)",
        },

        {
        id: 1,
        image: "Iphone11.jpg",
        name: "Iphone 11",
        description: "Iphone 11 (Green) 128GB",
        price: '11,200',
        buttonConsole: "Successfully bought an Iphone 11 (Green)",
        },

        {
        id: 2,
        image: "Iphone12.jpg",
        name: "Iphone 12",
        description: "Iphone 12 Mint Green 256GB",
        price: '12,000',
        buttonConsole: "Successfully bought an Iphone 12 (Mint Green)",
        },

        {
        id: 3,
        image: "Iphone13.jpg",
        name: "Iphone 13",
        description: "Iphone 13 White 128GB | 91% Battery Health",
        price: '17,500',
        buttonConsole: "Successfully bought an Iphone 13 (White)",
        },

        {
        id: 4,
        image: "Iphone13G.jpg",
        name: "Iphone 13 (Green)",
        description: "Iphone 13 (Green) 128GB",
        price: '16,000',
        buttonConsole: "Successfully bought an Iphone 13 (Green)",
        },

        {
        id: 5,
        image: "Iphone14B.jpg",
        name: "Iphone 14 (Blue)",
        description: "Iphone 14 (Blue) 128GB",
        price: '19,999',
        buttonConsole: "Successfully bought an Iphone 14 (Blue)",
        },

         {
        id: 6,
        image: "Iphone14Pro.jpg",
        name: "Iphone 14 Pro",
        description: "Iphone 14 Pro White 512GB",
        price: '36,600',
        buttonConsole: "Successfully bought an Iphone 14 Pro (White) 512GB",
        },

        {
        id: 7,
        image: "Iphone15B.jpg",
        name: "Iphone 15",
        description: "Iphone 15 (Blue) 128GB",
        price: '31,000',
        buttonConsole: "Successfully bought an Iphone 15 (Blue) 128GB",
        },

         {
        id: 8,
        image: "Iphone16Blue.jpg",
        name: "Iphone 16",
        description: "Iphone 16 (Blue) 128GB",
        price: '52,000',
        buttonConsole: "Successfully bought an Iphone 16 (Blue) 128GB",
        },

         {
        id: 9,
        image: "Iphone16e.jpg",
        name: "Iphone 16E",
        description: "Iphone 16E (White) 128GB",
        price: '29,000',
        buttonConsole: "Successfully bought an Iphone 16E (White) 128GB",
        },
    ]

     const listItems = items.map((item) => (
    <Product key={item.id} product={item} />))
   
    return (
        <div className="BaseContainer">
            <Header />
            <div className="highlighted">
                <Highlight />
            </div>
            <div className='ItemList'>
                <h4>Newly Listed</h4>
                <ul className='listPerItem'>{listItems}</ul>
            </div>
             <div className='BottomPart'>
                <Buttom />
             </div>
        </div>
        )
    
};


export default App
