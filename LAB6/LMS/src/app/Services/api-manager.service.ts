import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

    private baseURL;
    private endpoints;
    private httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
    constructor(private appConfigService: AppConfigService,
                private http: HttpClient) { 
        this.baseURL = appConfigService.appConfig.apiURL;
        this.endpoints = appConfigService.appConfig.endpoints;
    }
    public LogIn(req) {
        this.http.post(this.baseURL + this.endpoints.LogIn, JSON.stringify(req), httpOptions);
    }
}
