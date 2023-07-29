const {CandyPay} = require('@candypay/checkout-sdk')

const paymentHandler = async (req, res) => {
  try {
    // items = [
    //   {
    //     "name": "Solana Shades",
    //     "price": 0.001,
    //     "image": "https://imgur.com/M0l5SDh.png",
    //     "quantity": 1,
    //     "size": "9"
    //   }
    // ]
    console.log(req.body)
    const session = await _candyPay.session.create({
      success_url: `${process.env.STATIC_URL}/success`,
      cancel_url: `${process.env.STATIC_URL}/failure`,
      // additional SPL tokens, SOL and USDC are the supported tokens by default
      items: req.body.items,
      shipping_fees: 0.001,
    });
    
    return res.status(200).json(session);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error creating session",
    });
  }
};

const _candyPay = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY,
    public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY,
  },
  network: "devnet",
  config: {
    collect_shipping_address: false,
  },
});

module.exports = {
  paymentHandler,
}