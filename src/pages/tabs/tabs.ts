import { Component } from '@angular/core';

import { AccountPage } from '../account/account';
import { OffersPage } from '../offers/offers';
import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationPage;
  tab3Root = OffersPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
