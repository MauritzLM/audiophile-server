// function for payment form submission
// express-validator
import { body, validationResult } from "express-validator"

export const paymentFormSubmit = [
    // validation chain
    body("name", "please enter your name")
        .trim()
        .notEmpty()
        .escape(),
    body("email", "wrong format")
        .trim()
        .isEmail()
        .escape(),
    body("phone", "please enter a valid phone number")
        .trim()
        .custom((value, { req }) => {
            // regex pattern for phone number
            const regex = new RegExp(/\+?\d{1,2}\s\d{3}-\d{3}-\d{3}/);

            return regex.test(value);
        })
        .escape(),
    body("address", "please enter a valid delivery address")
        .trim()
        .custom((value, { req }) => {
            // regex pattern for address
            const regex = new RegExp(/\d{1,4}\s\w+\s\w+/)

            return regex.test(value);
        })
        .escape(),
    body("zipCode", "please enter your zip code")
        .trim()
        .isPostalCode("any")
        .escape(),
    body("city", "please enter your city name")
        .trim()
        .notEmpty()
        .escape(),
    body("country", "please enter your country name")
        .trim()
        .notEmpty()
        .escape(),
    body("eMoneyNum", "invalid number")
        .if((value, { req }) => req.body.paymentMethod === "e-money")
        // add function here to validate e-money details   
        .isLength({ min: 9, max: 9 })
        .trim()
        .escape(),
    body("eMoneyPin", "invalid pin")
        .if((value, { req }) => req.body.paymentMethod === "e-money")
        .isLength({ min: 4, max: 4 })
        .trim()
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
            // clear session*

            res.json("payment confirmed");

        }
        catch (error) {
            return next(error);
        };
    }
];