import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { TimerService } from "./timer.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;
  private countdownEndSubscription: Subscription = null;

  constructor(public timerService: TimerService) {}

  ngOnInit(): void {
    this.timerService.restartCountdown(this.init);
    this.countdownEndSubscription = this.timerService.countdownEnd$.subscribe(() => {
      console.log("====countdown end==");
      this.onComplete.emit();
    });
  }

  ngOnDestroy(): void {
    this.timerService.destroy();
    this.countdownEndSubscription.unsubscribe();
  }
}