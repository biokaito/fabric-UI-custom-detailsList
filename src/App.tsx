import React from 'react';
import logo from './logo.svg';
import CustomTable from './components/CustomTable'
import DetailsList from './components/DetailsList'
import './App.css';
import obj from './components/define'
import { HighlightSpanKind } from 'typescript';

function App() {  
  
  return (
    <div className="App">
      <CustomTable 
        //items={myItems}
        // myItems={myItems}
        // myColumns={myColumns}

      />
      <DetailsList /> 
    </div>
  );
}

export default App;
