"use strict";var y=function(o,r){return function(){return r||o((r={exports:{}}).exports,r),r.exports}};var f=y(function(L,P){
function D(o,r,v,m,i,e,t){var a,c,p,h,g,l,u,q,n,w,b,j;for(c=r.data,g=r.accessors[0],l=r.accessors[1],p=i.data,h=i.accessors[0],u=0,a=o-1,n=m,w=m+a*v,b=t,j=t+a*e;u<a;){for(;u<a&&h(p,b)!==0;)u+=1,n+=v,b+=e;for(;a>u&&h(p,j)!==0;)a-=1,w-=v,j-=e;if(u>=a)break;q=g(c,n),l(c,n,g(c,w)),l(c,w,q),u+=1,n+=v,b+=e,a-=1,w-=v,j-=e}return r}P.exports=D
});var x=y(function(Q,R){
var O=require('@stdlib/array-base-arraylike2object/dist'),E=f();function F(o,r,v,m,i,e,t){var a,c,p,h,g,l,u,q,n;if(o<=0)return r;if(h=O(r),g=O(i),h.accessorProtocol||g.accessorProtocol)return E(o,h,v,m,g,e,t),r;for(c=0,a=o-1,l=m,u=m+a*v,q=t,n=t+a*e;c<a;){for(;c<a&&i[q]!==0;)c+=1,l+=v,q+=e;for(;a>c&&i[n]!==0;)a-=1,u-=v,n-=e;if(c>=a)break;p=r[l],r[l]=r[u],r[u]=p,c+=1,l+=v,q+=e,a-=1,u-=v,n-=e}return r}R.exports=F
});var B=y(function(S,A){
var z=require('@stdlib/strided-base-stride2offset/dist'),G=x();function H(o,r,v,m,i){var e=z(o,v),t=z(o,i);return G(o,r,v,e,m,i,t)}A.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),J=x();I(C,"ndarray",J);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
