import React, { Component, ReactElement } from 'react';
import { Link } from '@fluentui/react/lib/Link';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { DetailsList, IColumn, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import '../Style/CustomTable.css'
import { TooltipHostBase } from '@fluentui/react/lib/Tooltip';

export interface IDetailsListCustomColumnsExampleState {
    fullItems: any[];
    sortedItems: any[];
    columns: IColumn[];
    isSortedAscending: boolean;
    isFullItems: boolean;
    isSortedDescending: boolean;
}
initializeIcons(undefined, { disableWarnings: true });
class Table extends Component<{}, IDetailsListCustomColumnsExampleState>{    
    constructor(props : {}){
        super(props)
        this.state = {
            fullItems: [
                {id: 1,name: '0605044440550_VomiNha_1.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 2,name: '0605044440550_VomiNha_2.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 3,name: '0605044440550_VomiNha_3.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 4,name: '0605044440550_VomiNha_4.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 5,name: '0605044440550_VomiNha_5.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 6,name: '0605044440550_VomiNha_6.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 7,name: '0605044440550_VomiNha_7.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 8,name: '0605044440550_VomiNha_8.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 9,name: '0605044440550_VomiNha_9.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 10,name: '0605044440550_VomiNha_10.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
              ],
            sortedItems : [
                {id: 1,name: '0605044440550_VomiNha_1.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 2,name: '0605044440550_VomiNha_2.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 3,name: '0605044440550_VomiNha_3.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 4,name: '0605044440550_VomiNha_4.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 5,name: '0605044440550_VomiNha_5.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 6,name: '0605044440550_VomiNha_6.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 7,name: '0605044440550_VomiNha_7.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 8,name: '0605044440550_VomiNha_8.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 9,name: '0605044440550_VomiNha_9.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
                {id: 10,name: '0605044440550_VomiNha_10.jpg', validVersion: '02', nextExaminationDate: '20/01/2021'},
              ],
            columns: [],
            isSortedAscending: true,
            isFullItems: false,
            isSortedDescending: false
        }
    }
    async componentDidMount(){
        console.log(this.state.fullItems)
        await this.setState({
            sortedItems : this.state.sortedItems.splice(0,5),
            columns : [
                { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
                { key: 'column2', name: 'Valid Version', fieldName: 'validVersion', minWidth: 100, maxWidth: 200, isResizable: true,isSortedDescending: false, isSorted: false },
                { key: 'column3', name: 'Next Examination Date', fieldName: 'nextExaminationDate', minWidth: 150, maxWidth: 200, isResizable: true, isSortedDescending: false, isSorted: false },
            ]
        })
    }
    private _onColumnClickSortedItems = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns } = this.state;
        let { sortedItems } = this.state;
        let isSortedDescending = column.isSortedDescending;
    
        // If we've sorted this column, flip it.
        if (column.isSorted) {
          isSortedDescending = !isSortedDescending;
        }
    
        // Sort the items.
        sortedItems = _copyAndSort(sortedItems, column.fieldName!, isSortedDescending);
    
        // Reset the items and columns to match the state.
        this.setState({
          sortedItems: sortedItems,
          columns: columns.map(col => {
            col.isSorted = col.key === column.key;
    
            if (col.isSorted) {
              col.isSortedDescending = isSortedDescending;
            }
    
            return col;
          }),
        });
      };
      private _onColumnClickFullItems = (event: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns } = this.state;
        let { fullItems } = this.state;
        let isSortedDescending = column.isSortedDescending;
    
        // If we've sorted this column, flip it.
        if (column.isSorted) {
          isSortedDescending = !isSortedDescending;
        }
    
        // Sort the items.
        fullItems = _copyAndSort(fullItems, column.fieldName!, isSortedDescending);
    
        // Reset the items and columns to match the state.
        this.setState({
            fullItems: fullItems,
            columns: columns.map(col => {
                col.isSorted = col.key === column.key;
        
                if (col.isSorted) {
                col.isSortedDescending = isSortedDescending;
                }    
                return col;
            }),
        });
      };
      
    public render(){
        const {sortedItems, columns, fullItems, isFullItems, isSortedAscending} = this.state
        if(!isFullItems){
            return(
                <div>
                    <h3 className="headerMyTask">My Tasks</h3>
                    <DetailsList 
                        items={sortedItems} 
                        //setKey="set"
                        columns={columns}                        
                        onColumnHeaderClick={this._onColumnClickSortedItems}
                        isHeaderVisible={true}
                        onRenderItemColumn={_renderItemColumn}
                        styles={controlStyles}
                        compact={true}
                        selectionMode={SelectionMode.none}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="select row"
                    />
                    <Link  
                    onClick={()=>{
                        this.setState({
                            isFullItems: !this.state.isFullItems
                        })
                    }} className="moreButton" >More...</Link>
                </div>

            )
        }
        else{
            return(
                <div>
                    <h3 className="headerMyTask">My Tasks</h3>
                    <DetailsList 
                        items={fullItems} 
                        //setKey="set"
                        columns={columns}                        
                        onColumnHeaderClick={this._onColumnClickFullItems}
                        onRenderItemColumn={_renderItemColumn}
                        isHeaderVisible={true}
                        styles={controlStyles}
                        compact={true}
                        selectionMode={SelectionMode.none}
                    />
                    <Link  
                    onClick={()=>{
                        this.setState({
                            isFullItems: !this.state.isFullItems
                        })
                    }} className="moreButton" >Hide...</Link>
                </div>

            )
        }
    }
}

function _renderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName as keyof any] as string;
    //console.log(fieldContent)
    switch (column.fieldName) {  
      case 'name':
        return <Link href="#">{fieldContent}</Link>;
  
      default:
        return <span>{fieldContent}</span>;
    }
  }
  
function _copyAndSort<Type>(items: Type[], columnKey: string, isSortedDescending?: boolean): Type[] {
    const key = columnKey as keyof Type;
    return items.slice(0).sort((a: Type, b: Type) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

const controlStyles = {
    root: {
      maxWidth: '100%',

    },
    contentWrapper:{

    },
    focusZone :{

    }
  };
  
export default Table;
