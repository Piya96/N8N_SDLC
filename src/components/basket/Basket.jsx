+++ src/components/basket/Basket.jsx
@@ function Basket(props) {
   const [promoCode, setPromoCode] = useState('');

   const handlePromoCodeChange = (e) => {
     setPromoCode(e.target.value);
   };
@@ return (
       <div className="promo-code-container">
         <label htmlFor="promoCode">Promo Code</label>
         <input
           id="promoCode"
           type="text"
           value={promoCode}
           onChange={handlePromoCodeChange}
           placeholder="Enter promo code"
         />
       </div>