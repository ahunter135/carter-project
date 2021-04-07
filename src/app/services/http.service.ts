import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  base = "http://carter-project.herokuapp.com/";
  constructor(private http: HttpClient) { }

  /**
   * This endpoint takes some data and an endpoint you want to send the data to.
   * 
   * Keep it private so we don't accidentally use it somewhere else
   * 
   * @param endpoint 
   * @param data 
   * @returns HTTP Response
   */
  private async post(endpoint, data) {
    let url = this.base + endpoint;
    let headers = {};
    headers = { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT', "Accept": "application/json" };
    let config = <any>{
      url: url,
      method: "POST",
      headers: headers,
      observe: 'response'
    }
    let response = await <any>this.http.post(url, data, config).toPromise();
    return response;
  }

  /**
   * This is a publically accessible function to POST login data to the login endpoint
   * 
   * @param data 
   */
  async login(data) {
    let responseData = await this.post("login", data);
    return responseData;
  }
}
