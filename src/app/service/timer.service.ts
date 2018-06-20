import {Injectable} from '@angular/core';

@Injectable()
export class TimerService {
    /**
     * @param {number} durationTimeInSeconds
     * @param {() => void} callback
     * @param {(minutes: string, seconds: string) => void} display
     */
    countDown(durationTimeInSeconds: number, callback: () => void, display: (minutes: string, seconds: string) => void) {
        let timer: number = durationTimeInSeconds;
        let minutes: string;
        let seconds: string;

        let timeInterval = setInterval(() => {

            minutes = (timer / 60).toString();
            seconds = (timer % 60).toString();


            minutes = parseInt(minutes) < 10 ? '0' + minutes.toString() : minutes.toString();
            seconds = parseInt(seconds) < 10 ? '0' + seconds.toString() : seconds.toString();

            display(minutes, seconds);

            if (--timer < 0) {
                clearInterval(timeInterval);
                callback();
            }
        }, 1000);
    }
}