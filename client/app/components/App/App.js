import React, { Component } from 'react';
import HeaderVisitor from './../Header/HeaderVisitor';
import HeaderUser from './../Header/HeaderUser'

const App = ({ children }) => (
  
    
  <div>
    <HeaderVisitor />
    <main>
      {children}
    </main>

 </div>
  
);

export default App;