import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };
  const iconSize = { sm: 16, md: 20, lg: 24 };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-primary rounded-lg p-1.5">
        <Leaf className="text-primary-foreground" size={iconSize[size]} />
      </div>
      {showText && (
        <span className={`font-display font-bold text-foreground ${sizeClasses[size]}`}>
          TasteHealth
        </span>
      )}
    </div>
  );
};

export default Logo;
