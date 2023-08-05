import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message: string = '';
  ngOnInit(): void {
    this.checkTime();
  }

  public checkTime(): void {
    let date = new Date();
    let currentTime = date.getHours();

    console.log(currentTime)
    if (currentTime>= 0 && currentTime < 12) {
      this.message = 'Good Morning!';
    } else if (currentTime>=12 && currentTime < 17) {
      this.message = 'Good Afternoon!';
    } else if(currentTime>=17 && currentTime <19){
      this.message = 'Good Evening!';
    }
    else {
      this.message = 'Good Night!';
    }
  }

}
