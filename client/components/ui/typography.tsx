import { ReactNode } from 'react';

// Text component for consistent typography
export function Text({ 
  children, 
  size = 'base', 
  className = '',
  ...props 
}: { 
  children: ReactNode; 
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
  [key: string]: any;
}) {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <p 
      className={`${sizeClasses[size]} text-gray-700 leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

// Heading component for consistent headings
export function Heading({ 
  level = 2, 
  children, 
  className = '',
  ...props 
}: { 
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const sizeClasses = {
    1: 'text-3xl md:text-4xl font-bold',
    2: 'text-2xl md:text-3xl font-bold',
    3: 'text-xl md:text-2xl font-semibold',
    4: 'text-lg md:text-xl font-semibold',
    5: 'text-base md:text-lg font-semibold',
    6: 'text-sm md:text-base font-semibold',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag 
      className={`${sizeClasses[level]} text-gray-900 leading-tight mb-4 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Container component for consistent spacing
export function Container({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div 
      className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Section component for consistent section spacing
export function Section({ 
  children, 
  className = '',
  ...props 
}: { 
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <section 
      className={`py-12 md:py-16 ${className}`}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}
