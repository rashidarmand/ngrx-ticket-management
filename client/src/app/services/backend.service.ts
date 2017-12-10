import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Ticket, User} from '../models/ticket';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  tickets():Observable<Ticket[]> {
    return this.http.get<Ticket[]>('/api/tickets');
  }

  ticket(id: string) {
    return this.http.get<Ticket>(`/api/ticket/${id}`);
  }

  users():Observable<Array<User>> {
    return this.http.get<User[]>('/api/users');
  }

  user(id: string) {
    return this.http.get<User>(`/user/${id}`);
  }

  newTicket(payload: {title: string}):Observable<Ticket> {
    return this.http.post<Ticket>('/api/tickets', payload);
  }

  assign(ticketId: string, userId: number) {
    return this.http.post('/api/assign', {ticketId, userId});
  }

  complete(ticketId: string, completed: boolean = true):Observable<Ticket> {
    return this.http.post<Ticket>('/api/complete', {ticketId, completed});
  }
}
