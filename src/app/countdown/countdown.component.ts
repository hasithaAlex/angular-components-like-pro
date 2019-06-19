import { Component, OnInit, Input, Output,EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit,OnDestroy,OnChanges {

  ngOnInit() {
    this.startCountDown();  
  }

  ngOnDestroy(){
    this.clearTimeout();  
  }
  
  ngOnChanges(changes){
    console.log(changes.init.currentValue);  
    this.startCountDown();  
  }

  @Output() onDecrease= new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init:number = null;
  public counter: number = 0;
  private countdownTimerRef:any = null; 

  constructor() { }

  startCountDown(){
    if(this.init && this.init>0){
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(){
    setTimeout(() => {
      this.counter =  this.counter-1;
      this.processCount();
    }, 1000);
  }

  private clearTimeout(){
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }  
  }

  processCount(){
    this.onDecrease.emit(this.counter);
    console.log("count is:"+this.counter);
    if (this.counter == 0) {
      this.onComplete.emit();
      console.log("--counter end--");
    }else{
      this.doCountdown();
    }
  }


}
