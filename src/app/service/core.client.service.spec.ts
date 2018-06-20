import { inject, TestBed } from '@angular/core/testing';

import { CoreClientService } from './core-client.service';

describe('CoreClientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CoreClientService]
        });
    });

    it('should be created', inject([CoreClientService], (service: CoreClientService) => {
        expect(service).toBeTruthy();
    }));
});
