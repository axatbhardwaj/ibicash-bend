import { supabase } from '../../config/supabase'

async function createTable() {
    const { data, error } = await supabase
        .from('sites')
        .createTable({
            id: 'VARCHAR PRIMARY KEY',
            name: 'VARCHAR',
            description: 'VARCHAR',
            siteType: 'VARCHAR',
            siteVisibility: 'VARCHAR',
            surfaceAreaKm2: 'VARCHAR',
            countryCode: 'VARCHAR',
            interventionStartYear: 'VARCHAR',
            stage: 'VARCHAR',
            preInterventionLandUse: 'VARCHAR',
            interventionType: 'VARCHAR',
            postInterventionLandCover: 'VARCHAR',
            siteManagement: 'VARCHAR',
            siteOwnership: 'VARCHAR',
            goals: 'VARCHAR',
            supportSought: 'VARCHAR',
            website: 'VARCHAR',
            contactEmail: 'VARCHAR',
            landTenureUrl: 'VARCHAR',
            photoIds: 'VARCHAR',
            customFields: 'VARCHAR',
            customLinkUrl: 'VARCHAR',
            customLinkText: 'VARCHAR',
            donateUrl: 'VARCHAR',
            analysis: 'VARCHAR',
            isFeatured: 'VARCHAR',
            createdAt: 'VARCHAR',
            updatedAt: 'VARCHAR',
            permissions: 'VARCHAR',
            polygon_type: 'VARCHAR',
            polygon: 'VARCHAR',
            multiplier: 'VARCHAR'
        })

    if (error) {
        console.error('Error creating table:', error)
    } else {
        console.log('Table created successfully:', data)
    }
}

createTable()