var eejs = require('ep_etherpad-lite/node/eejs/');

/******************** 
* UI 
*/ 
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_switch_pad/templates/editbarButtons.ejs");
  return cb();
}

