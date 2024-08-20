import { Injectable } from '@angular/core';
import {delay, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private timeOff = [
    {
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },{
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },{
      name: 'Supercool',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/girl.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
      { name: 'Supercool',
    by: 'Nadia C',
    dateSubmitted: 'Oct 4, 2023',
    category: 'Unpaid Time Off',
    timeRequested: 'Oct 01, 2023 - 12:15am',
    status: 'Approved',
    imgSrc: 'assets/girl.png',
    statusIcon: 'assets/Green_icon.svg.png'
  },
    {
      name: 'Guy Hawkins',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/woman1.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      name: 'Ronald Richards',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/delivery-boy.png',
      statusIcon: 'assets/Green_icon.svg.png'
    },
    {
      name: 'Jacob Jones',
      by: 'Nadia C',
      dateSubmitted: 'Oct 4, 2023',
      category: 'Unpaid Time Off',
      timeRequested: 'Oct 01, 2023 - 12:15am',
      status: 'Approved',
      imgSrc: 'assets/woman2.png',
      statusIcon: 'assets/Green_icon.svg.png'
    }
  ];

  constructor() { }

  getUsersTimeOff(params: any): Observable<any> {
    return of(JSON.parse(JSON.stringify(this.timeOff))).pipe(
      delay(Math.random() * 5000),
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
      delay(Math.random() * 5000), tap(newTimeOff => {
        this.timeOff.unshift({
          name: newTimeOff.name,
          by: 'Nadia C',
          dateSubmitted: newTimeOff.dateSubmitted,
          category: newTimeOff.category,
          timeRequested: newTimeOff.timeRequested,
          status: newTimeOff.status,
          imgSrc: 'assets/female.png',
          statusIcon: 'assets/Green_icon.svg.png'
        });
      })
    );
  }
}

