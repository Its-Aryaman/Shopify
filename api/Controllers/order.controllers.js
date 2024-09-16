import AsyncHandler from "express-async-handler";
import { Order } from "../models/Orders.model.js";



const order = AsyncHandler(async(req,res)=> {
    // console.log("reached");

    const {orderItems,
        shippingAddress,
        PaymentMethod,
        shippingPrice,
        totalPrice,
        taxPrice,
        price
    }= req.body;


    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error("no order items found");
        
    }
    

    const order = new Order({
        orderItems,
        shippingAddress,
        PaymentMethod,
        shippingPrice,
        totalPrice,
        taxPrice,
        price,
        user: req.id
    })

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);


});





const orderPayment = AsyncHandler( async(req,res)=> {
    

    const order=await Order.findById(req.params.id);
        
        if(!order){
            res.status(401);
            throw new Error("order not found");
        }

    order.isPaid=true;
    order.paidAt=Date.now();
    order.PaymentResult={
        id:req.body.id,
        status:req.body.status,
        updated_time:req.body.updated_time,
        email:req.body.email
    }

    const updatedorder=await order.save();

    res.status(200).json(updatedorder);


    });



// asyncHandler(async (req, res) => {
//           const order = await Order.findById(req.params.id).populate(
//             "user",
//             "name email"
//           );
//           if (order) {
//             res.status(200).json(order);
//           } else {
//             res.status(404);
//             throw new Error("Order Not Found");
//           }
//         })
//       );

    

    





export {order,orderPayment}