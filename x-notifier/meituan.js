/**********************************************************
mail.meituan.com
@author:lichengwu
@created:2013-01-11
@version:1.0
**********************************************************/
var name="Meituan Mail";
var ver="2013-01-11";

function init(){
  this.dataURL="http://mail.meituan.com/zimbra/?client=standard";
  this.loginData=["http://mail.meituan.com/zimbra.pl","login","password"];
  this.mailURL="http://mail.meituan.com/zimbra";
  this.viewURL="http://mail.meituan.com/"
}
function getCount(aData){
  var fnd=aData.match(/Zimbra: Inbox \((\d+?)\)/); //nombre de mail non lu
  if(fnd)
  {
    return fnd[1];
  }
  else
  {
    var fnd_aucun =aData.match(/Zimbra: Inbox/); //aucun mail non lu
    if (fnd_aucun)
    {
      return 0;
    }
    else
    {
      return -1;//affiche message non verifie
    }
  }
}
