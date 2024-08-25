import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  activeTab: string = '';
  timeOff: any[] = [];
  loading: boolean = true;
  showAddTimeOffModal: boolean = false;

  currentPage = 0;
  pageSize = 5;
  totalRecords=0;
  //
  selectedTimeOff: any = null;

  //
  changePage(page: number): void {
    this.currentPage = page;
    this.initData();
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initData()

  }
  initData($event?: any){
    this.loading = true;
    const params = {
      page: this.currentPage,
      pageSize: this.pageSize
    }
    this.userService.getUsersTimeOff(params).subscribe(
      (res: any) => {
        this.loading = false;
        this.timeOff = res.data;
        this.totalRecords = res.totalRecordsNo;
      }
    );
  }

  selectTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'add-time-off') {
      this.openModal();
    }
  }

  openModal() {
    this.showAddTimeOffModal = true;
  }

  closeModal() {
    this.showAddTimeOffModal = false;
  }


  private deletedTimeOff: any;


  handleDeleteTimeOff(editedTimeOff: any) {

      const index = this.timeOff.findIndex(t => t.id === this.deletedTimeOff.id);
      if (index !== -1) {
        this.timeOff.splice(index, 1);
      }


  }

  handleTimeOffAdded(updatedTimeOff: any) {
    this.initData();
    this.closeModal();
  }



}
