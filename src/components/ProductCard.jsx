import Button from './button.jsx';

function ProductCard({ product }) {
  return (

    
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info"> 
        <span>Php {product.price}</span>
        <h5>{product.name}</h5>
        <h6>{product.description}</h6>
      </div >
      <div className="Button">
        <Button Product={product.buttonConsole}/>
      </div>
    </div>
  );
  
}

export default ProductCard;