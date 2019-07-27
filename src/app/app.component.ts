import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAddTimerVisible:boolean = false;
  public time:number = 0;
  constructor() { }

  countdounFinish(){
    alert('all done');
  }

  showAddTimer(){
    this.isAddTimerVisible = true;
  }

  hideAddTimer(){
    this.isAddTimerVisible = false;
  }
}
