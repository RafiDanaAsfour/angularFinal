import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent {
  // @Output() timeOffAdded = new EventEmitter<any>();
  //
  // newTimeOff = {
  //   name: '',
  //   category: '',
  //   fromDate: '',
  //   toDate: '',
  //   status: 'Approved',
  //   imgSrc: 'assets/default-avatar.png',
  //   statusIcon: 'assets/Green_icon.svg.png'
  // };
  //
  // onSubmit() {
  //   const newTimeOffCard = {
  //     ...this.newTimeOff,
  //     dateSubmitted: new Date().toLocaleDateString(),
  //     timeRequested: `${this.newTimeOff.fromDate} - ${this.newTimeOff.toDate}`
  //   };
  //
  //   this.timeOffAdded.emit(newTimeOffCard);
  //   // Reset the form after submission
  //   this.newTimeOff = {
  //     name: '',
  //     category: '',
  //     fromDate: '',
  //     toDate: '',
  //     status: 'Approved',
  //     imgSrc: 'assets/default-avatar.png',
  //     statusIcon: 'assets/Green_icon.svg.png'
  //   };
  // }
}
