import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

    /**
     * @param {number} durationTimeInSeconds
     * @param {() => void} callback
     * @param {(minutes: string, seconds: string) => void} display
     */
    countDown(durationTimeInSeconds: number, callback: () => void, display: (minutes: string, seconds: string) => void) {
        let timer: number = durationTimeInSeconds;
        let seconds: string = '';

        display('00', durationTimeInSeconds.toString());

        const timeInterval = setInterval(() => {
            seconds = Math.round(timer % 60).toString();
            seconds = parseInt(seconds, 10) < 10 ? '0' + seconds.toString() : seconds.toString();

            display('00', seconds);

            if (--timer < 0) {
                clearInterval(timeInterval);
                callback();
            }
        }, 1000);
    }
}
