import * as db from "../db";

// create a session
export const createSession = async function (req: any, res: any, next: any) {
    try {
        // create a new session using id
        const { id } = req.body;

        // session has (id, cart contents with quantities, start date)
        const text = 'INSERT INTO session (id) VALUES ($1)';
        const values = [id];

        const result = await db.query(text, values);

        res.json(result);

    }
    catch (error) {
        return next(error);
    }
};

// resume a session
export const resumeSession = async function (req: any, res: any, next: any) {
    try {
        const { id } = req.body;

        // find session with id
        const text = 'SELECT * FROM session WHERE id = $1';
        const values = [id];

        const result = await db.query(text, values);

        // respond with cart contents / session info
        res.json(result.rows[0]);

    }
    catch (error) {
        return next(error);
    }
};


// update session cart
export const updateSession = async function (req: any, res: any, next: any) {
    try {
        const { id, cart } = req.body;

        // convert object to json
        let cart_to_json = JSON.stringify(cart);

        // update cart contents in session*
        const text = 'UPDATE session SET cart = $1 WHERE id = $2';
        const values = [cart_to_json, id];

        const result = await db.query(text, values);

        res.json(result);

    }
    catch (error) {
        return next(error);
    }
};

// end session after a certain time, if purchase completed
export const endSession = async function (req: any, res: any, next: any) {
    try {
        const { id } = req.body;

        // delete row from table*

    }
    catch (error) {
        return next(error);
    }
};