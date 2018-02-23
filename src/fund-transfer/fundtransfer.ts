import { Component } from '@angular/core'
import { Http } from '@angular/http';

@Component({
    selector: 'fund-transfer',
    templateUrl: 'fundtransfer.html',
})
export class FundTransferComponent {

    public info: string;

    constructor(
        private http: Http
    ) {

    }

    public getInfo(): void {
        console.log(this.http);
        this.http.get('https://api.github.com/users/maharma').subscribe(response => {
            this.info = response.json();
        });
    }
}