import { Component, OnInit } from '@angular/core';
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

  changePage(page: number): void {
    this.currentPage = page;
    this.initData();
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initData()

  }
  initData(){
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

  handleTimeOffAdded(newTimeOff: any) {

    this.initData();
    this.showAddTimeOffModal= false
    this.closeModal();
  }
}
