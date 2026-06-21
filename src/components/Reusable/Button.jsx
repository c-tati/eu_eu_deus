import React from 'react';

/**
 * Componente de botão genérico reutilizável.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.variant='primary'] - 'primary', 'secondary', 'outline', 'plain'
 * @param {string} [props.type='button'] - 'button', 'submit', 'reset'
 * @param {Function} [props.onClick]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className='']
 */
export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const getButtonClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn btn-primary';
      case 'secondary':
        return 'btn btn-secondary';
      case 'outline':
        return 'btn btn-outline';
      case 'plain':
        return '';
      default:
        return 'btn';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
