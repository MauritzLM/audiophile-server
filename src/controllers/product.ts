import * as db from "../db";

// product controller

// get a product
export const getProduct = async function (req: any, res: any, next: any) {
    try {
        const { name } = req.params;

        // get product using name from params
        const text = 'SELECT * FROM products WHERE slug = $1';
        const values = [name];

        const result = await db.query(text, values);

        const product = result.rows[0];

        // no product
        if (!product) {
            res.json({ error: "no product found" });
            return;
        };

        // respond with result
        res.json(product);
    }

    catch (error) {
        return next(error)
    }
};

// get a category
export const getCategory = async function (req: any, res: any, next: any) {
    try {
        const { name } = req.params;

        // get category using name
        const text = 'SELECT * FROM products WHERE category = $1';
        const values = [name];

        const result = await db.query(text, values);

        const allProducts = result.rows;

        // sort array by new
        const sortedProducts = allProducts.sort((a, b) => b.new - a.new);

        if (!allProducts) {
            res.send("No products found")
            return;
        }

        res.json(sortedProducts);

    }
    catch (error) {
        return next(error);
    }
};

// get featured products
export const getFeatured = async function (req: any, res: any, next: any) {
    try {

        const text = 'SELECT * FROM products WHERE featured = $1';
        const values = [true];

        const result = await db.query(text, values);

        const allFeatured = result.rows;

        const sortedProducts = allFeatured.sort((a, b) => b.id - a.id);

        if (!allFeatured) {
            res.send("No featured products found")
            return;
        }

        // return reversed array - (optional)
        res.json(sortedProducts);

    }
    catch (error) {
        return next(error);
    }
};