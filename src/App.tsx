import React from 'react';
import CustomTable from './components/CustomTable'
import './App.css';
import querystring from 'querystring'

class App extends React.Component {  
  
  public render(){
    const itemsRaw : string[] = [
      '?id=1&name=0605044440550_VomiNha_1.jpg&validVersion=02&nextExaminationDate=20%2F01%2F2021',
      '?id=2&name=0605044440550_VomiNha_1.jpg&validVersion=03&nextExaminationDate=21%2F01%2F2021',
      '?id=3&name=0605044440550_VomiNha_1.jpg&validVersion=04&nextExaminationDate=22%2F01%2F2021',
      '?id=4&name=0605044440550_VomiNha_1.jpg&validVersion=05&nextExaminationDate=23%2F01%2F2021',
      '?id=5&name=0605044440550_VomiNha_1.jpg&validVersion=01&nextExaminationDate=24%2F01%2F2021',
      '?id=6&name=0605044440550_VomiNha_1.jpg&validVersion=06&nextExaminationDate=25%2F01%2F2021',
      '?id=7&name=0605044440550_VomiNha_1.jpg&validVersion=07&nextExaminationDate=26%2F01%2F2021',
      '?id=8&name=0605044440550_VomiNha_1.jpg&validVersion=08&nextExaminationDate=27%2F01%2F2021',
      '?id=9&name=0605044440550_VomiNha_1.jpg&validVersion=09&nextExaminationDate=28%2F01%2F2021',
      '?id=10&name=0605044440550_VomiNha_1.jpg&validVersion=10&nextExaminationDate=29%2F01%2F2021',
    ]
    const itemsList: any[] = []
    itemsRaw.forEach(element => {
      const el = querystring.parse(element)
      itemsList.push(el)
    });
    const columns: any[] = [
      { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
      { key: 'column2', name: 'Valid Version', fieldName: 'validVersion', minWidth: 100, maxWidth: 200, isResizable: true,isSortedDescending: false, isSorted: false },
      { key: 'column3', name: 'Next Examination Date', fieldName: 'nextExaminationDate', minWidth: 150, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
    ]
    console.log(itemsList)
    return (
      
      <div className="App">
        <CustomTable 
          items={itemsList}
          columns={columns}
        />
      </div>
    );
  }
}

export default App;
