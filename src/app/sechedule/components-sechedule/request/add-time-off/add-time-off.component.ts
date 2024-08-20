import {Component, Output, EventEmitter,} from '@angular/core';

import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent {
  @Output() timeOffAdded = new EventEmitter<any>();
  employees = ['kristin Watson', 'Esther Howard', 'Jane Cooper'];
  loading: boolean=false ;
  constructor(private userService: UserService) {}
  newTimeOff = {
    name: '',
    category: '',
    fromDate: '',
    toDate: '',
    status: 'Approved',
    comment: ''
  };
  validateForm(): boolean {
    let hasError = false;

    // Clear previous error messages
    document.getElementById('employeeError')!.textContent = '';
    document.getElementById('categoryError')!.textContent = '';
    document.getElementById('statusError')!.textContent = '';
    document.getElementById('durationError')!.textContent = '';
    document.getElementById('fromDateError')!.textContent = '';
    document.getElementById('toDateError')!.textContent = '';

    if (!this.newTimeOff.name) {
      document.getElementById('employeeError')!.textContent = 'Employee name is required.';
      hasError = true;
    }
    if (!this.newTimeOff.category) {
      document.getElementById('categoryError')!.textContent = 'Category is required.';
      hasError = true;
    }
    if (!this.newTimeOff.status) {
      document.getElementById('statusError')!.textContent = 'Status is required.';
      hasError = true;
    }
    if (!this.newTimeOff.fromDate) {
      document.getElementById('fromDateError')!.textContent = 'Start date is required.';
      hasError = true;
    }
    if (!this.newTimeOff.toDate) {
      document.getElementById('toDateError')!.textContent = 'End date is required.';
      hasError = true;
    }

    return !hasError;
  }


  onSubmit() {

    if (this.validateForm()) {

      const modal = document.querySelector('.modal') as HTMLElement;
      if (modal) {
        modal.style.display = 'none';
      }

      this.loading= true;
      const newTimeOffCard = {
        ...this.newTimeOff,
        dateSubmitted: new Date().toLocaleDateString(),
        timeRequested: `${this.newTimeOff.fromDate} - ${this.newTimeOff.toDate}`
      };

      this.userService.addUsersTimeOff(newTimeOffCard).subscribe(
        (res: any) => {
          this.loading = false;
          this.timeOffAdded.emit(newTimeOffCard);
        }
      );




    }
  }

  cancel(){
    if (this.validateForm()) {
      const newTimeOffCard = {
        ...this.newTimeOff,
        dateSubmitted: new Date().toLocaleDateString(),
        timeRequested: `${this.newTimeOff.fromDate} - ${this.newTimeOff.toDate}`
      };

      this.timeOffAdded.emit(newTimeOffCard);
    }

  }
  closeModal() {
    if (this.validateForm()) {
      const newTimeOffCard = {
        ...this.newTimeOff,
        dateSubmitted: new Date().toLocaleDateString(),
        timeRequested: `${this.newTimeOff.fromDate} - ${this.newTimeOff.toDate}`
      };

      this.timeOffAdded.emit(newTimeOffCard);
    }


    }

}
