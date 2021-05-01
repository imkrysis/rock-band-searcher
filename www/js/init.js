document.addEventListener('deviceready', onDeviceReady, false)
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  document.getElementById('deviceready').classList.add('ready')

  tabs = document.getElementById('tabs-swipe-demo')
  tabsInstance = M.Tabs.getInstance(tabs)
  tabsInstance.select('#tab3')

}

(function($){
  $(function(){

    $('#sidenav').sidenav()
    $('#tabs').tabs({'swipeable': true})

  }) // end of document ready
})(jQuery) // end of jQuery name space




