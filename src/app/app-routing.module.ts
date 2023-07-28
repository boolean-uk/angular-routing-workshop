import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { WatchComponent } from './watch/watch.component';


const routes: Routes = [
  { path: 'home', 
    component: HomeComponent
  },
  { path: 'about-me',
    component: AboutMeComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'watch/:id',
    component: WatchComponent
  },
  {
    path: 'watch',
    redirectTo: '/watch/0',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
