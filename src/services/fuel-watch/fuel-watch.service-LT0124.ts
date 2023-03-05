import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FuelWatchFeed } from 'src/models/fuelwatchfeed.model';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})

export class FuelWatchService {

  // url to the fuel watch rss


  constructor(
    private http: HttpClient,
  ) {
  }

  /** GET fuelwatch data from the server */
  public get(): Observable<FuelWatchFeed> {
    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    // dont need it if this is hosted online, and in production
    var apiurl: string = environment.production ? fuelWatchURL : .CORS_PROXY + this.fuelWatchURL;
    console.log("fetching from", apiurl)
    return this.http.get<any>(apiurl);
    // return this.http.get<any>("http://localhost:4200/FuelWatchAPI/");
  }


  public static test() {

    console.log("test function called");
    return "this is the returened data from test";
  }

}


