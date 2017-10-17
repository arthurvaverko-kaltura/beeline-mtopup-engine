

/*
 * POST /PaymentService.svc
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.Authorize3DSecResponse = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('PaymentService_svc_Authorize3DSecResponse');
};

/*
 * POST /PaymentService.svc
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.CreatePayment = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('PaymentService_svc_CreatePayment');
};

/*
 * POST /PaymentService.svc
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.GetPaymentStatus = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('PaymentService_svc_GetPaymentStatus');
};

/*
 * POST /PaymentService.svc
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.ProceedPayment = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('PaymentService_svc_ProceedPayment');
};

/*
 * POST /PaymentService.svc
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.Verify3DSecEnrollment = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('xml');
	res.render('PaymentService_svc_Verify3DSecEnrollment');
};