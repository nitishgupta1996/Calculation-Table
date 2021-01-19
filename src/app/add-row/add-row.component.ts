import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableModel } from '../table.model';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent implements OnInit {
  @Output() addedRow = new EventEmitter<TableModel>(); // used for emitting data to the table through event binding
  @Output() cancelAdd = new EventEmitter<object>(); // used for cancel the add form

  // typed definition of add row
  tableData: TableModel = {
    name: '',
    rate: null,
    quantity: null,
    basicCost: null,
    discount: null,
    discountAmt: null,
    finalBasicCost: null,
    taxes: null,
    taxAmt: null,
    totalCost: null
  };

  constructor() { }

  ngOnInit() {
  }

  // to add a new row in table
  onSubmit() {
    this.addedRow.emit(this.tableData);
  }

  // to cancel the add form
  onCancelAdd() {
    this.cancelAdd.emit();
  }

}
