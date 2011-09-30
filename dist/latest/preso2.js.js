// === Sylvester ===
// Vector and Matrix mathematics modules for JavaScript
// Copyright (c) 2007 James Coglan
// 
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('9 17={3i:\'0.1.3\',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8\'[\'+7.4.2K(\', \')+\']\'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])==\'1f\'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K(\'\\n\')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!=\'1f\'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)==\'1f\'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)==\'1f\'&&1g(a.W)==\'1f\'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)==\'1f\'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;',62,206,'||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ'.split('|'),0,{}))/*
 * purecssmatrix.js, version 0.10, part of:
 * http://janne.aukia.com/zoomooz
 *
 * 0.10 initial stand-alone version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 */
 
 PureCSSMatrix = (function() {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//
    
    var regexp_is_deg = /deg$/;
    var regexp_filter_number = /([0-9.\-e]+)/g;
    var regexp_trans_splitter = /([a-zA-Z]+)\(([^\)]+)\)/g;
    
    //**********************************//
    //***  WebKitCSSMatrix in        ***//
    //***  pure Javascript           ***//
    //**********************************//
    
    function cssMatrix(trans) {
        if(trans && trans !== null && trans!="none") {
            if(trans instanceof Matrix) {
                this.setMatrix(trans);
            } else {
                this.setMatrixValue(trans);
            }
        } else {
            this.m = Matrix.I(3);
        }
    }
    
    cssMatrix.prototype.setMatrix = function(matr) {
        this.m = matr;
    };
    
    function rawRotationToRadians(raw) {
        var rot = parseFloat(filterNumber(raw));
        if(raw.match(regexp_is_deg)) {
            rot = (2*Math.PI)*rot/360.0;
        }
        return rot;
    }
    
    cssMatrix.prototype.setMatrixValue = function(transString) {
        var mtr = Matrix.I(3);
        var items;
        while((items = regexp_trans_splitter.exec(transString)) !== null) {
            var action = items[1].toLowerCase();
            var val = items[2].split(",");
            var trans;
            if(action=="matrix") {
                trans = $M([[parseFloat(val[0]),parseFloat(val[2]),parseFloat(filterNumber(val[4]))],
                               [parseFloat(val[1]),parseFloat(val[3]),parseFloat(filterNumber(val[5]))],
                               [                0,                0,                              1]]);
            } else if(action=="translate") {
                trans = Matrix.I(3);
                trans.elements[0][2] = parseFloat(filterNumber(val[0]));
                trans.elements[1][2] = parseFloat(filterNumber(val[1]));
            } else if(action=="scale") {
                var sx = parseFloat(val[0]);
                var sy;
                if(val.length>1) {
                    sy = parseFloat(val[1]);
                } else {
                    sy = sx;
                }
                trans = $M([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
            } else if(action=="rotate") {
                trans = Matrix.RotationZ(rawRotationToRadians(val[0]));
            } else if(action=="skew" || action=="skewx") {
                // TODO: supports only one parameter skew
                trans = Matrix.I(3);
                trans.elements[0][1] = Math.tan(rawRotationToRadians(val[0]));
            } else if(action=="skewy") {
                // TODO: test that this works (or unit test them all!)
                trans = Matrix.I(3);
                trans.elements[1][0] = Math.tan(rawRotationToRadians(val[0]));
            } else {
                console.log("Problem with setMatrixValue", action, val);
            }
            
            mtr = mtr.multiply(trans);
        }
        
        this.m = mtr;
    };
    
    cssMatrix.prototype.multiply = function(m2) {
        return new cssMatrix(this.m.multiply(m2.m));
    };
    
    cssMatrix.prototype.inverse = function() {
        return new cssMatrix(this.m.inverse());
    };
    
    cssMatrix.prototype.translate = function(x,y) {
        var trans = Matrix.I(3);
        trans.elements[0][2] = x;
        trans.elements[1][2] = y;
        return new cssMatrix(this.m.multiply(trans));
    };
    
    cssMatrix.prototype.scale = function(sx,sy) {
        var trans = $M([[sx, 0, 0], [0, sy, 0], [0, 0, 1]]);
        return new cssMatrix(this.m.multiply(trans));    
    };
    
    cssMatrix.prototype.rotate = function(rot) {
        var trans = Matrix.RotationZ(rot);
        return new cssMatrix(this.m.multiply(trans));
    };
    
    cssMatrix.prototype.toString = function() {
        var e = this.m.elements;
        var pxstr = "";
        if($.browser.mozilla || $.browser.opera) {
            pxstr = "px";
        }
        return "matrix("+printFixedNumber(e[0][0])+", "+printFixedNumber(e[1][0])+", "+
                         printFixedNumber(e[0][1])+", "+printFixedNumber(e[1][1])+", "+
                         printFixedNumber(e[0][2])+pxstr+", "+printFixedNumber(e[1][2])+pxstr+")";
    };
    
    function filterNumber(x) {
        return x.match(regexp_filter_number);
    }
    
    function printFixedNumber(x) {
        return Number(x).toFixed(6);
    }

    return cssMatrix;
})();/*
 * jquery.positioning.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * Version history:
 * 0.10 initial stand-alone version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
 *
 * Functions CubicBezierAtPosition and  
 * CubicBezierAtTime are written by Christian Effenberger, 
 * and correspond 1:1 to WebKit project functions.
 * "WebCore and JavaScriptCore are available under the 
 * Lesser GNU Public License. WebKit is available under 
 * a BSD-style license."
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//
    
    var css_matrix_class;
    
    var animation_start_time;
    var animation_interval_timer;
    
    var regexp_filter_number = /([0-9.\-e]+)/g;
    var regexp_trans_splitter = /([a-z]+)\(([^\)]+)\)/g;
    var regexp_is_deg = /deg$/;

    //**********************************//
    //***  Setup css hook for IE     ***//
    //**********************************//
    
    jQuery.cssHooks["MsTransform"] = {
        set: function( elem, value ) {
            elem.style.msTransform = value;
        }
    };
    
    jQuery.cssHooks["MsTransformOrigin"] = {
        set: function( elem, value ) {
            elem.style.msTransformOrigin = value;
        }
    };

    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//
    
    // element: settings.root
    $.fn.animateTransformation = function(transformation, settings, in_css_matrix_class) {
        css_matrix_class = in_css_matrix_class;
        
        this.each(function() {
            var element = $(this);
            var current_affine = constructAffineFixingRotation(element);
            var final_affine = affineTransformDecompose(transformation);
            final_affine = fixRotationToSameLap(current_affine, final_affine);
            
            if($.browser.webkit && settings.nativeanimation) {
                settings.root.css(constructZoomRootCssTransform(matrixCompose(final_affine), settings.duration, settings.easing));
            } else {
                animateTransition(current_affine, final_affine, settings);
            }
        });
    }
    
    //**********************************//
    //***  Element positioning       ***//
    //**********************************//
    
    function constructZoomRootCssTransform(trans, duration, easing, rootElement) {
        var transdur = roundNumber(duration/1000,6)+"s";
        var transtiming = constructEasingCss(easing);
        
        var propMap = {};
        
        propMap["-ms-transform"] = trans;
        propMap["-webkit-transform"] = trans;
        propMap["-moz-transform"] = trans;
        propMap["-o-transform"] = trans;
        propMap["transform"] = trans;
        
        if(duration) { 
            propMap["-webkit-transition-duration"] = transdur;
            propMap["-o-transition-duration"] = transdur;
        }
        
        if(easing) {
            propMap["-webkit-transition-timing-function"] = transtiming;
            propMap["-o-transition-timing-function"] = transtiming;
        }
        
        return propMap;
    }
    
    //**********************************//
    //***  Non-native animation      ***//
    //**********************************//
    
    function animateTransition(st, et, settings) {
        
        if(!st) {
            st = affineTransformDecompose(new css_matrix_class());
        }
        animation_start_time = (new Date()).getTime();
        if(animation_interval_timer) {
            clearInterval(animation_interval_timer);
            animation_interval_timer = null;
        }
        if(settings.easing) {
            settings.easingfunction = constructEasingFunction(settings.easing, settings.duration);
        }
        animation_interval_timer = setInterval(function() { animationStep(st, et, settings); }, 1);    
    }
    
    function animationStep(affine_start, affine_end, settings) {
        var current_time = (new Date()).getTime() - animation_start_time;
        var time_value;
        if(settings.easingfunction) {
            time_value = settings.easingfunction(current_time/settings.duration);
        } else {
            time_value = current_time/settings.duration;
        }
        
        if(current_time>settings.duration) {
            clearInterval(animation_interval_timer);
            animation_interval_timer = null;
            time_value=1.0;
        }
        
        settings.root.css(constructZoomRootCssTransform(matrixCompose(interpolateArrays(affine_start, affine_end, time_value))));
    }
    
    /* Based on pseudo-code in:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=531344
     */
    function affineTransformDecompose(matrix) {
        var m = fetchElements(matrix);
        var a=m.a, b=m.b, c=m.c, d=m.d, e=m.e, f=m.f;
        
        if(Math.abs(a*d-b*c)<0.01) {
            console.log("fail!");
            return;
        }
        
        var tx = e, ty = f;
        
        var sx = Math.sqrt(a*a+b*b);
        a = a/sx;
        b = b/sx;
        
        var k = a*c+b*d;
        c -= a*k;
        d -= b*k;
        
        var sy = Math.sqrt(c*c+d*d);
        c = c/sy;
        d = d/sy;
        k = k/sy;
        
        if((a*d-b*c)<0.0) {
            a = -a;
            b = -b;
            c = -c;
            d = -d;
            sx = -sx;
            sy = -sy;
        }
    
        var r = Math.atan2(b,a);
        return {"tx":tx, "ty":ty, "r":r, "k":Math.atan(k), "sx":sx, "sy":sy};
    }
    
    function matrixCompose(ia) {
        var ret = "translate("+roundNumber(ia.tx,6)+"px,"+roundNumber(ia.ty,6)+"px) ";
        ret += "rotate("+roundNumber(ia.r,6)+"rad) skewX("+roundNumber(ia.k,6)+"rad) ";
        ret += "scale("+roundNumber(ia.sx,6)+","+roundNumber(ia.sy,6)+")";
        return ret;
    }
    
    //**********************************//
    //***  Easing functions          ***//
    //**********************************//
    
    function constructEasingCss(input) {
        if((input instanceof Array)) {
            return "cubic-bezier("+roundNumber(input[0],6)+","+roundNumber(input[1],6)+","+
                                   roundNumber(input[2],6)+","+roundNumber(input[3],6)+")";
        } else {
            return input;
        }
    }
    
    function constructEasingFunction(input, dur) {
        var params = [];
        if((input instanceof Array)) {
            params = input;
        } else {
            switch(input) {
                case "linear": params = [0.0,0.0,1.0,1.0]; break;
                case "ease": params = [0.25,0.1,0.25,1.0]; break;
                case "ease-in": params = [0.42,0.0,1.0,1.0]; break;
                case "ease-out": params = [0.0,0.0,0.58,1.0]; break;
                case "ease-in-out": params = [0.42,0.0,0.58,1.0]; break;
            }
        }
        
        var easingFunc = function(t) {
            return CubicBezierAtTime(t, params[0], params[1], params[2], params[3], dur);
        };
        
        return easingFunc;
    }
    
    // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
    function CubicBezierAtPosition(t,P1x,P1y,P2x,P2y) {
        var x,y,k=((1-t)*(1-t)*(1-t));
        x=P1x*(3*t*t*(1-t))+P2x*(3*t*(1-t)*(1-t))+k;
        y=P1y*(3*t*t*(1-t))+P2y*(3*t*(1-t)*(1-t))+k;
        return {x:Math.abs(x),y:Math.abs(y)};
    }
    
    // From: http://www.netzgesta.de/dev/cubic-bezier-timing-function.html
    // 1:1 conversion to js from webkit source files
    // UnitBezier.h, WebCore_animation_AnimationBase.cpp
    function CubicBezierAtTime(t,p1x,p1y,p2x,p2y,duration) {
        var ax=0,bx=0,cx=0,ay=0,by=0,cy=0;
        // `ax t^3 + bx t^2 + cx t' expanded using Horner's rule.
        function sampleCurveX(t) {return ((ax*t+bx)*t+cx)*t;}
        function sampleCurveY(t) {return ((ay*t+by)*t+cy)*t;}
        function sampleCurveDerivativeX(t) {return (3.0*ax*t+2.0*bx)*t+cx;}
        // The epsilon value to pass given that the animation is going to run over |dur| seconds. The longer the
        // animation, the more precision is needed in the timing function result to avoid ugly discontinuities.
        function solveEpsilon(duration) {return 1.0/(200.0*duration);}
        function solve(x,epsilon) {return sampleCurveY(solveCurveX(x,epsilon));}
        // Given an x value, find a parametric value it came from.
        function solveCurveX(x,epsilon) {var t0,t1,t2,x2,d2,i;
            function fabs(n) {if(n>=0) {return n;}else {return 0-n;}}
            // First try a few iterations of Newton's method -- normally very fast.
            for(t2=x, i=0; i<8; i++) {x2=sampleCurveX(t2)-x; if(fabs(x2)<epsilon) {return t2;} d2=sampleCurveDerivativeX(t2); if(fabs(d2)<1e-6) {break;} t2=t2-x2/d2;}
            // Fall back to the bisection method for reliability.
            t0=0.0; t1=1.0; t2=x; if(t2<t0) {return t0;} if(t2>t1) {return t1;}
            while(t0<t1) {x2=sampleCurveX(t2); if(fabs(x2-x)<epsilon) {return t2;} if(x>x2) {t0=t2;}else {t1=t2;} t2=(t1-t0)*0.5+t0;}
            return t2; // Failure.
        }
        // Calculate the polynomial coefficients, implicit first and last control points are (0,0) and (1,1).
        cx=3.0*p1x; bx=3.0*(p2x-p1x)-cx; ax=1.0-cx-bx; cy=3.0*p1y; by=3.0*(p2y-p1y)-cy; ay=1.0-cy-by;
        // Convert from input time to parametric value in curve, then from that to output time.
        return solve(t, solveEpsilon(duration));
    }

    //**********************************//
    //***  CSS Matrix helpers        ***//
    //**********************************//

    function fetchElements(m) {
        var mv;
        
        if(m instanceof PureCSSMatrix) {
            mv = m.m.elements;
        } else if(m instanceof Matrix) {
            mv = m.elements;
        }
        
        if(!mv) {
            return {"a":m.a,"b":m.b,"c":m.c,"d":m.d,"e":m.e,"f":m.f};
        }
        
        return {"a":mv[0][0],"b":mv[1][0],"c":mv[0][1],
                "d":mv[1][1],"e":mv[0][2],"f":mv[1][2]};
    }
    
    function constructAffineFixingRotation(elem) {
        var rawTrans = getElementTransform(elem);
        var matr;
        if(!rawTrans) {
            matr = new css_matrix_class();
        } else {
            matr = new css_matrix_class(rawTrans);
        }
        var current_affine = affineTransformDecompose(matr);
        current_affine.r = getTotalRotation(rawTrans);
        return current_affine;
    }
    
    function getTotalRotation(transString) {
        var totalRot = 0;
        var items;
        while((items = regexp_trans_splitter.exec(transString)) !== null) {
            var action = items[1].toLowerCase();
            var val = items[2].split(",");
            if(action=="matrix") {
                var trans = $M([[parseFloat(val[0]),parseFloat(val[2]),parseFloat(filterNumber(val[4]))],
                               [parseFloat(val[1]),parseFloat(val[3]),parseFloat(filterNumber(val[5]))],
                               [                0,                0,                              1]]);
                totalRot += affineTransformDecompose(trans).r;
            } else if(action=="rotate") {
                var raw = val[0];
                var rot = parseFloat(filterNumber(raw));
                if(raw.match(regexp_is_deg)) {
                    rot = (2*Math.PI)*rot/360.0;
                }
                totalRot += rot;
            }
        }
        return totalRot;
    }
    
    // TODO: use modulo instead of loops
    function fixRotationToSameLap(current_affine, final_affine) {
        if(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
            if(final_affine.r<current_affine.r) {
                while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                    final_affine.r+=(2*Math.PI);
                }
            } else {
                while(Math.abs(current_affine.r-final_affine.r)>Math.PI) {
                    final_affine.r-=(2*Math.PI);
                }
            }
        }
        return final_affine;
    }
    
    //**********************************//
    //***  Helpers                   ***//
    //**********************************//
    
    function interpolateArrays(st, et, pos) {
        var it = {};
        for(var i in st) {
            if (st.hasOwnProperty(i)) {
                it[i] = st[i]+(et[i]-st[i])*pos;
            }
        }
        return it;
    }
    
    function roundNumber(number, precision) {
        precision = Math.abs(parseInt(precision,10)) || 0;
        var coefficient = Math.pow(10, precision);
        return Math.round(number*coefficient)/coefficient;
    }
    
    function filterNumber(x) {
        return x.match(regexp_filter_number);
    }
    
    function getElementTransform(elem) {
        return ($(elem).css("-webkit-transform") || 
                $(elem).css("-moz-transform") || 
                $(elem).css("-o-transform") || 
                $(elem).css("-ms-transform") || 
                $(elem).css("transform"));
    }
    
})(jQuery);/*
 * jquery.zoomooz.js, part of:
 * http://janne.aukia.com/zoomooz
 *
 * Version history:
 * 0.86 fixed a bug with non-body zoom root
 * 0.85 basic IE9 support
 * 0.81 basic support for scrolling
 * 0.80 refactored position code to a separate file
 * 0.72 fixed a bug with skew in Webkit
 * 0.71 fixed bugs with FF4
 * 0.70 support for non-body zoom root
 * 0.69 better settings management
 * 0.68 root element tuning
 * 0.67 adjustable zoom origin (not fully working yet)
 * 0.65 zoom origin to center
 * 0.63 basic Opera support
 * 0.61 refactored to use CSSMatrix classes
 * 0.51 initial public version
 *
 * LICENCE INFORMATION:
 *
 * Copyright (c) 2010 Janne Aukia (janne.aukia.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL Version 2 (GPL-LICENSE.txt) licenses.
 *
 * LICENCE INFORMATION FOR DERIVED FUNCTIONS:
 *
 * Function computeTotalTransformation based
 * on jquery.fn.offset, copyright John Resig, 2010
 * (MIT and GPL Version 2).
 *
 */

/*jslint sub: true */

(function($) {
    "use strict";

    //**********************************//
    //***  Variables                 ***//
    //**********************************//
    
    var css_matrix_class;
    var default_settings;
    
    //**********************************//
    //***  jQuery functions          ***//
    //**********************************//
    
    $.zoomMooz = {};
    $.zoomMooz.setup = function(settings) {
        default_settings = jQuery.extend(constructDefaultSettings(), settings);
        css_matrix_class = setupMatrixClass(default_settings);
    };
    
    $.fn.debug = function(settings) {
        if(!default_settings) {
            $.zoomMooz.setup();
        }
        
        settings = jQuery.extend(default_settings, settings);
        
        if($("#debug").length===0) {
            $(settings.root).append('<div id="debug"><div>');
        } else {
            $("#debug").html("");
        }
        this.each(function() {
            if($(this)[0] != settings.root[0]) {
                showDebug($(this),settings);
            }
        });
    };
    
    $.fn.zoomTo = function(settings) {
		
        if(!default_settings) {
            $.zoomMooz.setup();
        }
        settings = jQuery.extend(default_settings, settings);
        
        // um, does it make any sense to zoom to each of the matches?
        this.each(function() {
            zoomTo($(this), settings);
        });
        
        return this;
    };
    
    //**********************************//
    //***  Setup functions           ***//
    //**********************************//
    
    function constructDefaultSettings() {
        return {
            targetsize: 0.9,
            scalemode: "both",
            duration: 1000,
            easing: "ease",
            root: $(document.body),
            nativeanimation: false
        };
    }
    
    function setupMatrixClass(settings) {
        // could use WebKitCSSMatrix in webkit as well, which would
        // speed up computation a bit, but this eases debugging
        return PureCSSMatrix;
    }
    
    //**********************************//
    //***  Main zoom function        ***//
    //**********************************//
    
    function zoomTo(elem, settings) {
        handleScrolling(elem, settings);
        
        if(elem[0] === settings.root[0]) {
        	
        	// computeTotalTransformation does not work correctly if the
        	// element and the root are the same
        	
        	$(settings.root).animateTransformation(new css_matrix_class(), settings, css_matrix_class);
        	
        } else {
        	
        	var transform = computeTotalTransformation(elem, settings.root);
        	var inverse = (transform) ? transform.inverse(): null;
        	var roottrans = computeViewportTransformation(elem, inverse, settings);
        	
        	$(settings.root).animateTransformation(roottrans, settings, css_matrix_class);
    	}
    }
    
    //**********************************//
    //***  Handle scrolling          ***//
    //**********************************//
    
    function handleScrolling(elem, settings) {
    	var $root = settings.root;
    	
    	// TODO: untested for non-body zoom roots!
    	
    	var $scroll;
    	if($root[0] === document.body) {
    	    $scroll = $("html");
    	} else {
    	    $scroll = $root;
    	}
    	
    	if(elem[0] === $root[0]) {
        
            /*var scrollData = $scroll.data("original-scroll");
            
            if(scrollData) {
                var elem = scrollData[0];
                var scrollX = scrollData[1];
                var scrollY = scrollData[2];
                elem.scrollLeft(scrollX);
                elem.scrollTop(scrollY);
                $scroll.data("original-scroll",null);
            }*/
            
            // release scroll lock
            $scroll.removeClass("noScroll");
            
        } else if(!$scroll.hasClass("noScroll")) {
        
            // safari
            var scrollY = $root.scrollTop();
            var scrollX = $root.scrollLeft();
            var elem = $root;
            
            // moz
            if(!scrollY) {
                scrollY = $scroll.scrollTop();
                scrollX = $scroll.scrollLeft();
                elem = $scroll;
            }
            
            $scroll.addClass("noScroll");
            
            //$scroll.data("original-scroll",[elem,scrollX,scrollY]);
            
            $root.scrollTop(0);
            $root.scrollLeft(0);
            
            var transformStr = "translate(-"+scrollX+"px,-"+scrollY+"px)";
            $root.css("-ms-transform", transformStr);
            $root.css("-webkit-transform", transformStr);
            $root.css("-moz-transform", transformStr);
            $root.css("-o-transform", transformStr);
            
	    }
	}
			
    //**********************************//
    //***  Element positioning       ***//
    //**********************************//
    
    function computeViewportTransformation(elem, endtrans, settings) {
        var zoomAmount = settings.targetsize;
        var zoomMode = settings.scalemode;
        var zoomParent = settings.root;
        
        var dw = $(zoomParent).width();
        var dh = $(zoomParent).height();
        
        var relw = dw/elem.outerWidth();
        var relh = dh/elem.outerHeight();
        
        var scale;
        if(zoomMode=="width") {
            scale = zoomAmount*relw;
        } else if(zoomMode=="height") {
            scale = zoomAmount*relh;
        } else if(zoomMode=="both") {
            scale = zoomAmount*Math.min(relw,relh);
        } else {
            console.log("wrong zoommode");
            return;
        }
        
        var xoffset = (dw-elem.outerWidth()*scale)/2.0;
        var yoffset = (dh-elem.outerHeight()*scale)/2.0;
        
        var xrotorigin = dw/2.0;
        var yrotorigin = dh/2.0;
        
        var offsetStr = printFixedNumber(xrotorigin)+"px "+printFixedNumber(yrotorigin)+"px";
        zoomParent.css("-ms-transform-origin", offsetStr);
        zoomParent.css("-webkit-transform-origin", offsetStr);
        zoomParent.css("-o-transform-origin", offsetStr);
        zoomParent.css("-moz-transform-origin", offsetStr);
        
        var endpostrans = new css_matrix_class();
        endpostrans = endpostrans.translate(-xrotorigin,-yrotorigin);
        endpostrans = endpostrans.translate(xoffset,yoffset);
        endpostrans = endpostrans.scale(scale,scale);
        if(endtrans) {
            endpostrans = endpostrans.multiply(endtrans);
        }
        endpostrans = endpostrans.translate(xrotorigin,yrotorigin);
        
        return endpostrans;
    }
    
    //**********************************//
    //***  Debugging positioning     ***//
    //**********************************//
    
    function calcPoint(e,x,y) {
        return [e.a*x+e.c*y+e.e,e.b*x+e.d*y+e.f];
    }
    
    function showDebug(elem, settings) {
        var transform = computeTotalTransformation(elem, settings.root);
        var e = fetchElements(transform);
        displayLabel(calcPoint(e,0,0));
        displayLabel(calcPoint(e,0,elem.outerHeight()));
        displayLabel(calcPoint(e,elem.outerWidth(),elem.outerHeight()));
        displayLabel(calcPoint(e,elem.outerWidth(),0));
    }
    
    function displayLabel(pos) {
        var label = '<div class="debuglabel" style="left:'+pos[0]+'px;top:'+pos[1]+'px;"></div>';
        $("#debug").append(label);
    }
    
    //**********************************//
    //***  Calculating element       ***//
    //***  total transformation      ***//
    //**********************************//
    
    /* Based on:
     * jQuery.fn.offset
     */
    function computeTotalTransformation(input, transformationRootElement) {
        var elem = input[0];
        if( !elem || !elem.ownerDocument ) {
            return null;
        }
        
        var totalTransformation = new css_matrix_class();
        
        var trans;
        if ( elem === elem.ownerDocument.body ) {
            var bOffset = jQuery.offset.bodyOffset( elem );
            trans = new css_matrix_class();
            trans = trans.translate(bOffset.left, bOffset.top);
            totalTransformation = totalTransformation.multiply(trans);
            return totalTransformation;
        }
        
        jQuery.offset.initialize();
    
        var offsetParent = elem.offsetParent;
        var doc = elem.ownerDocument;
        var computedStyle;
        var docElem = doc.documentElement;
        var body = doc.body;
        var root = transformationRootElement[0];
        var defaultView = doc.defaultView;
        var prevComputedStyle;
        if(defaultView) {
            prevComputedStyle = defaultView.getComputedStyle( elem, null );
        } else {
            prevComputedStyle = elem.currentStyle;
        }
        
        var top = elem.offsetTop;
        var left = elem.offsetLeft;
        
        var transformation = constructTransformation().translate(left,top);
        transformation = transformation.multiply(constructTransformation(elem));
        totalTransformation = transformation.multiply((totalTransformation));
        // loop from node down to root
        while ( (elem = elem.parentNode) && elem !== body && elem !== docElem && elem !== root) {
            top = 0; left = 0;
            if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
                break;
            }
            computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
            top  -= elem.scrollTop;
            left -= elem.scrollLeft;
            if ( elem === offsetParent ) {
                top  += elem.offsetTop;
                left += elem.offsetLeft;
                if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.nodeName)) ) {
                    top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
                    left += parseFloat( computedStyle.borderLeftWidth ) || 0;
                }
                offsetParent = elem.offsetParent;
            }
            if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
                top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
                left += parseFloat( computedStyle.borderLeftWidth ) || 0;
            }
            prevComputedStyle = computedStyle;
            
            transformation = constructTransformation().translate(left,top);
            transformation = transformation.multiply(constructTransformation(elem));
            totalTransformation = transformation.multiply(totalTransformation);
        
        }
        
        top = 0; left = 0;
        if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
            top  += body.offsetTop;
            left += body.offsetLeft;
        }
        if ( jQuery.offset.supportsFixedPosition && prevComputedStyle.position === "fixed" ) {
            top  += Math.max( docElem.scrollTop, body.scrollTop );
            left += Math.max( docElem.scrollLeft, body.scrollLeft );
        }
        
        var itertrans = (new css_matrix_class()).translate(left,top);
        totalTransformation = totalTransformation.multiply(itertrans);
        
        return totalTransformation;
        
    }

    //**********************************//
    //***  CSS Matrix helpers        ***//
    //**********************************//
    
    // also in animtrans
    function fetchElements(m) {
        var mv;
        
        if(m instanceof PureCSSMatrix) {
            mv = m.m.elements;
        } else if(m instanceof Matrix) {
            mv = m.elements;
        }
        
        if(!mv) {
            return {"a":m.a,"b":m.b,"c":m.c,"d":m.d,"e":m.e,"f":m.f};
        }
        
        return {"a":mv[0][0],"b":mv[1][0],"c":mv[0][1],
                "d":mv[1][1],"e":mv[0][2],"f":mv[1][2]};
    }
    
    function constructTransformation(elem) {
        var rawTrans = getElementTransform(elem);
        if(!rawTrans) {
            return new css_matrix_class();
        } else {
            return new css_matrix_class(rawTrans);
        }
    }
    
    //**********************************//
    //***  Helpers                   ***//
    //**********************************//
    
    function printFixedNumber(x) {
        return Number(x).toFixed(6);
    }
    
    function getElementTransform(elem) {
        return ($(elem).css("-webkit-transform") || 
                $(elem).css("-moz-transform") || 
                $(elem).css("-o-transform") || 
                $(elem).css("-ms-transform") || 
                $(elem).css("transform"));
    }
    
})(jQuery);

(function($) {
	
	// Touché object
	$.touche = {};
	
	// The object that contains information about the current
	// traces in the page, indexed by their touch identifier
	$.touche.traces = {};
	
	// Add a trace to the traces object
	$.touche.addTrace = function( trace ) {
		
		$.touche.traces[trace.id] = trace;
		
		return trace;
	};
	
	// Remove a trace from the traces object
	$.touche.removeTrace = function( trace ) {
		
		delete $.touche.traces[trace.id];
		
		return trace;
	};
	
	// Small function to disable default touches. This is
	// currently a quick fix that won't capture any default
	// touch events i.e. hyperlinks
	$.touche.preventDefaults = function() {
		
		$('body').bind('touchstart', function( e ) {
			e.preventDefault();
		});
	};
	
	// Listeners that handle touch events on the body, to
	// allow elements to follow traces outside their bounds.
	// These are implemented statically for 2 reasons:
	// - Unlike mousemove, there is no overhead for statically listening to the event as touch events are only fired
	//   when a "drag" event occurs (i.e. unlike mousemove)
	// - Touch events contain all the information about touch movement, so we only need one listener for each event
	//
	// It is therefore important NOT to stopPropogation on touchmove and touchend events for touch(function($) {
	
	// Touché object
	$.touche = {};
	
	// The object that contains information about the current
	// traces in the page, indexed by their touch identifier
	$.touche.traces = {};
	
	// Add a trace to the traces object
	$.touche.addTrace = function( trace ) {
		
		$.touche.traces[trace.id] = trace;
		
		return trace;
	};
	
	// Remove a trace from the traces object
	$.touche.removeTrace = function( trace ) {
		
		delete $.touche.traces[trace.id];
		
		return trace;
	};
	
	// Small function to disable default touches and clicks. This is
	// currently a quick fix that won't capture ANY default
	// touchdown events i.e. hyperlinks and clicks
	$.touche.preventDefaults = function() {
		
		// Prevents default scrolling in the iPhone
		$('body').bind('touchstart', function( e ) {
			e.preventDefault();
		});
		
		// Prevents possible browser implemented dragging of content
		$('body').bind('mousedown', function( e ) {
			e.preventDefault();
		});
	};
	
	// Listeners that handle touch events on the body, to
	// allow elements to follow traces outside their bounds.
	// These are implemented statically for 2 reasons:
	// - Unlike mousemove, there is no overhead for statically listening to the event as touch events are only fired
	//   when a "drag" event occurs (i.e. unlike mousemove)
	// - Touch events contain all the information about touch movement, so we only need one listener for each event
	//
	// It is therefore important NOT to stopPropogation on touchmove and touchend events for touché to work properly.
	$.touche.touchStartBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;
 
 // Trigger the start event on the body for anyone who's listening to the trace
			$('body').trigger('tracestart-' + trace.id);
		}
	};
	$.touche.touchMoveBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;
 
 // Update information about the trace
			trace.x = touch.pageX;
			trace.y = touch.pageY;
			trace.max_dx = Math.max(touch.pageX - trace.sx, trace.dx);
			trace.max_dy = Math.max(touch.pageY - trace.sy, trace.dy);
			trace.dx = touch.pageX - trace.sx;
			trace.dy = touch.pageY - trace.sy;
			
			// Current event
			trace.currentEvent = e;
			trace.currentTouch = touch;
			
			// Trigger the move event on the body for anyone who's listening to the trace
			$('body').trigger('tracemove-' + trace.id);
		}
	};
	$.touche.touchEndBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;
 
 // Current event
			trace.currentEvent = e;
			trace.currentTouch = touch;
			
			// Trigger the end event on the body for anyone who's listening to the trace
			$('body').trigger('traceend-' + trace.id);
			
			// Check for click
			if (trace.max_dx == 0 && trace.max_dy == 0) $('body').trigger('traceclick-' + trace.id);
 
 $.touche.removeTrace(trace);
		}
	};
	$.touche.mouseDownBody = function( e ) {
		
		// Check for left click only
		if (e.button != 0) return;
 
 var trace = $.touche.traces[-1];
 
 if (!trace) return;
 
 // Add mousemove and mouseup listeners
 $('body').bind('mousemove', $.touche.mouseMoveBody);
 $('body').bind('mouseup', $.touche.mouseUpBody);
 
 // Trigger the start event on the body for anyone who's listening to the trace
 $('body').trigger('tracestart--1');
	};
	$.touche.mouseMoveBody = function( e ) {
		
		var trace = $.touche.traces[-1];
		
		if (!trace) return;
				   
				   // Update information about the trace
		trace.x = e.pageX;
		trace.y = e.pageY;
		trace.max_dx = Math.max(e.pageX - trace.sx, trace.dx);
		trace.max_dy = Math.max(e.pageY - trace.sy, trace.dy);
		trace.dx = e.pageX - trace.sx;
		trace.dy = e.pageY - trace.sy;	
		
		// Current event
		trace.currentEvent = e;
		trace.currentTouch = null;
		
		// Trigger the move event on the body for anyone who's listening to the trace
		$('body').trigger('tracemove--1');
		
	};
	$.touche.mouseUpBody = function( e ) {
		
		var trace = $.touche.traces[-1];
		
		if (!trace) return;
				   
				   // Current event
		trace.currentEvent = e;
		trace.currentTouch = null;
		
		// Trigger the end event on the body for anyone who's listening to the trace
		$('body').trigger('traceend--1');
		
		$.touche.removeTrace(trace);
		
		// Check for click
		if (trace.max_dx == 0 && trace.max_dy == 0) $('body').trigger('traceclick--1');
				   
				   // Unbind mouse event listeners on body as they are not needed
		$('body').unbind('mousemove', $.touche.mouseMoveBody);
		$('body').unbind('mouseup', $.touche.mouseUpBody);
	};
	
	$.touche.init = function() {
		
		// Bind the static touch listeners to touch and mouse events on the body
		$('body').bind('mousedown', $.touche.mouseDownBody);
		$('body').bind('touchstart', $.touche.touchStartBody);
		$('body').bind('touchmove', $.touche.touchMoveBody);
		$('body').bind('touchend', $.touche.touchEndBody);
	};
	
	// Initialise Touché on document load
	$($.touche.init);
	
	// This function takes a trace and a touché element and binds the element
	// listeners to that trace, meaning it will pick up all the events associated
	// with the trace.
	$.touche.applyTraceToElement = function( trace, element, data ) {
		
		// Functions to allow binding and unbinding of listeners in context
		var tracestart = function() {
			
			var existed = false;
			
			// Check that the trace isn't already listed, otherwise skip adding it twice
			for (var i in data.traces) {
				
				if (data.traces[i].id == trace.id) {
					
					existed = true;
					break;
				};
			}
			
			// Add the trace to the touches array in data
			if (!existed) {
				
				// Call the after event on the element, if there are touches
				if (data.traces.length) data.after.apply(element, [data]);
				   
				   data.traces.push(trace);
				
				// Increment count
				   data.count++;
			}
			
			// Call the start event on the element
			data.start.apply(element, [data, trace]);
			
			// Call the before event on the element
			if (!existed) data.before.apply(element, [data]);
		};
		var tracemove = function() {
			data.move.apply(element, [data, trace]);
		};
		var traceend = function() {
			
			var existed = false;
			
			// Check that the trace exists and remove from the touches array
			for (var i in data.traces) {
				
				if (data.traces[i].id == trace.id) {
					
					// Call the after event on the element
					data.after.apply(element, [data]);
					
					existed = true;
					
					var tr = data.traces.splice(i, 1)[0];
					
					// Decrement count
					data.count--;
					
					break;
				}
			}
			
			// Call the end event on the element, if there are touches
			data.end.apply(element, [data, trace]);
			
			// Call the before event on the element
			if (data.traces.length && existed) data.before.apply(element, [data]);
				   
				   // Unbind the element from specific trace events
			$('body').unbind('tracestart-' + trace.id, tracestart);
			$('body').unbind('tracemove-' + trace.id, tracemove);
			$('body').unbind('traceend-' + trace.id, traceend);
			
			setTimeout(function() {
				$('body').unbind('traceclick-' + trace.id, traceclick);
			}, 0);
		};
		var traceclick = function() {
			data.click.apply(element, [data, trace]);
		};
		
		// Bind this elements start, end and move listeners to the new trace
		$('body').bind('tracestart-' + trace.id, tracestart);
		$('body').bind('tracemove-' + trace.id, tracemove);
		$('body').bind('traceend-' + trace.id, traceend);
		$('body').bind('traceclick-' + trace.id, traceclick);
	};
	
	// Listeners that handle the start of a touch bound to the specific
	// element that we want to capture movement on. These are responsible
	// for binding the touche element events to the traces that are statically
	// handled above.
	$.touche.touchStartElement = function( e ) {
		
		var t = $(this);
		
		// Get the touché data for this element
		var touche = e.data;
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			// Check whether the trace has already been created by a handler
			// of an element that is displaying above the element of this handler.
			if (!trace) {
				
				// Create a new trace
				trace = {
					id: touch.identifier,
				   sx: touch.pageX,
				   sy: touch.pageY,
				   x: touch.pageX,
				   y: touch.pageY,
				   dx: 0,
				   dy: 0,
				   max_dx: 0,
				   max_dy: 0,
				   visible: touche.propagate,
				   originalEvent: e,
				   currentEvent: e,
				   currentTouch: touch,
				   target: e.currentTarget
				};
				
				// Add the trace
				$.touche.addTrace(trace);
				
			} else {
				
				// If the trace does exist, check that it is visible
				if (!trace.visible) continue;
			}
			
			// Apply the trace to the element
			$.touche.applyTraceToElement(trace, t, touche);
		}
	};
	// mousedown allows backwards-compatibility for mouse-driven input
	$.touche.mouseDownElement = function( e ) {
		
		// Check for left click only
		if (e.button != 0) return;
				   
				   var t = $(this);
		
		// Get the touche data for this element
				   var touche = e.data;
				   
				   var trace = $.touche.traces[-1];
				   
				   // Check whether the trace has already been created by a handler
				   // of an element that is displaying above the element of this handler.
				   if (!trace) {
					   
					   // Create a new trace
					   trace = {
						   id: -1,
				   sx: e.pageX,
				   sy: e.pageY,
				   x: e.pageX,
				   y: e.pageY,
				   dx: 0,
				   dy: 0,
				   max_dx: 0,
				   max_dy: 0,
				   visible: touche.propagate,
				   originalEvent: e,
				   currentEvent: e,
				   currentTouch: null,
				   target: e.currentTarget
					   };
					   
					   // Add the trace
					   $.touche.addTrace(trace);
					   
				   } else {
					   
					   // If the trace does exist, check that it is visible
					   if (!trace.visible) return;
				   }
				   
				   // Apply the trace to the element
				   $.touche.applyTraceToElement(trace, t, touche);
	};
	
	// The touch function is called on a jQuery object
	// to give it mouse / touch behaviour
	$.fn.touche = function( options ) {
		
		// Iterate through elements
		this.each(function() {
			
			// Clone options to prevent different elements picking up the same clicks
			if (options.clone)
				options = $.extend(true, {}, options);
		});
		
		// Extend the options object with the default options
		for (var i in $.touche.options)
			if (options[i] === undefined) options[i] = $.touche.options[i];
				   
				   // Bind the touchstart and mousedown listeners
			this.bind('touchstart', options, $.touche.touchStartElement);
		this.bind('mousedown', options, $.touche.mouseDownElement);
		
		// Return the element to allow for function chaining
		return this;
	};
	
	// Default options
	$.touche.options = {
		traces: [],
   count: 0,
   start: $.noop,
   end: $.noop,
   click: $.noop,
   move: $.noop,
   after: $.noop,
   before: $.noop,
   propagate: true,
   clone: true
	};
	
})(jQuery);/*!
 | ''*Name'*'|cecily|
 |''Version''|0.1|
 |''License''|BSD (http://en.wikipedia.org/wiki/BSD_licenses)|
 !*/
var APP_PATH = "/present";
var RESERVED_TITLES = ["cecily", "chrjs-store.js", "chrjs.js", "jquery.min.js"];

(function($) {
	
	window.cecily = {
		
		display: null,			// The display which tiddlers are attached to
		bag: null,				// The current bag cecily should use
		host: null,				// The current host cecily should use
		store: null,			// The chrjs-store store object
		map: null,				// The title of the current map tiddler
		mapData: null,			// An object containing the positions and sizes of tiddlers in the map
		zooming: 0,				// Currently zooming to a tiddler or to multiple tiddlers
		scale: 1.0,				// The current scale of the display
		zoomTrace: [],			// A list of previously visited tiddlers
		currentTiddler: null,	// The currently zoomed tiddler,
		defaultTiddlers: null,	// A list of default tiddlers
		defaultWidth: 260		// Default width of a tiddler
	};
	
	// Initialise cecily
	cecily.init = function() {
		
		// Set host
		cecily.host = document.location.host;
		
		cecily.display = $('#display');
		
		// Load the map
		cecily.setMap('MyMap', function( ok ) {
			
			if (!ok) cecily.mapData = {};
					  
			// Load the default tiddlers
			cecily.loadTiddler('DefaultTiddlers', function( tiddler ) {
				
				var n = 0;
				
				if (tiddler) {
				
					// Parse list of tiddlers from 
					cecily.defaultTidders = cecily.tiddlersFromFilter(tiddler.text);
					
					for (var i in cecily.defaultTidders) {
						
						if (!ok) {
							cecily.mapData[cecily.defaultTidders[i]] = [n * 50 + 2500, n * 50 + 2500, 260, 500];
							
							// Increment offset so when no MyMap tiddlers display in a stack
							n++;
						}
						
						cecily.showTiddler(cecily.defaultTidders[i]);
					};
					
				} else {
					
					cecily.defaultTiddlers = ['GettingStarted'];
					cecily.mapData['GettingStarted'] = [2550, 2550, 260, 500];
					cecily.showTiddler('GettingStarted');
				}
				
			});
		});
		
		// Prevent default mouse and touch down events
		$.touche.preventDefaults();
		
		// Make the display interactive
		$('#display').touche({
			before: cecily.displayBeforeAction,
			after: cecily.displayAfterAction,
			move: cecily.displayMove,
			click: cecily.displayClick
		});
	};
	
	// Initialise cecily on document load
	$(function() {
		// Set up chrjs-store
		cecily.store = new tiddlyweb.Store(cecily.init);
	});
	
	// Display actions handle dragging and zooming on the display
	
	// Start an action on the display
	cecily.displayBeforeAction = function( data ) {
		
		// Update the display matrix and stop zooming
		cecily.updateDisplayMatrix();
		cecily.zooming = Math.max(0, cecily.zooming - 1);
		
		// Remember initial position
		data.cssX = parseFloat(cecily.display.attr('tx')) || 0;
		data.cssY = parseFloat(cecily.display.attr('ty')) || 0;
		
		// Save trace offset in case dragging swaps fingers
		if (data.count == 1) {
			data.offsetX = data.traces[0].dx;
			data.offsetY = data.traces[0].dy;
		}
		
		if (data.count == 2) {
			
			// Calculate the scale
			data.scale = Math.pow(Math.pow(data.traces[0].x - data.traces[1].x, 2) + Math.pow(data.traces[0].y - data.traces[1].y, 2), 0.5);
			
			// Calculate the midpoint
			data.midpointX = (data.traces[0].x + data.traces[1].x) / 2;
			data.midpointY = (data.traces[0].y + data.traces[1].y) / 2;	
		}
		
		data.tx = data.cssX; 
		data.ty = data.cssY;
	};
	// End an action on the display
	cecily.displayAfterAction = function( data ) {
		
		// Update attributes
		cecily.updateDisplayMatrix();
	};
	// Move on the display
	cecily.displayMove = function( data, trace ) {
		
		// No longer focus on tiddler
		cecily.currentTiddler = null;
		
		// Check for drag
		if (data.count == 1) {
			
			data.tx = data.cssX + trace.dx - data.offsetX;
			data.ty = data.cssY + trace.dy - data.offsetY;
			
			$('body').css({
				'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'transition': '',
				'-webkit-transition': '',
				'-moz-transition': '',
				'transition': ''
			});
						  
						  // Check 
		} else if (data.count == 2) {
			
			// Calculate the ratio of size change
			data.sFactor = Math.pow(Math.pow(data.traces[0].x - data.traces[1].x, 2) + Math.pow(data.traces[0].y - data.traces[1].y, 2), 0.5) / data.scale * cecily.scale;
			
			// Calculate the new midpoint
			var midX = (data.traces[0].x + data.traces[1].x) / 2;
			var midY = (data.traces[0].y + data.traces[1].y) / 2;
			
			data.tx = data.cssX + (midX - data.midpointX);
			data.ty = data.cssY + (midY - data.midpointY);
			
			$('body').css({
				'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'-webkit-transition': '',
				'-moz-transition': '',
				'transition': ''
			});
		}
	};	
	// Click the display
	cecily.displayClick = function() {
		cecily.zoomToTiddler(false);
	};
	
	// Loads the current map and parses into cecily.mapData
	cecily.setMap = function( title, callback ) {
		
		// Load the tiddler
		cecily.loadTiddler(title, function( tiddler ) {
			
			if (!tiddler) {
				callback(false);
				return;
			}
			
			cecily.map = title;
			cecily.mapData = {};
			
			// Parse the map data
			var data = tiddler.text.split("\n");
			
			for (var i in data) {
				
				var vals = data[i].split(' ');
				var name = vals.shift();
				
				cecily.mapData[name] = vals;
			}
			
			callback(true);
		});
	};
	
	// Load a tiddler from the server and callback contents on completion
	cecily.loadTiddler = function( title, callback ) {
		
		cecily.store.get(title, function( tid ) {
			
			if(tid) {
				
				callback(tid);
				
			}  else {
				//TODO: Handle error
				callback(false);
			}
			
		}, true);
	};
	
	// Show a tiddler on the page
	cecily.showTiddler = function( title, callback ) {
		
		callback = callback || $.noop;
		
		// Check for already showing
		if ($('#tiddler' + title).length) {
			callback(true);
			return;
		}
		
		// First load the tiddler
		cecily.loadTiddler(title, function( tiddler ) {
			
			if (!tiddler) {
				callback(false);
				return;
			}		
			
			// Create the element
			var elem = $('<div class="tiddler" id="tiddler' + tiddler.title + '" tiddler="' + tiddler.title + '"></div>');
			
			// Count tiddlers to calculate z-ordering
			var count = $('.tiddler').length;
			
			var x = (cecily.mapData[title]) ? cecily.mapData[title][0]: Math.random() * 4700;
			var y = (cecily.mapData[title]) ? cecily.mapData[title][1]: Math.random() * 4000;
			
			var scale = ((cecily.mapData[title]) ? cecily.mapData[title][2] : cecily.defaultWidth) / cecily.defaultWidth || 1;
			
			elem.css({
				'-webkit-transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
				'-moz-transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
			   'transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
				 zIndex: count,
				display: 'none'
			});
			
			// Record position
			elem.attr('tx', x);
			elem.attr('ty', y);
			
			var close = $('<div class="toolbarLink close" style="float:right">close</div>');
			close.touche({
				click: function() {
					cecily.hideTiddler(title);
				},
				stopPropagation: true
			});
			
			var h1 = $('<h1/>');
			h1.append(tiddler.title);
			
			var heading = $('<div class="heading"></div>');
			heading.append(close);
			heading.append(h1);
			
			h1.touche({
				
				before: function( data ) {
					
					if (data.count == 1) {
						
						var title = this.parent().parent().attr('tiddler');
						
						// Remember initial position
						data.cssX = parseFloat(this.parent().parent().attr('tx')) || 0;
						data.cssY = parseFloat(this.parent().parent().attr('ty')) || 0;
						data.offsetX = data.traces[0].dx;
						data.offsetY = data.traces[0].dy;
						data.scale = ((cecily.mapData[title]) ? cecily.mapData[title][2] : cecily.defaultWidth) / cecily.defaultWidth || 1;
						
						// Bring tiddler to front
						cecily.pushTiddlerToFront(title);
					}
					
				},
			 after: function( data ) {
				 
				 if (data.count == 1) {
					 
					 this.parent().parent().attr('tx', data.tx);
					 this.parent().parent().attr('ty', data.ty);
				 }
				 
			 },
			 move: function( data, trace ) {
				 
				 if (data.count == 1) {
					 
					 data.tx = data.cssX + trace.dx / cecily.scale - data.offsetX;
					 data.ty = data.cssY + trace.dy / cecily.scale - data.offsetY;
					 
					 this.parent().parent().css({
						'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'transition': '',
						'-webkit-transition': '',
						'-moz-transition': '',
						'transition': ''
					 });
					 
				 }
				 
			 },
			 click: function() {
				 
				 if (elem.children('.content:visible').length) {
					 
					 elem.children('.content').slideUp(200);
					 elem.find('.toolbarLink').fadeOut(200);
					 
				 } else {
					 
					 elem.children('.content').slideDown(200);
					 elem.find('.toolbarLink').fadeIn(200);
				 }
			 },
			 propagate: false
			});
			
			elem.append(heading);
			
			var content = $('<div class="content"></div>');
			content.append(tiddler.render);
			
			elem.append(content);
			
			// Zoom on click content
			content.touche({
				
				click: function( data ) {
					cecily.zoomToTiddler(elem.attr('tiddler'));
				},
				
				propagate: false
			});
			
			cecily.display.append(elem);
			
			// Make the tiddler interactive
			cecily.makeTiddlerInteractive(title);
			
			elem.fadeIn(200);
			
			// Set timeout to wait for a draw to calculate height
			setTimeout(function() {
				
				elem.attr('th', elem.height());
				elem.attr('tw', elem.width());
				
				callback(true);
			});
		});
	};
	
	// Hide a tiddler currently showing on the display
	cecily.hideTiddler = function( title ) {
		
		// Get tiddler
		var elem = $('#tiddler' + title);
		
		// Transition
		elem.fadeOut(200);
		
		setTimeout(function() {
			elem.remove();				
		}, 200);
		
		// Re-assign z-indexes
		cecily.assignZOrder();
	};
	
	cecily.pushTiddlerToFront = function( title ) {
		
		var elem = $('#tiddler' + title);
		
		if (!elem.length) return;
						  
						  // Current z-index of tiddler
		var z = elem.css('z-index');
		
		// Reorder view stack
		var tiddlers = $('.tiddler');
		
		tiddlers.each(function() {
			// Reduce z-index of all tiddlers appearing above the target one
			if ($(this).css('z-index') > z)
				$(this).css('z-index', $(this).css('z-index') - 1);
		});
		
		// Push tiddler to front
		elem.css('z-index', tiddlers.length);
	};
	
	// Assign the z-order of the tiddlers
	cecily.assignZOrder = function() {
		
		var i, values = {};
		
		$('.tiddler').each(function() {
			values[$(this).css('z-index')] = $(this);
		});
		
		var keys = [];
		
		// Sort keys
		for (i in values)
			// keys.push(i);
		
		keys.sort();
		
		var n = 1;
		
		// Iterate and reassign z-indexes
		for (i in keys) {
			values[keys[i]].css('z-index', n);
			n++;
		}
	};
	
	// Make tiddler interactive, taking the static html representation of
	// the tiddler and adding cecily specific functionality
	cecily.makeTiddlerInteractive = function( title ) {
		
		// Get tiddler
		var elem = $('#tiddler' + title);
		
		// TODO: Hack to allow internal links in tiddlers that are currently considered to be external links by Twikifier to work correctly
		elem.find('a.externalLink').not('cecily').addClass('cecily').touche({
			
			click: function() {
				
				var link = cecily.tiddlerFromAnchor(this);
				
				if (!link) window.open(this.attr('href'), '_blank');
				
				cecily.showTiddler(link, function( okay ) {
					if (okay)
						cecily.zoomToTiddler(link);
				});
			},
			propagate: false
			
		}).click(function(e) {
			e.preventDefault();
		});
	};
	
	// Filters to parse TiddlyWiki filter syntax
	cecily.filters = {
		
		tiddler: function( results, match ) {
			
			var title = match[1] || match[4];

			results.push(title);

			return results;
		},
		
		tag: function( results, match ) {
			
			var matched = cecily.store().tag(match[3]);
			
			for (var m = 0; m < matched.length; m++) {
				results.push(matched[m].title);
			}
			return results;
		},
		
		sort: function( results, match ) {
			
			return results.sort();
		},
		
		limit: function( results, match ) {
			
			return results.slice(0, parseInt(match[3], 10));
		},
		
		field: function( results, match ) {
			
			var matched = cecily.store().attr(match[2], match[3]);
			
			for (var m = 0; m < matched.length; m++) {
				results.push(matched[m].title);
			}
			return results;
		}
	};
	
	// Resolve a set of TiddlyWiki style filter expressions for tiddlers
	// Input text from a tiddler such as DefaultTiddlers or MainMenu and
	// returns an array of tiddler titles.
	cecily.tiddlersFromFilter = function( input ) {
		
		var re = /([^\s\[\]]+)|(?:\[([ \w\.\-]+)\[([^\]]+)\]\])|(?:\[\[([^\]]+)\]\])/mg;
		
		var results = [];
		
		var match = re.exec(input);
		while( match ) {
			
			var handler = (match[1] || match[4]) ? 'tiddler' : (cecily.filters[match[2]] ? match[2] : 'field');
			results = cecily.filters[handler].call(this, results, match);
			match = re.exec(input);
		}
		
		return results;
	};
	
	// Given a jQuery object containing an anchor element, this function should
	// return the title of the tiddler that it points to, and false if it is an
	// external link
	cecily.tiddlerFromAnchor = function( a ) {
		
		// New tiddler
		var href = a.attr('href');
		
		if (href.split('/').length == 1) return href;
						  
		// Check for in this space
		if (href.substring(0, cecily.host.length) != cecily.host) return false;
						  
		var link = href.substring(cecily.host.length);
		
		// TODO: Don't loose information about bag
		link = link.split('/');
		link = link[link.length - 1];
		
		return link;
	};
	
	cecily.zoomToTiddler = function( title ) {
		
		if (cecily.zooming) return;
		
		cecily.zooming++;
		
		setTimeout(function() {
			cecily.zooming = Math.max(0, cecily.zooming - 1);
		}, 500);
		
		// Zoom to fit all tiddlers
		if (!title) {
			
			// Create bound rectangle to zoom
			var bound = $('<div class="bound"/>');
		
			var bounds = cecily.boundsForTiddlers($('.tiddler'));
			bound.css(bounds).css('position', 'absolute');
			
			cecily.display.append(bound);
			
			bound.zoomTo({
				targetsize: 0.9,
				nativeanimation: true,
				duration: 500
			});
			
			setTimeout(function() {
				bound.remove();
			});
			
			cecily.currentTiddler = null;
			
			return;
		}
		
		cecily.zoomTrace.push(title);
		
		var elem = $('#tiddler' + title);

		var invis = false;
		
		// Reshow content if hidden
		if (!elem.children('.content:visible').length) {

			invis = true;

			// Reshow transparent so height is included in calculating zoom
			elem.children('.content').css('opacity', 0).show();
			
			elem.find('.toolbarLink').fadeIn(200);
		}
		
		if (cecily.currentTiddler && cecily.currentTiddler != title) {
			
			// TODO: Only one zoom motion for now until motion is slower and less buggy
			
			/*
			// Create bound rectangle to zoom
			var bound = $('<div class="bound"/>');

			var bounds = cecily.boundsForTiddlers(elem.add('#tiddler' + cecily.currentTiddler));
			
			bound.css(bounds).css('position', 'absolute');
			
			$('#display').append(bound);
			
			bound.zoomTo({
				targetsize: 1,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});
			
			setTimeout(function() {
				
				// Zoom to the tiddler
				elem.zoomTo({
					targetsize: 0.9,
					duration: 500,
					easing: 'ease-in',
					nativeanimation: true
				});
				
				bound.remove();
				
			}, 500);
			*/
			
			// Zoom to the tiddler
			elem.zoomTo({
				targetsize: 0.9,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});

		} else {
			
			// Zoom to the tiddler
			elem.zoomTo({
				targetsize: 0.9,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});
		}
		
		cecily.currentTiddler = title;
		
		if (invis) elem.children('.content').hide().css('opacity', 1).slideDown(200);
				
				// Reorder view stack
		cecily.pushTiddlerToFront(title);
	};
	
	// Calculate scale and position of display
	cecily.updateDisplayMatrix = function() {
		
		// TODO: Make less hacky
		var body = $('body');
		var tr = body.css('-webkit-transform') || body.css('-moz-transform') || body.css('transform');
		
		// Currently relies on transform being stored as a matrix
		if (tr.substring(0, 6) != 'matrix') {
			// TODO: Generate an error message or fix
			return;
		}
		
		tr = tr.substring(7);
		tr = tr.substring(0, tr.length - 1);
		tr = tr.split(',');
		
		cecily.display.attr('tx', parseFloat(tr[4]), 10);
		cecily.display.attr('ty', parseFloat(tr[5]), 10);
		cecily.scale = parseFloat(tr[3], 10);
	};
	
	// Returns an object containing left, top, width & height values that represents
	// the bounding box around the tiddlers passed
	cecily.boundsForTiddlers = function( tiddlers ) {
		
		var left = parseFloat(tiddlers.eq(0).attr('tx')), top = parseFloat(tiddlers.eq(0).attr('ty'));
		var right = left + parseFloat(tiddlers.eq(0).attr('tw')), bottom = top + parseFloat(tiddlers.eq(0).attr('th'));
		
		tiddlers = tiddlers.filter(':gt(0)');
		
		tiddlers.each(function() {
			
			var t = $(this);
			
			left = Math.min(t.attr('tx'), left);
			top = Math.min(t.attr('ty'), top);
			right = Math.max(parseFloat(t.attr('tx')) + parseFloat(t.attr('tw')), right);
			bottom = Math.max(parseFloat(t.attr('ty')) + parseFloat(t.attr('th')), bottom);
		});
		
		return {
			left: left,
			top: top,
			width: right - left,
			height: bottom - top
		};
	};
	
})(jQuery);