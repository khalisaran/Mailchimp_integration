var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/Person_Default_Activity", routers.Person_Default_ActivityRouter);

api.use("/mailchimp/templates", routers.TemplateRouter);
api.use("/mailchimp/campaigns", routers.CampaignRouter);
api.use("/mailchimp", routers.ListRouter);
api.use("/mailchimpapikey" , routers.mailchimp_router);
api.use("/user",routers.userRouter);
api.use("/user",routers.maildetails);

module.exports = api;