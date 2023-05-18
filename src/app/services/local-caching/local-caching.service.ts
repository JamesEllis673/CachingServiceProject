import { Injectable } from '@angular/core';
import { CachingService } from '../caching.service';
import { UserDataModel } from '../../constants/user-data-model';

@Injectable({
  providedIn: 'root'
})
export class LocalCachingService extends CachingService {
  cachedData: Array<UserDataModel> = new Array<UserDataModel>();

  constructor() {
    super();
  }

  public cacheUserData(userData: UserDataModel): void {
    this.cachedData.push(userData);
  }

  public getCachedUserData(userId: number): UserDataModel {
    return this.cachedData.find((userDataModel: UserDataModel) => userDataModel.id === userId);
  }

  public clearCache(): void {
    this.cachedData = new Array<UserDataModel>();
    console.log('Cache cleared');
  }

  public logCache(): void {
    console.log(this.cachedData);
  }
}
