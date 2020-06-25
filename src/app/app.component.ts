import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Digital Assessment Platform';
  constructor(private router: Router) {
    this.initializeApp();
  }
  ngOnDestroy(): void {
    console.log('app component is destroyed.');
    window.addEventListener('beforeunload', () => {
          localStorage.clear();
      });
  }
  initializeApp() {
    this.router.navigate(['/login']);
  }
}
