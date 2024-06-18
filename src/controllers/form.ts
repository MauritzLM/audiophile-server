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
    body("phone", "please enter your phone number")
        .trim()
        .isNumeric()
        .escape(),
    body("address", "please enter your delivery address")
        .trim()
        .isAlphanumeric()
        .escape(),
    body("zipCode", "please enter your zip code")
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
    body("eMoneyNum", "invalid number")
        .if((value, { req }) => req.body.paymentMethod === "e-money")
        // add function here to validate e-money details   
        .isNumeric()
        .isLength({ min: 9, max: 9 })
        .trim()
        .escape(),
    body("eMoneyPin", "invalid pin")
        .if((value, { req }) => req.body.paymentMethod === "e-money")
        .isNumeric()
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
            res.json("payment confirmed");
        }
        catch (error) {
            return next(error);
        };
    }
];