import { Router } from "express";
import { User } from "../models/User.model.js";
import users from "../data/Data.js";

const router = Router();

router.route('/api/products').post(async (req, res) => {
    try {
        await User.deleteMany({}); // Clear existing users
        const userSeeder = await User.insertMany(users); // Insert new users
        res.send({ userSeeder }); // Send response with inserted users
    } catch (error) {
        res.status(500).send({ error: error.message }); // Handle errors
    }
});

export default router; // Correctly export the router
