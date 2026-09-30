/**
 * Supabase Client & Data Integration Layer with LocalStorage Fallback
 */

const DEFAULT_SUPABASE_CONFIG = {
  endpoint: 'https://h7LsDptsrC5JGP9Fnk2igg.supabase.co/rest/v1/',
  anonKey: 'sb_publishable_h7LsDptsrC5JGP9Fnk2igg_GvFWyKSp',
  secretKey: ''
};

class SupabaseClient {
  constructor() {
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      const saved = localStorage.getItem('compfast_supabase_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Erro ao carregar configuracao do Supabase local:', e);
    }
    return { ...DEFAULT_SUPABASE_CONFIG };
  }

  saveConfig(endpoint, anonKey, secretKey) {
    let cleanUrl = endpoint.trim();
    if (!cleanUrl.endsWith('/')) {
      cleanUrl += '/';
    }
    if (!cleanUrl.endsWith('rest/v1/')) {
      if (cleanUrl.endsWith('.supabase.co/')) {
        cleanUrl += 'rest/v1/';
      }
    }

    this.config = {
      endpoint: cleanUrl,
      anonKey: anonKey.trim(),
      secretKey: secretKey ? secretKey.trim() : ''
    };

    localStorage.setItem('compfast_supabase_config', JSON.stringify(this.config));
  }

  getHeaders() {
    const key = this.config.secretKey || this.config.anonKey;
    return {
      'apikey': this.config.anonKey || DEFAULT_SUPABASE_CONFIG.anonKey,
      'Authorization': `Bearer ${key || DEFAULT_SUPABASE_CONFIG.anonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }

  async fetchTable(tableName) {
    if (!this.config.endpoint || this.config.endpoint.includes('https://.supabase.co')) {
      return null;
    }

    try {
      const response = await fetch(`${this.config.endpoint}${tableName}?select=*`, {
        method: 'GET',
        headers: this.getHeaders()
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.warn(`Supabase HTTP ${response.status} em ${tableName}`);
        return null;
      }
    } catch (err) {
      console.warn(`Falha na requisição Supabase para ${tableName}:`, err);
      return null;
    }
  }

  async insertRow(tableName, rowData) {
    if (!this.config.endpoint || this.config.endpoint.includes('https://.supabase.co')) {
      return null;
    }

    try {
      const response = await fetch(`${this.config.endpoint}${tableName}`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(rowData)
      });

      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data[0] : data;
      } else {
        console.warn(`Erro ao inserir na tabela ${tableName}:`, await response.text());
        return null;
      }
    } catch (err) {
      console.warn(`Erro de conexão ao inserir em ${tableName}:`, err);
      return null;
    }
  }

  async updateRow(tableName, id, rowData) {
    if (!this.config.endpoint || this.config.endpoint.includes('https://.supabase.co')) {
      return null;
    }

    try {
      const response = await fetch(`${this.config.endpoint}${tableName}?id=eq.${id}`, {
        method: 'PATCH',
        headers: this.getHeaders(),
        body: JSON.stringify(rowData)
      });

      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data[0] : data;
      } else {
        console.warn(`Erro ao atualizar na tabela ${tableName}:`, await response.text());
        return null;
      }
    } catch (err) {
      console.warn(`Erro de conexão ao atualizar em ${tableName}:`, err);
      return null;
    }
  }

  async deleteRow(tableName, id) {
    if (!this.config.endpoint || this.config.endpoint.includes('https://.supabase.co')) {
      return null;
    }

    try {
      const response = await fetch(`${this.config.endpoint}${tableName}?id=eq.${id}`, {
        method: 'DELETE',
        headers: this.getHeaders()
      });

      return response.ok;
    } catch (err) {
      console.warn(`Erro ao deletar linha de ${tableName}:`, err);
      return false;
    }
  }
}

// Global instance
window.supabaseClient = new SupabaseClient();
