



var PaymentService_svc = require("./routes/PaymentService_svc.js")

/* Route definition styles: 
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.soap("/PaymentService.svc", "http://beeline.ru/webtopup/engine/PaymentService/Authorize3DSecResponse", "Authorize3DSecResponse", PaymentService_svc.Authorize3DSecResponse);
Sandbox.soap("/PaymentService.svc", "http://beeline.ru/webtopup/engine/PaymentService/CreatePayment", "CreatePayment", PaymentService_svc.CreatePayment);
Sandbox.soap("/PaymentService.svc", "http://beeline.ru/webtopup/engine/PaymentService/GetPaymentStatus", "GetPaymentStatus", PaymentService_svc.GetPaymentStatus);
Sandbox.soap("/PaymentService.svc", "http://beeline.ru/webtopup/engine/PaymentService/ProceedPayment", "ProceedPayment", PaymentService_svc.ProceedPayment);
Sandbox.soap("/PaymentService.svc", "http://beeline.ru/webtopup/engine/PaymentService/Verify3DSecEnrollment", "Verify3DSecEnrollment", PaymentService_svc.Verify3DSecEnrollment);