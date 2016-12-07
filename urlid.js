//altranate url processing
function urlid()
{/*complete url:window.location.protocol://window.location.(host or hostname)/
  window.location.pathname?window.location.search/*/
  var completeUrl=window.location.href;
  var protocol=window.location.protocol;
  var HostName=window.location.host;
  var PathName=window.location.pathname;
  var query=window.location.search;
  document.getElementById("Url").innerHTML+=completeUrl;
  document.getElementById("protocol").innerHTML+=protocol;
  document.getElementById("host").innerHTML+=HostName;
  document.getElementById("path").innerHTML+=PathName;
  document.getElementById("Query").innerHTML+=query;
}
