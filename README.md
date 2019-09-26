# BPpay-ionic
*An cordova plugin to use BPpay with ionic*

> Note
> currently support only for android, ios is under development.

#### Installation

    ionic cordova add plugin cordova-plugin-bppay

#### Usage
##### Instantiation
First you need to build BPpay object with your provided credentials.
```javascript
   let  data  = {
	   'merchant_id':'your_merchant_id',
	   'service_name':'your_service_name',
	   'email':'your_email',
	   'password':'your_password',
	   }

	window.BPpay.init(
	data,
	function (message) {
	/*callback to be call onSuccess*/
		console.log(message);
	},
	function (message) {
	/*callback to be call onFail*/
		console.log(message);
	});
```
##### Making payment
Call pay() on the BPpay object when you want to make payment.
```javascript
    let  args  = {
	    'order_id':  'your_order_id',
	    'amount':499 /*need to be interger*/
    };
	window.BPpay.pay(
	args,
	function(message){
	/*callback to be call onSuccess*/
		console.log(message);
	},
	function(message){
	/*callback to be call onFail*/
		console.log(message);
	});
```

> Note
>- BPpay doesn't return status to mobile or frontend side.
>- You need to call your backend server for payment status.
>- success callback will be triggered twice.
>   1) when the user is started to forward to BPpay
>   2) when user return from BPpay

### UI customizing
By default, title color and title bar color use the app primarly and secondary colors which can also be override at runtime.
```javascript
	let  uiConfig  = {
		'title':'Pay',
		'is_actionbar_shown':true
	}
	
	window.BPpay.customizeUi(
		uiConfig,
		function(message){
		/*callback to be call onSuccess*/
			console.log(message);
		},
		function(message){
		/*callback to be call onFail*/
			console.log(message);
		});
```
