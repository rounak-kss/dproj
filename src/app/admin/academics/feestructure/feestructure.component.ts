import { Component } from '@angular/core';

@Component({
  selector: 'app-feestructure',
  templateUrl: './feestructure.component.html',
  styleUrls: ['./feestructure.component.css']
})
export class FeestructureComponent {
    currentYear: string;
    feesNameList: string[];
    selectedFees: string;
    selectedFeesIndex: number;

       
         editFeeParticular(feesName:string, index: number){
             this.selectedFees = feesName;  
             this.selectedFeesIndex = index; 
         }

         deleteFeeParticular(feesName){
             console.log("deleteFeeParticular"+feesName);
         }

  constructor() { 
      this.currentYear = "2014-15";
      this.feesNameList = ["1&2", "3&4", "5", "6", "7", "8", "9", "10 Science", "10 Computer", "10 Economics"];
  }



}
