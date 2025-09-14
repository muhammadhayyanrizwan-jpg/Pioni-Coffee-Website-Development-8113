import React from 'react';
import * as FiIcons from 'react-icons/fi';

const SafeIcon = ({ icon: IconComponent, name, size = 20, className = '', ...props }) => {
  // If icon component is provided directly, use it
  if (IconComponent && typeof IconComponent === 'function') {
    return <IconComponent size={size} className={className} {...props} />;
  }

  // If name is provided, try to get icon from FiIcons
  if (name && FiIcons[name]) {
    const Icon = FiIcons[name];
    return <Icon size={size} className={className} {...props} />;
  }

  // Fallback to alert triangle
  const FallbackIcon = FiIcons.FiAlertTriangle;
  return <FallbackIcon size={size} className={className} {...props} />;
};

export default SafeIcon;