import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { TableModel } from '../table.model';
@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  // editData: TableModel; // property to consume TableModel properties while editing form
  // isNewRow = false; // boolean to render add row


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

  // onSave(form: NgForm) {
  //   form.reset();
  // }

  // Function to add new row in a table
  // onAddSubmit(addedData: TableModel) {
  //   this.rows.push({
  //     name: addedData.name,
  //     rate: addedData.rate,
  //     quantity: addedData.quantity,
  //     basicCost: addedData.basicCost,
  //     discount: addedData.discount,
  //     discountAmt: addedData.discountAmt,
  //     finalBasicCost: addedData.finalBasicCost
  //   });
  //   this.isNewRow = false;
  // }

  // to cancel form
  // onCancel() {
  //   this.isNewRow = false;
  // }

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

    }

      Total_Basic_cost: number;
      Total_discountAmt: number;
      Total_final_Basic_Cost: number;
      Total_Tax: number;
      Final_Price: number;

    onCalc() {
      this.Total_Basic_cost = 0;
      this.Total_discountAmt = 0;
      this.Total_final_Basic_Cost = 0;
      this.Total_Tax = 0;
      this.Final_Price = 0;

        for(let a = 0; a<this.rows.length; a++) {
          this.Total_Basic_cost= this.rows[a].basicCost + this.Total_Basic_cost;
          this.Total_discountAmt = this.rows[a].discountAmt + this.Total_discountAmt;
          this.Total_final_Basic_Cost = this.rows[a].finalBasicCost + this.Total_final_Basic_Cost;
          this.Total_Tax += this.rows[a].taxAmt;
          this.Final_Price = this.Total_Basic_cost + this.Total_discountAmt + this.Total_final_Basic_Cost + this.Total_Tax;
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

    // addItem(index: number) {
    //   var currentElement = this.rows[index];  
    //   this.rows.splice(index, 0, currentElement);
    // }

}