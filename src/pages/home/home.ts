import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare let window: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    let data = {
    'merchant_id':'your_merchant_id',
    'service_name':'your_service_name',
    'email':'your_email',
    'password':'your_password',
    }

    window.BPpay.init(
    data,
     function (message) {
      console.log(message);
    },
     function (message) {
      console.log(message);
    });

    let uiConfig = {
      'title':'Pay',
      'is_actionbar_shown':true
    }

    
    window.BPpay.customizeUi(uiConfig,
      function(message){
        console.log(message);
      },
      function(message){
        console.log(message);
      });

    let args = {
      'order_id': 'your_order_id',
      'amount':499
    };

    window.BPpay.pay(args,
    function(message){
      console.log(message);
    },
    function(message){
      console.log(message);
    });

  }

}
