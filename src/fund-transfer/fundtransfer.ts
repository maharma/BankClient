import { Component } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'fund-transfer',
    templateUrl: 'fundtransfer.html',
})

export class FundTransferComponent {

    public baseUri: string;
    public info: string;
    public message: string;
    public messageClass: string;
    fundTransferForm: FormGroup;

    BSB: number;
    AccountNumber: number;
    AccountName: string = "";
    Reference: string = "";
    Amount: number;

    constructor(private frmbuilder: FormBuilder, private http: Http) {
        this.baseUri = "http://localhost:56684/";
        this.fundTransferForm = frmbuilder.group({
            bsb: [this.BSB, Validators.compose([Validators.required, Validators.max(999), Validators.min(100)])],
            accountNumber: [this.AccountNumber, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])],
            accountName: this.AccountName,
            reference: this.Reference,
            amount: [this.Amount, Validators.compose([Validators.required, Validators.max(100000), Validators.min(1)])],
        });
        this.resetForm();
    }

    public resetForm():void{
        this.fundTransferForm.reset();
    }

    public getInfo(): void {
        console.log(this.http);
        this.http.get('https://api.github.com/users/maharma').subscribe(response => {
            this.info = response.json();
        });
    }

    public transfer(signupForm: NgForm) {
        const headers = new Headers({ 'Content-Type': 'application/json', 'token': 'Welcome to My World Bank!' });
        console.log(this.fundTransferForm.value);
        this.http.post(this.baseUri + 'api/funds/transfer', this.fundTransferForm.value, { headers: headers })
        .subscribe((response) => {
            if (response.status == 200 || response.status == 204) {
                this.handleMessage("Successfully Trsafered..!!", 'success');
                this.resetForm();
            }
        }, (errorResponse) => {
            this.handleMessage(errorResponse.status + ' '+ errorResponse.statusText + ': Please try again..', 'error');
        });
    }

    public handleMessage(message, type): void{
        this.message  = message;
        if(type == 'success'){
            this.messageClass = 'alert-success'
        } else if(type == 'error'){
            this.messageClass = 'alert-danger'
        }
    }
}