import { Router } from "express";
import { User } from "../models/User.model.js";
import { Product } from "../models/product.models.js";
import users from "../data/Data.js";
import products from "../data/Products.js";
import asynchandler from "express-async-handler"
import {login, profile, profileUpdate, register} from "../Controllers/user.controllers.js";
import authMiddleware from "../middleware/auth.middleware.js";
import { Products, Productsid } from "../Controllers/product.controllers.js";
import { order, orderPayment } from "../Controllers/order.controllers.js";

const router = Router();

router.route('/api/users').post(asynchandler(async (req, res) => {
    try {
        await User.deleteMany({}); // Clear existing users
        const userSeeder = await User.insertMany(users); // Insert new users
        res.send({ userSeeder }); // Send response with inserted users
    } catch (error) {
        res.status(500).send({ error: error.message }); // Handle errors
    }
}));


router.route('/api/products').post(asynchandler(async (req, res) => {
    try {
        await Product.deleteMany({}); // Clear existing users
        const productSeeder = await Product.insertMany(products); // Insert new users
        res.send({ productSeeder }); // Send response with inserted users
    } catch (error) {
        res.status(500).send({ error: error.message }); // Handle errors
    }
}));

router.route('/api/login').post(login);

router.route("/api/register").post(register);

router.route("/api/profile").get(authMiddleware,profile);

router.route("/api/profile").put(authMiddleware,profileUpdate);



router.route("/").get(Products);

router.route("/:id").get(Productsid);



router.route("/orders").post(authMiddleware,order);

router.route("/:id/orders").put(authMiddleware,orderPayment)


export default router; // Correctly export the router
