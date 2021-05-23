import React, { Component, ReactElement } from 'react';
import { Link } from '@fluentui/react/lib/Link';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { IconButton } from '@fluentui/react/lib/Button';
import { DetailsList, IColumn, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import '../Style/CustomTable.css'
import { TooltipHostBase } from '@fluentui/react/lib/Tooltip';
import { Type } from 'typescript';

export interface IDetailsListCustomColumnsExampleState {
    fullItems: any[];
    sortedItems: any[];
    columns?: IColumn[];
    isSortedAscending: boolean;
    isFullItems: boolean;
    isSortedDescending: boolean;
}
initializeIcons(undefined, { disableWarnings: true });
class Table extends Component<{ items: any[], columns?: IColumn[] }, IDetailsListCustomColumnsExampleState>{    
    constructor(props : {}){
        super(props as any)
        this.state = {
            fullItems: this.props.items,
            sortedItems : this.props.items.map(x =>{
              return x
            }),
            columns: [],
            isSortedAscending: true,
            isFullItems: false,
            isSortedDescending: false
        }
    }
    componentDidMount(){
        //console.log(this.state.fullItems)
        this.setState({
            sortedItems : this.state.sortedItems.splice(0,5),
            columns : this.props.columns
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
          columns: columns?.map(col => {
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
            columns: columns?.map(col => {
                col.isSorted = col.key === column.key;
        
                if (col.isSorted) {
                  col.isSortedDescending = isSortedDescending;
                }    
                  return col;
            }),
        });
      };
      
    public render(){
        const { ...rest } = this.props;
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
        return <Link href="#">{fieldContent}</Link>
      case 'validVersion':
        return <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center'}}>
          <span>{fieldContent}</span>
        </div>
      case 'nextExaminationDate':
        return <div style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', flexDirection: "row", fontSize: 12, marginTop: -8}}>
          <span style={{fontSize: 13}}>{fieldContent}</span>
          <IconButton href="#" width="5%" height="5%" iconProps={{ iconName: 'Edit' }} title="Edit" style={{color: 'black'}} />
        </div>
      default:
        return <span>{fieldContent}</span>
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
