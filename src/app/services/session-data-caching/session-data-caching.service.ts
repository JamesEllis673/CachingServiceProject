import { Injectable } from '@angular/core';
import { CachingService } from '../caching.service';
import { UserDataModel } from '../../constants/user-data-model';

@Injectable({
  providedIn: 'root'
})
export class SessionDataCachingService extends CachingService {

  constructor() {
    super();
  }

  public cacheUserData(userData: UserDataModel): void {
    window.sessionStorage.setItem(userData.id.toString(), JSON.stringify(userData));
  }

  public getCachedUserData(userId: number): UserDataModel {
    return JSON.parse(window.sessionStorage.getItem(userId.toString()));
  }

  public clearCache(): void {
    window.sessionStorage.clear();
    console.log('Cache cleared');
  }

  public logCache(): void {
    console.log(window.sessionStorage);
  }
}
