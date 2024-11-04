import Joi from 'joi';

export const siteSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    siteType: Joi.string().allow(''),
    siteVisibility: Joi.string().allow(''),
    surfaceAreaKm2: Joi.string().allow(''),
    countryCode: Joi.string().allow(''),
    interventionStartYear: Joi.string().allow(''),
    stage: Joi.string().allow(''),
    preInterventionLandUse: Joi.string().allow(''),
    interventionType: Joi.string().allow(''),
    postInterventionLandCover: Joi.string().allow(''),
    siteManagement: Joi.string().allow(''),
    siteOwnership: Joi.string().allow(''),
    goals: Joi.string().allow(''),
    supportSought: Joi.string().allow(''),
    website: Joi.string().uri().allow(''),
    contactEmail: Joi.string().email().allow(''),
    landTenureUrl: Joi.string().uri().allow(''),
    photoIds: Joi.string().allow(''),
    customFields: Joi.string().allow(''),
    customLinkUrl: Joi.string().uri().allow(''),
    customLinkText: Joi.string().allow(''),
    donateUrl: Joi.string().uri().allow(''),
    analysis: Joi.string().allow(''),
    isFeatured: Joi.string().allow(''),
    createdAt: Joi.string().allow(''),
    updatedAt: Joi.string().allow(''),
    permissions: Joi.string().allow(''),
    polygon_type: Joi.string().allow(''),
    polygon: Joi.string().allow(''),
    multiplier: Joi.string().allow('')
});

export default siteSchema;