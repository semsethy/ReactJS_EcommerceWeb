import React, { useEffect } from 'react';
import './Checkout.css';
import Swal from 'sweetalert2'; // Import SweetAlert2

const PayPalButton = ({ total }) => {
  useEffect(() => {
    // Make sure PayPal SDK is loaded
    if (window.paypal) {
      // Initialize the PayPal buttons only if they have not been initialized already
      if (!document.getElementById("paypal-button-container").hasChildNodes()) {
        window.paypal.Buttons({
          createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2), // Amount to be paid
                  },
                },
              ],
            });
          },
          onApprove(data, actions) {
            return actions.order.capture().then((details) => {
              // Show a SweetAlert2 popup with the total amount
              Swal.fire({
                title: 'Transaction Complete!',
                text: `Thank you for your purchase of $${total.toFixed(2)}!`,
                icon: 'success',
                confirmButtonText: 'Okay'
              });
            });
          },
          onError(err) {
            console.error("PayPal Checkout error:", err);
          },
        }).render('#paypal-button-container'); // Ensure rendering inside the specific container
      }
    } else {
      console.error("PayPal SDK is not loaded.");
    }
  }, [total]); // Re-run when total changes

  return (
    <>
      <div className='col-12'>
        <div className='row'>
          
          <div className='col-6'>
            <div className="mt-6">
              
              <form className="flex flex-col gap-y-4">
                <div className="flex flex-col">
                  <label className="font-medium">Full Name</label>
                  <input type="text" className="border border-gray-300 p-2 rounded-md" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Email Address</label>
                  <input type="email" className="border border-gray-300 p-2 rounded-md" required />
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Shipping Address</label>
                  <textarea className="border border-gray-300 p-2 rounded-md" required></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="font-medium">Credit Card Information</label>
                  <input type="text" className="border border-gray-300 p-2 rounded-md" placeholder="XXXX-XXXX-XXXX-XXXX" required />
                </div>

                <button type="submit" className="bg-primary text-white p-2 rounded-md mt-4">
                  Place Order
                </button>
              </form>
            </div>
          </div>
          <div id="paypal-button-container" className="col-6 pt-5"></div>
        </div>
      </div>
    </>
  ); // Container for PayPal button
};

export default PayPalButton;
