import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from '../core/services/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError(response => this.treatsWrongAnswer(response))
    )
  }

  private treatsWrongAnswer(response: object): Observable<HttpEvent<any>> {
    if (response instanceof HttpErrorResponse) {
      this.messageService.showError('Erro: ' + response.message);
    }
    return throwError(response);
  }
}
