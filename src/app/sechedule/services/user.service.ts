import { Injectable } from '@angular/core';
import {delay, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private timeOff = [
    {
      id:1,
      name: 'Esther Howard',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },{
      id:2,
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'PTO',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },{
    id:3,
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      id:4,
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      id:5,
      name: 'Guy Hawkins',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/woman1.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      id:6,
      name: 'Ronald Richards',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/delivery-boy.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      id:7,
      name: 'Jacob Jones',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      fromDate: '2024-08-02',
      toDate:'2024-08-02',
      status: 'Approved',
      imgSrc: 'assets/woman2.png',
      statusIcon: 'assets/Green_icon.svg.png'
    }
  ];


  constructor() { }

  getUsersTimeOff(params: any): Observable<any> {
    return of(JSON.parse(JSON.stringify(this.timeOff))).pipe(
      delay(Math.random() * 1000),
      map(data => {
        return {

          data: data.slice(params.page*params.pageSize, (params.page+1)*params.pageSize),
          totalRecordsNo: data.length
        };
      })
    );
  }

  addUsersTimeOff(req:any) {
    return of(req).pipe(
      delay(Math.random() * 1000), tap(newTimeOff => {
        this.timeOff.unshift({
          id:newTimeOff.id,
          name: newTimeOff.name,
          by: 'Nadia C',
          dateSubmitted: newTimeOff.dateSubmitted,
          category: newTimeOff.category,
          timeRequested: newTimeOff.timeRequested,
          fromDate:  newTimeOff.fromDate,
          toDate:newTimeOff.toDate,
          status: newTimeOff.status,
          imgSrc: 'assets/female.png',
          statusIcon: 'assets/Green_icon.svg.png'
        });
      })
    );
  }
  updateUserTimeOff(updatedTimeOff: any) {
    return of(updatedTimeOff).pipe(
      delay(Math.random() * 1000),
      tap(updatedTimeOffData => {
        const index = this.timeOff.findIndex(item => item.id === updatedTimeOffData.id);
        if (index !== -1) {
          this.timeOff[index] = { ...updatedTimeOffData };
        }
      })
    );
  }

}
