import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { TodoStore } from './todo.store';

bootstrap(AppComponent, [TodoStore]);
