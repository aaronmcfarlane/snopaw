// Created by iWeb 3.0.1 local-build-20090518

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.snopaw.com/snopaw/Photos/Pages/Nighstar_Litter__Week_1_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.snopaw.com/snopaw/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.snopaw.com/snopaw/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(144,144),new IWSize(144,13),new IWSize(166,172),27,27,0,new IWSize(8,8)),new IWPhotoFrame([IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_01.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_02.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_03.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_06.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_09.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_08.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_07.png'),IWCreateImage('Nighstar_Litter__Week_1_files/Headlines_04.png')],null,0,0.750000,-3.000000,-3.000000,-3.000000,-3.000000,2.000000,2.000000,2.000000,2.000000,4.000000,4.000000,4.000000,4.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Nighstar_Litter__Week_1_files/Nighstar_Litter__Week_1Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
