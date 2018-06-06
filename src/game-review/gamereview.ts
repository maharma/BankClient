import { Component } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

export class GameDetail
{
    Id: string;
    Title: string;
    Description: string;
    AverageRating: number;
}

@Component({
    selector: 'game-review',
    templateUrl: 'gamereview.html',
})

export class GameReviewComponent{
    public baseUri:string;
    public message: string;
    public messageClass: string;
    public GameDetails: GameDetail []

    constructor(private frmBuilder: FormBuilder, private http:Http){
        this.baseUri ="http://localhost:57208/";
        this.getGameReviews();

    }

    public getGameReviews(): void {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.get(this.baseUri + 'api/games')
        .subscribe(response => {
            if (response.status == 200 || response.status == 204) {
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