import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const GradientWrapper = ({
  colors,
  styles,
  children,
  className,
}: {
  styles?: any;
  colors: string[];
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <LinearGradient
      style={styles}
      className={className}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={colors}>
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
