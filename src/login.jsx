import Form from './form/Form.jsx'
import React, { createContext, useState } from 'react';
export const ThemeContext = createContext(null)

const LoginCompo = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
      setTheme((color) => (color === 'light' ? 'dark' : 'light'));
  };

  
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
              
              <div style={{position:"absolute",top:"10%",right:"5%"}}>
                  {/* <label >{theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
                  <input type="checkbox" style={{display:'none'}} name="" id="themechk" className='switch ' onChange={toggleTheme} checked={theme === 'dark'} />
                  
                  <label >{theme === "light" ? <label htmlFor="themechk" className="fas fa-sun"></label> : <label htmlFor="themechk" className="fas fa-moon"></label>}</label>

              </div>
              <Form />
          </div>
      </ThemeContext.Provider>
  );
};

export default LoginCompo;
