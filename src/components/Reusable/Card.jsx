import React from 'react';

/**
 * Componente de Card básico para agrupar conteúdos com uma estética uniforme.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {boolean} [props.hoverable=true] - Se deve ter efeito de elevação no hover
 * @param {Function} [props.onClick]
 * @param {string} [props.className='']
 */
export default function Card({
  children,
  hoverable = true,
  onClick,
  className = '',
  ...props
}) {
  const cardStyles = {
    cursor: onClick ? 'pointer' : 'default',
  };

  return (
    <div
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`}
      onClick={onClick}
      style={cardStyles}
      {...props}
    >
      {children}
    </div>
  );
}
