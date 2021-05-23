import React from 'react';
import logo from './logo.svg';
import CustomTable from './components/CustomTable'
import DetailsList from './components/DetailsList'
import './App.css';
import obj from './components/define'
import { HighlightSpanKind } from 'typescript';

function App() {  
  const items: any[] =[
    {id: 1,name: '0605044440550_VomiNha_1.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
    {id: 2,name: '0605044440550_VomiNha_2.jpg', validVersion: '02', nextExaminationDate: '22/01/2021'},
    {id: 3,name: '0605044440550_VomiNha_3.jpg', validVersion: '02', nextExaminationDate: '23/01/2021'},
    {id: 4,name: '0605044440550_VomiNha_4.jpg', validVersion: '02', nextExaminationDate: '24/01/2021'},
    {id: 5,name: '0605044440550_VomiNha_5.jpg', validVersion: '02', nextExaminationDate: '25/01/2021'},
    {id: 6,name: '0605044440550_VomiNha_6.jpg', validVersion: '02', nextExaminationDate: '26/01/2021'},
    {id: 7,name: '0605044440550_VomiNha_7.jpg', validVersion: '02', nextExaminationDate: '27/01/2021'},
    {id: 8,name: '0605044440550_VomiNha_8.jpg', validVersion: '02', nextExaminationDate: '28/01/2021'},
    {id: 9,name: '0605044440550_VomiNha_9.jpg', validVersion: '02', nextExaminationDate: '29/01/2021'},
    {id: 10,name: '0605044440550_VomiNha_10.jpg', validVersion: '02', nextExaminationDate: '30/01/2021'},
  ]
  const columns: any[] = [
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
    { key: 'column2', name: 'Valid Version', fieldName: 'validVersion', minWidth: 100, maxWidth: 200, isResizable: true,isSortedDescending: false, isSorted: false },
    { key: 'column3', name: 'Next Examination Date', fieldName: 'nextExaminationDate', minWidth: 150, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
  ]
  return (
    <div className="App">
      <CustomTable 
        items={items}
        columns={columns}
      />
      <DetailsList /> 
    </div>
  );
}

export default App;
