// function for payment form submission
// express-validator
import { body, validationResult } from "express-validator"

export const paymentFormSubmit = [
    // validation chain
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