// function for payment form submission
// express-validator
import { body, validationResult } from "express-validator"

export const paymentFormSubmit = [
    // validation chain
    // 1. name, email, phone number
    // 2. address, zip code, city, country
    // 3. e-money number, e-money pin
    body("name", "please enter your name")
        .notEmpty()
        .trim()
        .escape(),
    body("email", "please enter your email")
        .notEmpty()
        .trim()
        .isEmail()
        .withMessage("wrong format")
        .escape(),
    body("phone", "please enter your phone number")
        .notEmpty()
        .trim()
        .isNumeric()
        .escape(),
    body("address", "please enter your delivery address")
        .notEmpty()
        .trim()
        .isAlphanumeric()
        .withMessage("please enter a valid address")
        .escape(),
    body("zipcode", "please enter your zip code")
        .trim()
        .isPostalCode("any")
        .withMessage("invalid zip code")
        .escape(),
    body("city", "please enter your city name")
        .trim()
        .notEmpty()
        .escape(),
    body("country", "please enter your country name")
        .trim()
        .notEmpty()
        .escape(),
    async function (req: any, res: any, next: any) {
        try {

            // validation errors
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.json({ errors: errors.array() });
                return;
            }

            // no errors
            res.json("payment confirmed");
        }
        catch (error) {
            return next(error);
        };
    }
];