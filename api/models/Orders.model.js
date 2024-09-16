import mongoose from "mongoose";
import { User } from "./User.model.js";


const orderItemSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: { 
        type: Number,
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});




const order_Schema = mongoose.Schema({

    user: {
        ref: "User",
        type: mongoose.Types.ObjectId,
        required: true
    },
    orderItems: [orderItemSchema],
    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        postalCode:{
            type: Number,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        country:{
        type: String,
        required: true
        },

    },
    PaymentMethod: {type: String, required: true , default: "PayPal"},
    PaymentResult:{
        id:{type: String},
        status:{type: String},
        updated_time:{type: String},
        email:{type: String}
    },
    taxPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
      paidAt: {
        type: Date,
      },
      isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
      deliveredAt: {
        type: Date,
      },
    },
    { timestamps: true }
  );



  export const Order= mongoose.model("Order",order_Schema)