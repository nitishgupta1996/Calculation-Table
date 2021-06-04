import { Component, OnInit } from '@angular/core';
import { TableModel } from '../table.model';
@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  // hide: boolean = false;

  // Json to show data inside table
  rows: TableModel[] = [
    {
      name: '',
      rate: 0,
      quantity: 0,
      basicCost:0,
      discount: 0,
      discountAmt:0,
      finalBasicCost:0,
      taxes: 0,
      taxAmt: 0,
      totalCost: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Function to delete a single row index wise
  onDelete(index: number) {
    this.rows.splice(index, 1);
    this.onCalc();
  }

  onClick(i: number) {

    //For Basic Cost
    this.rows[i].basicCost = this.rows[i].rate * this.rows[i].quantity;

    //For Discount Amount
    this.rows[i].discountAmt=(this.rows[i].basicCost * this.rows[i].discount)/100;

    //For Final Basic Cost Amount
    this.rows[i].finalBasicCost=(this.rows[i].basicCost - this.rows[i].discountAmt);

    // For Final Tax Amount
    this.rows[i].taxAmt = (this.rows[i].finalBasicCost * this.rows[i].taxes)/100;

    // For Total Cost
    this.rows[i].totalCost = this.rows[i].finalBasicCost + this.rows[i].taxAmt;

    this.onCalc();

    }

      Total_Basic_cost: number;
      Total_discount_Amt: number;
      Total_final_Basic_Cost: number;
      Total_Tax: number;
      Final_Price: number;

    onCalc() {
      this.Total_Basic_cost = 0;
      this.Total_discount_Amt = 0;
      this.Total_final_Basic_Cost = 0;
      this.Total_Tax = 0;
      this.Final_Price = 0;

        for(let a = 0; a < this.rows.length; a++) {

          this.Total_Basic_cost += this.rows[a].basicCost;
          this.Total_discount_Amt += this.rows[a].discountAmt;
          this.Total_final_Basic_Cost += this.rows[a].finalBasicCost;
          this.Total_Tax += this.rows[a].taxAmt;
          this.Final_Price = this.Total_final_Basic_Cost + this.Total_Tax;
        }
    }

    addItem() {
      this.rows.push({
        name: '',
        rate: 0,
        quantity: 0,
        basicCost: 0,
        discount: 0,
        discountAmt: 0,
        finalBasicCost: 0,
        taxes: 0,
        taxAmt: 0,
        totalCost: 0
      });
    }

    onSave(data:TableModel) {
      if(data)
         console.log(data);
    //   for(let i = 0; i < this.rows.length; i++) {
    //   if(this.rows[i].name === '' && this.rows[i].rate === null && this.rows[i].quantity === null && this.rows[i].discount === null && this.rows[i].taxes === null)
    //   console.log(data);
    // }
  }

}