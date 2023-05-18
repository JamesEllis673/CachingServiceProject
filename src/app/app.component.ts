import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserDataModel } from './constants/user-data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public usersData: Array<UserDataModel>;
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async ngOnInit(): Promise<void> {
    await this.httpClient.get<Array<UserDataModel>>('https://jsonplaceholder.typicode.com/users').pipe(take(1))
      .subscribe((usersData: Array<UserDataModel>) => {
        this.usersData = usersData.slice(6);
      });
  }
}
