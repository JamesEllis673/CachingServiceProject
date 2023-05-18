import { Injectable } from '@angular/core';
import { UserDataModel } from '../constants/user-data-model';

@Injectable({
  providedIn: 'root'
})
export abstract class CachingService {
  public abstract cacheUserData(userData: UserDataModel): void;
  public abstract getCachedUserData(userId: number): UserDataModel;
  public abstract clearCache(): void;
  public abstract logCache(): void;
}
