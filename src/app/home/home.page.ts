import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // store the scanned result
  num: string;

  // DI barcodeScanner
  constructor(private barcodeScanner: BarcodeScanner) {

  }

  // new scan method
  scan() {
    this.barcodeScanner.scan().then(data => {
        // this is called when a barcode is found
        this.num = data.text
      });      
  }

}
