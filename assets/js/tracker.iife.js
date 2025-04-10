function initApollo(){
    var n=Math.random().toString(36).substring(7);
    o=document.createElement("script");
    o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
    o.onload=function(){window.trackingFunctions.onLoad({appId:"672e5e93d214c701b0ca0c34"})},
    document.head.appendChild(o)
}
initApollo();