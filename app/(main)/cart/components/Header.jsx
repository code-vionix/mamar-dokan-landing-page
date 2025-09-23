

const Header = ({ cartItems }) => {
  return (
    <>
     <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-amber-900 font-bengali mb-2">
              আপনার শপিং কার্ট
            </h1>
            <p className="text-gray-600 font-bengali">
              {cartItems.length > 0
                ? `আপনার কার্টে ${cartItems.length}টি আইটেম রয়েছে`
                : "আপনার কার্টে কোন আইটেম নেই"}
            </p>
          </div>
      
    </>
  );
};

export default Header;