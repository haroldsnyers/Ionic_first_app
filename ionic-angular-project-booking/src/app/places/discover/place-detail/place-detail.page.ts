import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    constructor(
        private router: Router,
        private navController: NavController
    ) { }

    ngOnInit() {
    }

    onBookPlace() {
        // this.router.navigateByUrl('/places/tabs/discover');
        // under the hood uses the the angular router
        this.navController.navigateBack('/places/tabs/discover');
        // pop() has the advantage to enable going back with the right animation without
        // specifying the path but when page is reloaded if you can't guarantee the pages on the stack it will not work
        // this.navController.pop();
    }
}
