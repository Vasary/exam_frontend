import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    public text: string;
    public processing: boolean;
    public pageService: PageService;

    constructor(pageService: PageService) {
        this.text = '';
        this.pageService = pageService;
    }

    get() {
        this.processing = true;
        this.pageService.getAbout()
            .subscribe(
                res => this.handleSuccess(res),
                error => this.handleError(error)
            )
        ;
    }

    /**
     * @param {HttpErrorResponse} err
     */
    handleError(err: HttpErrorResponse) {
        this.text = err.message;
        this.processing = false;
    }

    /**
     * @param {object} result
     */
    handleSuccess(result: object) {
        this.processing = false;
        this.text = result['text']
    }

    ngOnInit() {
        this.get();
    }
}
