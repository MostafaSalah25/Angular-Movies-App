import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:''  , redirectTo:'home' , pathMatch:'full' },
  {path:'home'  , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'about'  , canActivate:[AuthGuard],  component:AboutComponent},
  {path:'gallery'  , canActivate:[AuthGuard],  component:GalleryComponent},
  {path:'movies'  , canActivate:[AuthGuard], component:MoviesComponent},
  {path:'contacts'  , canActivate:[AuthGuard], component:ContactsComponent},
  {path:'moviedetails/:id'  , canActivate:[AuthGuard], component:MoviedetailsComponent},

  {path:'settings'  ,  loadChildren: () => import ('./settings/settings.module').then( x => x.SettingsModule)   },

  {path:'register'  ,  component:RegisterComponent},
  {path:'login'  ,  component:LoginComponent},
  {path:'**'  ,  component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
