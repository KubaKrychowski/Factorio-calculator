import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/core/app-service/app.service';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { PatchNotesDialogComponent } from '../patch-notes-dialog/patch-notes-dialog.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    // TODO: Change to stagger method
    trigger('appear', [
      state('hidden', style({
        opacity: '0'

      })),
      state('visible', style({
        margin: '1'
      })),
      transition('hidden => visible', [
        animate('2s')
      ])
    ]),
    trigger('flyLeft', [
      state('out', style({
        margin: '0 0 0 2560px',
      })),
      state('in', style({
        margin: '0',
      })),
      transition('out => in', [
        animate('1s')
      ])
    ]),
  ]
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleFirstSection();
    this.toggleTiles();
  }

  public isFirstSectionVisible: boolean = false;
  public areTilesVisible: boolean = false;

  public displayOnMobileDevice: boolean = false;

  constructor(
    private readonly appService: AppService,
    private readonly localStorageService: LocalStorageService,
    private readonly dialog: MatDialog) {
    this.appService.hideLeftMenu = true;
    this.displayOnMobileDevice = this.checkIsMobileDisplay();
  }

  ngOnInit(): void {
    if (!this.localStorageService.getItem('firstVisit')) {
      this.dialog
        .open(PatchNotesDialogComponent, {
          panelClass: 'factorio-dialog',
          autoFocus: false
        })
        .afterClosed()
        .subscribe(() => {
          this.localStorageService.setItem('firstVisit', true);
        });
    }
  }

  ngAfterViewInit(): void {
    this.toggleFirstSection();
    this.toggleTiles();

  }

  public checkIsMobileDisplay(): boolean {
    return window.innerWidth < 896;
  }

  public toggleFirstSection(): void {
    // Use timeout to prevent from overriding by next value during check the first one.
    setTimeout(() => {
      if (window.screenY >= 0 && window.scrollY / window.screen.availHeight * 100 < 46) {
        this.isFirstSectionVisible = true;
      } else {
        this.isFirstSectionVisible = false;
      }
    })
  }

  public toggleTiles(): void {
    if (window.scrollY / window.screen.availHeight * 100 > 56) {
      this.areTilesVisible = true;
    } else {
      this.areTilesVisible = false;
    }
  }

  public scrollUp() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
