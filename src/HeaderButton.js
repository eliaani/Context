import React, { useContext } from 'react';
import { buttonThemes } from './App';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button style={buttonThemes[theme]}>Button</button>
    </div>
  );
}

export default HeaderButton;
