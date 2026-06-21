import React from 'react';

/**
 * Componente reutilizável para inputs e caixas de texto multilinha (textarea).
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {string} [props.type='text']
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} [props.placeholder='']
 * @param {boolean} [props.required=false]
 * @param {boolean} [props.textarea=false]
 * @param {number} [props.rows=4]
 * @param {string} [props.className='']
 */
export default function Input({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  textarea = false,
  rows = 4,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label} {required && <span style={{ color: 'var(--color-accent-terracotta)' }}>*</span>}
        </label>
      )}
      
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className="form-control"
          style={{ resize: 'vertical' }}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="form-control"
          {...props}
        />
      )}
    </div>
  );
}
