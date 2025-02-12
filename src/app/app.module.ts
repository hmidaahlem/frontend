import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }   from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';
import { HttpClientModule } from '@angular/common/http';
import { CompteParticipantModule } from './compte-participant/compte-participant.module';
@NgModule({
     imports:[
        BrowserAnimationsModule,CompteParticipantModule,
        FormsModule,HttpClientModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        NgbModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginComponent,
        DocumentComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
