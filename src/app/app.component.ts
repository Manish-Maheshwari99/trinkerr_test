import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'trinkerr_test';

  token: string = '';

  constructor(private stockService: StockService) {
    
  }

  ngOnInit(): void {
    this.getUserToken();
  }

  getUserToken() {
    this.stockService.getToken().subscribe(
      result => {
        console.log(result);
        this.token = result.token;
      },
      err => {
        console.log(err);
      },
      () => {
        this.fetchStock(this.token);
      }
    )
  }

  fetchStock(token: string) {
    this.stockService.getStock(token).subscribe(
      stock => {
        console.log(stock);
      }
    )
  }
}
