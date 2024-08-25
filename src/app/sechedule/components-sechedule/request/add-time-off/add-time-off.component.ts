import {Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';

import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-time-off',
  templateUrl: './add-time-off.component.html',
  styleUrls: ['./add-time-off.component.scss']
})
export class AddTimeOffComponent implements OnInit, OnChanges{
  @Output() timeOffAdded = new EventEmitter<any>();
  @Input() existingTimeOff: any;
  employees = ['Supercool', 'Jacob Jones','Guy Hawkins', 'Ronald Richards','kristin Watson', 'Esther Howard', 'Jane Cooper'];
  loading: boolean = false;
  timeOffForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.timeOffForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      status: ['Approved', Validators.required],
      duration: ['Full day', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      comment: ['']
    });
  }

  ngOnInit(): void {
    if (this.existingTimeOff) {
      this.timeOffForm.patchValue(this.existingTimeOff);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['existingTimeOff'] && this.existingTimeOff) {
      this.timeOffForm.patchValue(this.existingTimeOff);
    }
  }

  onSubmit() {
    if (this.timeOffForm.valid) {
      this.loading = true; // Show the loading indicator

      let updatedTimeOffCard = {
        ...this.timeOffForm.value,
        dateSubmitted: new Date().toLocaleDateString(),
        timeRequested: `${this.timeOffForm.value.fromDate} - ${this.timeOffForm.value.toDate}`
      };

      if (this.existingTimeOff) {
        updatedTimeOffCard = { ...this.existingTimeOff, ...updatedTimeOffCard };
        this.userService.updateUserTimeOff(updatedTimeOffCard).subscribe(
          (res: any) => {
            this.loading = false;
            this.timeOffAdded.emit(updatedTimeOffCard);

          },

        );
      } else {
        updatedTimeOffCard.id = new Date().getTime(); // Assign a unique ID for the new time-off entry
        this.userService.addUsersTimeOff(updatedTimeOffCard).subscribe(
          (res: any) => {
            this.loading = false;
            this.timeOffAdded.emit(updatedTimeOffCard);

          },

        );
      }
    } else {
      this.timeOffForm.markAllAsTouched();
    }
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this.loading = false;
    const modal = document.querySelector('.modal-container') as HTMLElement;
    if (modal) {
      modal.style.display = 'none';
    }
  }

}
