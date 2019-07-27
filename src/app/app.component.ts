import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAddTimerVisible:boolean = false;
  public time: number = 0;
  public timers: Array<number> = [];
  public isTimerFinish: boolean = false;

  constructor() {
    this.timers = [3, 20, 185];

   }

  public timerFinish(){
    this.showTimerFinish();
  }

  public showAddTimer(){
    this.isAddTimerVisible = true;
  }

  public hideAddTimer(){
    this.isAddTimerVisible = false;
  }

  public showTimerFinish(){
    this.isTimerFinish = true;
  }

  public hideTimerFinish(){
    this.isTimerFinish = false;
  }
  public submitAddTimer(){
    this.timers.push(this.time);
    this.hideAddTimer();
  }
}
