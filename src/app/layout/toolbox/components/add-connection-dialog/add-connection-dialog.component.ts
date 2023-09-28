import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/core/storage/local-storage.service';
import { DirectionEnum } from 'src/app/modules/shared/enums/factory-project/direction.enum';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';
import { FactoryProjectService } from 'src/app/modules/shared/services/factory-project.service';

@Component({
  selector: 'app-add-connection-dialog',
  templateUrl: './add-connection-dialog.component.html',
  styleUrls: ['./add-connection-dialog.component.scss'],
  providers: [LocalStorageService]
})
export class AddConnectionDialogComponent {
  public elements: any[] = Array.from({ length: 32 }, () => Array(32).fill(0));
  private selectedItem: ItemModel | null = null;

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly factoryProjectService: FactoryProjectService) {
    if (this.localStorageService.getItem('planerElements')) {
      this.elements = JSON.parse(JSON.parse(this.localStorageService.getItem('planerElements') as any)).elements
      console.log(this.elements);
    }
  }

  addItem(row: number, col: number) {
    let arrElement = this.elements[row][col];

    if (arrElement) {
      this.elements[row][col] = 0;
    } else {
      const itemX = this.selectedItem?.width;
      const itemY = this.selectedItem?.height;

      if (!itemX || !itemY) {
        throw console.error('invalid item');
      }

      this.elements[row][col] = {
        image: this.selectedItem?.iconUrl,
        value: 1,
        color: '#FFFFFF',
        widthMultiply: `${30 * itemX}px`,
        heightMultiply: `${30 * itemY}px`
      }
    }

    switch (this.selectedItem?.categoryId) {
      case 2: {
        this.factoryProjectService.addProducer({
          productionTime: 2,
          product: 'test',
          xPos: col,
          yPos: row,
          xOutputOffset: 1,
          yOutputOffset: 0,
          outputDirection: DirectionEnum.RIGHT
        });
      }
    }

    this.localStorageService.setItem('planerElements', JSON.stringify({
      elements: this.elements
    }));
  }


  clearAll() {
    this.factoryProjectService.stopInterval();
    this.elements = Array.from({ length: 32 }, () => Array(32).fill(0));

    this.localStorageService.setItem('planerElements', JSON.stringify({
      elements: this.elements
    }));
  }

  setCurrentItem(event: ItemModel) {
    this.selectedItem = event;
  }

  startInterval() {
    this.factoryProjectService.startInterval();
  }
}
