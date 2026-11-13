import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FormsModule, FaIconComponent],
  selector: 'app-search-bar',
  template: `
    <form class="search-form" (ngSubmit)="submit()">
      <div class="search-controls">
        <span class="search-icon"><fa-icon [icon]="searchIcon"></fa-icon></span>
        <input id="movie-search" name="title" [(ngModel)]="title" placeholder="movie title" />
      </div>
    </form>
  `,
  styles: `
    .search-form {
      background: #000;
      display: flex;
      justify-content: flex-end;
      padding: 1.25rem clamp(1rem, 4vw, 3rem) 1.75rem;
    }

    .search-controls {
      position: relative;
      width: min(30rem, 100%);
    }

    .search-icon {
      color: #f5d400;
      left: 1.1rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      background: #000;
      border: 2px solid #f5d400;
      border-radius: 0.75rem;
      color: #fff;
      font: inherit;
      padding: 0.9rem 1rem 0.9rem 3rem;
      width: 100%;
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
  `,
})
export class SearchBar {
  readonly searched = output<string>();
  protected readonly searchIcon = faSearch;
  protected title = '';

  protected submit(): void {
    this.searched.emit(this.title.trim());
  }
}
