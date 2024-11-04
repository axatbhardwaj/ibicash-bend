// src/middleware/validation.js
import siteSchema from '../db/schemas/siteSchema.js';

export const validateSite = (req, res, next) => {
    const { error } = siteSchema.validate(req.body);
    if (error) {
        console.error('Validation error:', error.details);
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};