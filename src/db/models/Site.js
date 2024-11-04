// src/db/models/Site.js
import { supabase } from '../../config/supabase.js';

export class Site {
    static async create(siteData) {
        const { data, error } = await supabase
            .from('project_sites')
            .insert([siteData]);
        return { data, error };
    }

    static async getById(id) {
        const { data, error } = await supabase
            .from('project_sites')
            .select('*')
            .eq('id', id)
            .single();
        return { data, error };
    }

    static async update(id, siteData) {
        const { data, error } = await supabase
            .from('project_sites')
            .update(siteData)
            .eq('id', id);
        return { data, error };
    }

    static async delete(id) {
        const { data, error } = await supabase
            .from('project_sites')
            .delete()
            .eq('id', id);
        return { data, error };
    }

    static async getMultiplierById(id) {
        const { data, error } = await supabase
            .from('project_sites')
            .select('multiplier')
            .eq('id', id)
            .single();
        return { data, error };
    }
}