import { Injectable } from "@angular/core";
import { HttpInterceptor } from '@angular/common/http';
import { OpenIdConnectService } from './open-id-connect.service';

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {
    constructor(private oidc: OpenIdConnectService) { }
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        if (this.oidc.userAvailable) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${this.oidc.user.token_type} ${this.oidc.user.access_token}`
                }
            });
        }
        return next.handle(req);
    }
}