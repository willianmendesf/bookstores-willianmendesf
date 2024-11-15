import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'create-account', component: CreateAccountComponent },
];
