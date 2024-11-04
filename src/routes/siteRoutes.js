// src/routes/siteRoutes.js
import express from 'express';
import * as siteController from '../controllers/siteController.js';
import { validateSite } from '../middleware/validation.js';

const router = express.Router();

router.post('/project_sites', validateSite, siteController.createSite);
router.get('/project_sites/:id', siteController.getSiteById);
router.put('/project_sites/:id', validateSite, siteController.updateSite);
router.delete('/project_sites/:id', siteController.deleteSite);
router.get('/project_sites/:id/multiplier', siteController.getMultiplierById);

export default router;