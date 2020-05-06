import {Injectable} from '@angular/core';
import {Item} from './item';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemsUrl = 'http://localhost:9000/items';

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item []> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(id: string): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  updateItem(item: Item): Observable<any> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, this.httpOptions);
  }
}
