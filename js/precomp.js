(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['employer.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "    <div class=\"employer\">\r\n      <div class=\"short-info\">\r\n        <h2 class=\"position\">"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</h2>\r\n        \r\n";
  stack1 = ((helper = (helper = helpers.yearfrom || (depth0 != null ? depth0.yearfrom : depth0)) != null ? helper : alias2),(options={"name":"yearfrom","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.yearfrom) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.yearfrom : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.yearto || (depth0 != null ? depth0.yearto : depth0)) != null ? helper : alias2),(options={"name":"yearto","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.yearto) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "        \r\n        <h3><a class=\""
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "</a></h3>\r\n\r\n";
  stack1 = ((helper = (helper = helpers.businesstype || (depth0 != null ? depth0.businesstype : depth0)) != null ? helper : alias2),(options={"name":"businesstype","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.businesstype) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = ((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(options={"name":"location","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.location) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n      </div>\r\n      <div class=\"extended-info\">\r\n";
  stack1 = ((helper = (helper = helpers.responsibilities || (depth0 != null ? depth0.responsibilities : depth0)) != null ? helper : alias2),(options={"name":"responsibilities","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.responsibilities) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.achievements || (depth0 != null ? depth0.achievements : depth0)) != null ? helper : alias2),(options={"name":"achievements","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.achievements) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"yearfrom\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.yearto : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "         - \r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"yearto\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "          <span class=\"company-description\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " based in </span>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "          <span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</br></span>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "          <h3>Responsibilities</h3>\r\n          <ul>\r\n";
  stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"items","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.items) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </ul>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "              <li class=\""
    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "          <h3>Achievements</h3>\r\n          <ul>\r\n";
  stack1 = ((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"items","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.items) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </ul>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<div class=\"cv-container\">\r\n";
  stack1 = ((helper = (helper = helpers.employers || (depth0 != null ? depth0.employers : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"employers","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.employers) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\r\n";
},"useData":true});
})();