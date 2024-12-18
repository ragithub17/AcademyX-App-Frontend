import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FaShoppingCart className="text-richblack-25 text-4xl sm:text-5xl hover:scale-105 transition-transform duration-300" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-richblack-25">
            Cart
          </h1>
        </div>
      </div>
      <p className="border-b border-b-richblack-500 pb-2 font-semibold text-richblack-200">
        {totalItems} Course(s) in Cart
      </p>
      {total > 0 ? (
        <div className="border-2 border-richblack-600 p-8 rounded-xl mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-50 font-semibold">
          🛒 Your cart is empty! Start exploring courses now.
        </p>
      )}
    </>
  );
}

export default Cart;
