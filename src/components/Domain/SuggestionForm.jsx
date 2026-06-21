import React, { useState } from 'react';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';
import { storageService } from '../../services/storageService';

/**
 * Formulário para envio de sugestões de novas afirmações.
 * Grava as sugestões localmente via storageService.
 */
export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    statement: '',
    verseReference: '',
    explanation: '',
    name: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.statement.trim() || !formData.verseReference.trim() || !formData.explanation.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Gravar no localStorage
    storageService.addSuggestion({
      statement: formData.statement.trim(),
      verseReference: formData.verseReference.trim(),
      explanation: formData.explanation.trim(),
      name: formData.name.trim() || 'Anónimo'
    });

    // Resetar formulário e exibir sucesso
    setFormData({
      statement: '',
      verseReference: '',
      explanation: '',
      name: ''
    });
    setShowSuccess(true);
    
    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card fade-in">
      {showSuccess && (
        <div className="alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Sugestão enviada com sucesso! Obrigado por partilhar.
        </div>
      )}

      {error && (
        <div style={{
          backgroundColor: 'var(--color-accent-terracotta-light)',
          border: '1px solid var(--color-accent-terracotta)',
          color: 'var(--color-accent-terracotta)',
          padding: '12px 16px',
          borderRadius: 'var(--border-radius-sm)',
          marginBottom: '20px',
          fontSize: '0.9rem'
        }}>
          {error}
        </div>
      )}

      <Input
        id="statement"
        label="Afirmação de Fé (Identidade em Deus)"
        value={formData.statement}
        onChange={(e) => handleChange('statement', e.target.value)}
        placeholder="Ex: Eu sou precioso para Deus"
        required
      />

      <Input
        id="verseReference"
        label="Referência Bíblica"
        value={formData.verseReference}
        onChange={(e) => handleChange('verseReference', e.target.value)}
        placeholder="Ex: Isaías 43:4"
        required
      />

      <Input
        id="explanation"
        label="Explicação Curta ou Devocional"
        value={formData.explanation}
        onChange={(e) => handleChange('explanation', e.target.value)}
        placeholder="Explique o fundamento bíblico desta verdade na nossa vida cotidiana..."
        required
        textarea
        rows={4}
      />

      <Input
        id="name"
        label="Seu Nome (Opcional)"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        placeholder="Ex: Maria Santos"
      />

      <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '10px' }}>
        Sugerir Afirmação
      </Button>
    </form>
  );
}
