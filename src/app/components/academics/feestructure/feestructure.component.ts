import { Component, OnInit } from '@angular/core';
import {
    IMdlTableModelItem,
    MdlDefaultTableModel
} from 'angular2-mdl';


export interface ITableItem extends IMdlTableModelItem {
    FeesName: string;
    Particular1: number;
    Particular2: number;
    Particular3: number;
    Frequency: number;
    months: string;
    // amount: number;
    // academicyear; string;
}

@Component({
  selector: 'app-feestructure',
  templateUrl: './feestructure.component.html',
  styleUrls: ['./feestructure.component.css']
})
export class FeestructureComponent implements OnInit {


         tableData:[ITableItem] = [
         {FeesName: '1& 2', Particular1:1087.50, Particular2: 150, Particular3:500, Frequency:12, months:'April',selected:true }  ,
         {FeesName: '3 & 4', Particular1:1087.50, Particular2: 150, Particular3:500, Frequency:12, months:'April', selected:true }                  
      ];




         selected:Array<ITableItem> = new Array<ITableItem>();

         public tableModel = new MdlDefaultTableModel([
            {key:'FeesName', name:'Class', sortable:true},
            {key:'Particular1', name:'Tuition fee per month', numeric:true, sortable:true},
            {key:'Particular2', name:'Science per month', numeric:true, sortable:true},
            {key:'Particular3', name:'Computer per month', numeric:true, sortable:true},
            {key:'Frequency', name:'Frequency', numeric:true, sortable:true},
            {key:'months', name:'Months', sortable:true},
            // {key:'amount', name:'Amount', numeric:true, sortable:true},
         ]);

         ngOnInit(){
            this.tableModel.addAll(this.tableData);
            this.selected = this.tableData.filter( data => data.selected);
         }

         selectionChanged($event){
            this.selected = $event.value;
         }
  constructor() { }



}
