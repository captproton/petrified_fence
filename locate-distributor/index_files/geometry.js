google.maps.__gjsload__('geometry', function(_){var Wka=function(a,b){return Math.abs(_.Qd(b-a,-180,180))},Xka=function(a,b,c,d,e){if(!d){c=Wka(a.lng(),c)/Wka(a.lng(),b.lng());if(!e)return e=Math.sin(_.Id(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Id(b.lat())),_.Jd(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.R(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Id(a.lat());a=_.Id(a.lng());d=_.Id(b.lat());b=_.Id(b.lng());c=_.Id(c);return _.Qd(_.Jd(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},Xv={containsLocation:function(a,b){a=_.ze(a);var c=_.Qd(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map");f=!d&&f?f.getProjection():null;for(var g=!1,h=0,k=e.getLength();h<k;++h)for(var l=e.getAt(h),m=0,p=l.getLength();m<p;++m){var q=l.getAt(m),r=l.getAt((m+1)%p),t=_.Qd(q.lng(),-180,180),u=_.Qd(r.lng(),-180,180),x=Math.max(t,u);t=Math.min(t,u);(180<x-t?c>=x||c<t:
c<x&&c>=t)&&Xka(q,r,c,d,f)<a.lat()&&(g=!g)}return g||Xv.isLocationOnEdge(a,b)}};_.Ra("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation",Xv.containsLocation);
Xv.isLocationOnEdge=function(a,b,c){a=_.ze(a);c=c||1E-9;var d=_.Qd(a.lng(),-180,180),e=b instanceof _.jk,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,k=g.getLength();h<k;++h)for(var l=g.getAt(h),m=l.getLength(),p=e?m:m-1,q=0;q<p;++q){var r=l.getAt(q),t=l.getAt((q+1)%m),u=_.Qd(r.lng(),-180,180),x=_.Qd(t.lng(),-180,180),y=Math.max(u,x),z=Math.min(u,x);if(u=1E-9>=Math.abs(_.Qd(u-x,-180,180))&&(Math.abs(_.Qd(u-d,-180,180))<=c||Math.abs(_.Qd(x-d,-180,
180))<=c)){u=a.lat();x=Math.min(r.lat(),t.lat())-c;var G=Math.max(r.lat(),t.lat())+c;u=u>=x&&u<=G}if(u)return!0;if(180<y-z?d+c>=y||d-c<=z:d+c>=z&&d-c<=y)if(r=Xka(r,t,d,f,b),Math.abs(r-a.lat())<c)return!0}return!1};_.Ra("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge",Xv.isLocationOnEdge);var Yv={computeHeading:function(a,b){a=_.ze(a);b=_.ze(b);var c=_.we(a),d=_.xe(a);a=_.we(b);b=_.xe(b)-d;return _.Qd(_.Jd(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)}};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeHeading",Yv.computeHeading);
Yv.computeOffset=function(a,b,c,d){a=_.ze(a);b/=d||6378137;c=_.Id(c);var e=_.we(a);a=_.xe(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e);e=Math.cos(e);var g=d*f+b*e*Math.cos(c);return new _.ve(_.Jd(Math.asin(g)),_.Jd(a+Math.atan2(b*e*Math.sin(c),d-f*g)))};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeOffset",Yv.computeOffset);
Yv.computeOffsetOrigin=function(a,b,c,d){a=_.ze(a);c=_.Id(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.we(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f);g/=d*d+e*e;var h=(c-e*g)/d;g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.xe(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.ve(_.Jd(g),_.Jd(a))};
_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeOffsetOrigin",Yv.computeOffsetOrigin);
Yv.interpolate=function(a,b,c){a=_.ze(a);b=_.ze(b);var d=_.we(a),e=_.xe(a),f=_.we(b),g=_.xe(b),h=Math.cos(d),k=Math.cos(f);b=Yv.kt(a,b);var l=Math.sin(b);if(1E-6>l)return new _.ve(a.lat(),a.lng());a=Math.sin((1-c)*b)/l;c=Math.sin(c*b)/l;b=a*h*Math.cos(e)+c*k*Math.cos(g);e=a*h*Math.sin(e)+c*k*Math.sin(g);return new _.ve(_.Jd(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.Jd(Math.atan2(e,b)))};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.interpolate",Yv.interpolate);
Yv.kt=function(a,b){var c=_.we(a);a=_.xe(a);var d=_.we(b);b=_.xe(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))};Yv.computeDistanceBetween=function(a,b,c){a=_.ze(a);b=_.ze(b);c=c||6378137;return Yv.kt(a,b)*c};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeDistanceBetween",Yv.computeDistanceBetween);
Yv.computeLength=function(a,b){b=b||6378137;var c=0;a instanceof _.Ri&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=Yv.computeDistanceBetween(a[d],a[d+1],b);return c};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeLength",Yv.computeLength);
Yv.computeArea=function(a,b){if(!(a instanceof _.Ri||Array.isArray(a)||a instanceof _.Vf||a instanceof _.ck))try{a=_.Uf(a)}catch(d){try{a=new _.ck((0,_.Eea)(a))}catch(e){throw _.ee("Invalid path passed to computeArea(): "+JSON.stringify(a));}}b=b||6378137;if(a instanceof _.ck){if(void 0==a.getRadius())throw _.ee("Invalid path passed to computeArea(): Circle is missing radius.");if(0>a.getRadius())throw _.ee("Invalid path passed to computeArea(): Circle must have non-negative radius.");if(0>b)throw _.ee("Invalid radiusOfSphere passed to computeArea(): radiusOfSphere must be non-negative.");
if(a.getRadius()>Math.PI*b)throw _.ee("Invalid path passed to computeArea(): Circle must not cover more than 100% of the sphere.");return 2*Math.PI*Math.pow(b,2)*(1-Math.cos(a.getRadius()/b))}if(a instanceof _.Vf){if(0>b)throw _.ee("Invalid radiusOfSphere passed to computeArea(): radiusOfSphere must be non-negative.");if(a.Va.lo>a.Va.hi)throw _.ee("Invalid path passed to computeArea(): the southern LatLng of a LatLngBounds cannot be more north than the northern LatLng.");var c=2*Math.PI*Math.pow(b,
2)*(1-Math.cos((a.Va.lo-90)*Math.PI/180));c-=2*Math.PI*Math.pow(b,2)*(1-Math.cos((a.Va.hi-90)*Math.PI/180));return c*Math.abs(a.Ha.hi-a.Ha.lo)/360}return Math.abs(Yv.computeSignedArea(a,b))};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeArea",Yv.computeArea);
Yv.Rv=function(a){var b=Zv;if(isFinite(a)){var c=a%360;a=Math.round(c/90);c-=90*a;if(30===c||-30===c){c=.5*_.v(Math,"sign").call(Math,c);var d=Math.sqrt(.75)}else 45===c||-45===c?(c=_.v(Math,"sign").call(Math,c)*Math.SQRT1_2,d=Math.SQRT1_2):(d=c/180*Math.PI,c=Math.sin(d),d=Math.cos(d));switch(a&3){case 0:b[0]=c;b[1]=d;break;case 1:b[0]=d;b[1]=-c;break;case 2:b[0]=-c;b[1]=-d;break;default:b[0]=-d,b[1]=c}}else b[0]=NaN,b[1]=NaN};var Zv=Array(2);
Yv.Hu=function(a,b){Yv.Rv(a.lat());var c=_.A(Zv),d=c.next().value;c=c.next().value;Yv.Rv(a.lng());var e=_.A(Zv);a=e.next().value;e=e.next().value;b[0]=c*e;b[1]=c*a;b[2]=d};Yv.nB=function(a){for(var b=0,c=1;c<a.length;++c)Math.abs(a[c])<Math.abs(a[b])&&(b=c);c=[0,0,0];c[b]=1;a=[a[1]*c[2]-a[2]*c[1],a[2]*c[0]-a[0]*c[2],a[0]*c[1]-a[1]*c[0]];b=_.v(Math,"hypot").apply(Math,_.oa(a));return[a[0]/b,a[1]/b,a[2]/b]};Yv.hy=function(a){for(var b=0;3>b;++b)if(0!==a[b]){if(0>a[b])return[-a[0],-a[1],-a[2]];break}return a};
Yv.yv=function(a,b,c){var d=a[0]*b[1]+a[1]*b[0]+a[2]*b[3]-a[3]*b[2],e=a[0]*b[2]-a[1]*b[3]+a[2]*b[0]+a[3]*b[1],f=a[0]*b[3]+a[1]*b[2]-a[2]*b[1]+a[3]*b[0];c[0]=a[0]*b[0]-a[1]*b[1]-a[2]*b[2]-a[3]*b[3];c[1]=d;c[2]=e;c[3]=f};
Yv.Dr=function(a,b,c){var d=a[0]-b[0],e=a[1]-b[1],f=a[2]-b[2],g=a[0]+b[0],h=a[1]+b[1],k=a[2]+b[2],l=g*g+h*h+k*k,m=e*k-f*h;f=f*g-d*k;d=d*h-e*g;e=l*l+m*m+f*f+d*d;0!==e?(b=Math.sqrt(e),c[0]=l/b,c[1]=m/b,c[2]=f/b,c[3]=d/b):(l=Yv.nB(Yv.hy([a[0]-b[0],a[1]-b[1],a[2]-b[2]])),m=Array(4),Yv.Dr(a,l,m),a=Array(4),Yv.Dr(l,b,a),Yv.yv(a,m,c))};
Yv.computeSignedArea=function(a,b){b=b||6378137;a instanceof _.Ri&&(a=a.getArray());a=(0,_.zf)(a);if(0===a.length)return 0;var c=Array(4),d=Array(3),e=[1,0,0,0],f=Array(3);Yv.Hu(a[a.length-1],f);for(var g=0;g<a.length;++g){Yv.Hu(a[g],d);Yv.Dr(f,d,c);Yv.yv(c,e,e);var h=_.A(d);f[0]=h.next().value;f[1]=h.next().value;f[2]=h.next().value}d=_.A(f);a=d.next().value;c=d.next().value;d=d.next().value;h=_.A(e);e=h.next().value;f=h.next().value;g=h.next().value;h=h.next().value;return 2*Math.atan2(a*f+c*g+
d*h,e)*b*b};_.Ra("module$exports$mapsapi$geometry$spherical.Spherical.computeSignedArea",Yv.computeSignedArea);Yv.mt=function(a,b,c){return Yv.computeSignedArea([a,b,c],1)};Yv.wD=function(a,b,c){return Math.abs(Yv.mt(a,b,c))};Yv.ND=function(a,b,c){return _.v(Math,"sign").call(Math,Yv.mt(a,b,c))};var $v={decodePath:function(a){var b=_.Md(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g;for(g=0;d<b;++g){var h=1,k=0;do{var l=a.charCodeAt(d++)-63-1;h+=l<<k;k+=5}while(31<=l);e+=h&1?~(h>>1):h>>1;h=1;k=0;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);f+=h&1?~(h>>1):h>>1;c[g]=new _.ve(1E-5*e,1E-5*f,!0)}c.length=g;return c}};_.Ra("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath",$v.decodePath);
$v.encodePath=function(a){a instanceof _.Ri&&(a=a.getArray());a=(0,_.zf)(a);return $v.sB(a,function(b){return[Math.round(1E5*b.lat()),Math.round(1E5*b.lng())]})};_.Ra("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath",$v.encodePath);$v.sB=function(a,b){for(var c=[],d=[0,0],e,f=0,g=_.Md(a);f<g;++f)e=b?b(a[f]):a[f],$v.rv(e[0]-d[0],c),$v.rv(e[1]-d[1],c),d=e;return c.join("")};$v.rv=function(a,b){$v.tB(0>a?~(a<<1):a<<1,b)};
$v.tB=function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var Yka={encoding:$v,spherical:Yv,poly:Xv};_.C.google.maps.geometry=Yka;_.Te("geometry",Yka);});