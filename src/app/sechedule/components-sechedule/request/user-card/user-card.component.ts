import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  showAddTimeOffModal: boolean = false;

  @Input() userData!: {
    id?: number;
    name: string;
    by: string;
    dateSubmitted: string;
    category: string;
    timeRequested: string;
    status: string;
    imgSrc: string;
    statusIcon: string;
  };

  @Output() editCard = new EventEmitter<any>();
  @Output() deleteCard = new EventEmitter<any>();


  // onEdit() {
  //   this.openModal();
  //   // this.editCard.emit(this.userData);
  // }
  //
  // onDelete() {
  //   this.deleteCard.emit();
  // }
  //
  // handleEditTimeOff($event: any) {
  //   this.closeModal();
  // }
  // openModal() {
  //   this.showAddTimeOffModal = true;
  // }
  //
  // closeModal() {
  //   this.showAddTimeOffModal = false;
  // }

  onEdit() {
    this.showAddTimeOffModal = true;
  }

  onDelete() {

    this.deleteCard.emit(this.userData);
  }

  handleEditTimeOff($event: any) {
    this.editCard.emit(this.userData);
    this.closeModal();
  }

  openModal() {
    this.showAddTimeOffModal = true;
  }

  closeModal() {
    this.showAddTimeOffModal = false;
  }
}
