import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserDataModel } from '../constants/user-data-model';
import { CachingService } from '../services/caching.service';
import { LocalCachingService } from '../services/local-caching/local-caching.service';

@Component({
  selector: 'app-local-caching',
  templateUrl: './local-caching.component.html',
  styleUrls: ['./local-caching.component.scss'],
  providers: [{
    provide: CachingService,
    useClass: LocalCachingService
  }]
})
export class LocalCachingComponent {
  @Input()
  public usersData: Array<UserDataModel>;

  public currentUserData: UserDataModel;
  public duration: number;
  private readonly httpClient: HttpClient;
  private readonly cachingService: CachingService;

  constructor(httpClient: HttpClient,
              cachingService: CachingService) {
    this.httpClient = httpClient;
    this.cachingService = cachingService;
  }

  public async getUserData(id: number): Promise<void> {
    const userDataFromCache: UserDataModel = this.cachingService.getCachedUserData(id);

    if (userDataFromCache) {
      this.currentUserData = userDataFromCache;
      this.duration = null;
    } else {
      const startTime: Date = new Date();
      await this.httpClient.get<UserDataModel>(`https://jsonplaceholder.typicode.com/users/${id}`).pipe(take(1)).subscribe((userData: UserDataModel) => {
        this.currentUserData = userData;
        this.cachingService.cacheUserData(userData);
        const endTime: Date = new Date();
        this.duration = (endTime.valueOf() - startTime.valueOf()) / 1000;
      });
    }
  }

  public clearCache(): void {
    this.cachingService.clearCache();
  }

  public logCache(): void {
    this.cachingService.logCache();
  }
}
