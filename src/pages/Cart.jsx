import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleWhatsAppOrder = () => {
    const message = `Hi🙂 I would like to order the following items from crystalchip:\n\n${cartItems
      .map((item) => `${item.title} - $${item.price}`)
      .join('\n')}\n\nTotal: $${total.toFixed(2)}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254724885343?text=${encodedMessage}`, '_blank');
  };

  const handleEmailOrder = () => {
    const subject = 'New Order from Jengi Laptops';
    const body = `Order Details:\n\n${cartItems
      .map((item) => `${item.title} - $${item.price}`)
      .join('\n')}\n\nTotal: $${total.toFixed(2)}`;
    
    window.location.href = `mailto:sales@crystalchip-limited.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-lg font-bold mt-1">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via WhatsApp</span>
                </button>
                
                <button
                  onClick={handleEmailOrder}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Order via Email</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;