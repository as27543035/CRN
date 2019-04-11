__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),n=r(d[2]),c=r(d[3]),o=r(d[4]),l=r(d[5]),p=r(d[6]),u=r(d[7]),h=u.TimePickerAndroid,k=u.StyleSheet,x=u.Text,T=u.TouchableWithoutFeedback,E=r(d[8]),f=r(d[9]),P=(function(u){function k(){var n,l;s(this,k);for(var p=arguments.length,u=new Array(p),x=0;x<p;x++)u[x]=arguments[x];return(l=c(this,(n=o(k)).call.apply(n,[this].concat(u)))).state={isoFormatText:'pick a time (24-hour format)',presetHour:4,presetMinute:4,presetText:'pick a time, default: 4:04AM',simpleText:'pick a time',clockText:'pick a time',spinnerText:'pick a time',defaultText:'pick a time'},l.showPicker=function(s,n){var c,o,p,u,k;return t.async(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,x.next=3,t.awrap(h.open(n));case 3:c=x.sent,o=c.action,p=c.minute,u=c.hour,k={},o===h.timeSetAction?(k[s+'Text']=w(u,p),k[s+'Hour']=u,k[s+'Minute']=p):o===h.dismissedAction&&(k[s+'Text']='dismissed'),l.setState(k),x.next=17;break;case 12:x.prev=12,x.t0=x.catch(0),x.t0.code,x.t0.message;case 17:case"end":return x.stop()}},null,null,[[0,12]])},l}return l(k,u),n(k,[{key:"render",value:function(){return p.createElement(f,{title:"TimePickerAndroid"},p.createElement(E,{title:"Simple time picker"},p.createElement(T,{onPress:this.showPicker.bind(this,'simple',{})},p.createElement(x,{style:y.text},this.state.simpleText))),p.createElement(E,{title:"Simple clock time picker"},p.createElement(T,{onPress:this.showPicker.bind(this,'clock',{mode:'clock'})},p.createElement(x,{style:y.text},this.state.clockText))),p.createElement(E,{title:"Simple spinner time picker"},p.createElement(T,{onPress:this.showPicker.bind(this,'spinner',{mode:'spinner'})},p.createElement(x,{style:y.text},this.state.spinnerText))),p.createElement(E,{title:"Simple default time picker"},p.createElement(T,{onPress:this.showPicker.bind(this,'default',{mode:'default'})},p.createElement(x,{style:y.text},this.state.defaultText))),p.createElement(E,{title:"Time picker with pre-set time"},p.createElement(T,{onPress:this.showPicker.bind(this,'preset',{hour:this.state.presetHour,minute:this.state.presetMinute})},p.createElement(x,{style:y.text},this.state.presetText))),p.createElement(E,{title:"Time picker with 24-hour time format"},p.createElement(T,{onPress:this.showPicker.bind(this,'isoFormat',{hour:this.state.isoFormatHour,minute:this.state.isoFormatMinute,is24Hour:!0})},p.createElement(x,{style:y.text},this.state.isoFormatText))))}}]),k})(p.Component);function w(t,s){return t+':'+(s<10?'0'+s:s)}var y=k.create({text:{color:'black'}});e.title='TimePickerAndroid',e.description='Standard Android time picker dialog',e.examples=[{title:'Simple time picker',render:function(){return p.createElement(P,null)}}]},666829,[139,3,4,5,8,9,11,15,666679,666681]);