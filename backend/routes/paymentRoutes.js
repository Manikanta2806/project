const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const router = express.Router()

router.post("/create-payment-intent",async (requestAnimationFrame,res)=>{
    try{
        const {amount,customerName , customerEmail,address}=req.body

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency:"inr",
            payment_method_types:["card"],
            description:"E-commerce Product Purchase",
            shipping:{
                name: customerName,
                address:{
                    line1:address.line1,
                    city:address.city,
                    postal_code: address.postal_code,
                    country:"IN",
                },
            },
            metadata:{
                customer_email:customerEmail,
                transaction_purpose_code: "P0108",
            },
        });
        res.json({clientSecret:paymentIntent.client_secret})
    }
    catch(err){
        console.log("stripe error",err)
        res.status(500).json({message:error.message});
    }
});

module.exports=router;