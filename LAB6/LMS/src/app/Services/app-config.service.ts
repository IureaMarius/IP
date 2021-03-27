import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app-config.model';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

    public appConfig: AppConfig;
  constructor(private http: HttpClient) { }
  load() {
      return this.http.get('config/config.json').toPromise().then(data => {
          console.log(data);
          this.appConfig = data as any;
      },
      err => {
          console.log('Config file load fail');
      });
      
  }
}
