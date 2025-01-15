import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NeumericTable';
  number: number = 0;
  tableArray: number[] = [];
  shownResults: Set<number> = new Set();
  userInputs: number[] = [];
  resultStatuses: Map<number, boolean | null> = new Map(); // null = not checked, true = correct, false = wrong

  generateTable() {
    this.tableArray = [];
    this.shownResults.clear();
    this.userInputs = new Array(10).fill(null);
    this.resultStatuses.clear();
    for(let i = 1; i <= 10; i++) {
      this.tableArray.push(i * this.number);
    }
  }

  checkResult(index: number) {
    if (this.userInputs[index] === undefined || this.userInputs[index] === null) return;
    
    const isCorrect = this.userInputs[index] === this.tableArray[index];
    this.resultStatuses.set(index, isCorrect);
    this.shownResults.add(index);
  }
}
 
