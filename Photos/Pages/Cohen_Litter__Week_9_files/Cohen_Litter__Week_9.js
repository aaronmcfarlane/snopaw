// Created by iWeb 3.0.1 local-build-20090706

function createMediaStream_id2()
{return IWCreatePhotocast("http://www.snopaw.com/snopaw/Photos/Pages/Cohen_Litter__Week_9_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.snopaw.com/snopaw/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.snopaw.com/snopaw/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(137,137),new IWSize(137,71),new IWSize(165,223),27,27,0,new IWSize(10,10)),new IWPhotoFrame([IWCreateImage('Cohen_Litter__Week_9_files/Headlines_01.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_02.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_03.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_06.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_09.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_08.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_07.png'),IWCreateImage('Cohen_Litter__Week_9_files/Headlines_04.png')],null,0,1.000000,-3.000000,-3.000000,-3.000000,-3.000000,2.000000,2.000000,2.000000,2.000000,4.000000,4.000000,4.000000,4.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Cohen_Litter__Week_9_files/Cohen_Litter__Week_9Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
Widget.onload();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
