import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ExternalService {
  constructor(private httpService: HttpService) {

  }

  get(url): Observable<any> {
    return this.httpService.get(url)
              .pipe(map((data) => data.data));
  }

  post(url: string, body: any, config?: AxiosRequestConfig): Observable<any> {
    return this.httpService.post(url, body)
                .pipe(map((data) => data.data));
  }
}
