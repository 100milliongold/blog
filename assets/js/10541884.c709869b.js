"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[763],{26735:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=t(85893),r=t(11151);const l={title:"minishift install \ud558\uae30",date:new Date("2019-05-21T21:13:42.000Z"),tags:["portfolio"]},s=void 0,o={permalink:"/blog/post/minishift-install-\ud558\uae30",source:"@site/blog/minishift-install-\ud558\uae30.mdx",title:"minishift install \ud558\uae30",description:"1. \uac1c\uc694",date:"2019-05-21T21:13:42.000Z",formattedDate:"2019\ub144 5\uc6d4 21\uc77c",tags:[{label:"portfolio",permalink:"/blog/post/tags/portfolio"}],readingTime:.91,hasTruncateMarker:!1,authors:[],frontMatter:{title:"minishift install \ud558\uae30",date:"2019-05-21T21:13:42.000Z",tags:["portfolio"]},unlisted:!1,prevItem:{title:"manjaro \uc5d0\uc11c pacman \uc774\uc6a9\uc2dc pgp \uc5d0\ub7ec \ubc1c\uc0dd\uc2dc",permalink:"/blog/post/manjaro-\uc5d0\uc11c-pacman-\uc774\uc6a9\uc2dc-pgp-\uc5d0\ub7ec-\ubc1c\uc0dd\uc2dc"},nextItem:{title:"revealjs \uc5d0\uc11c pdf \ucd9c\ub825",permalink:"/blog/post/revealjs-\uc5d0\uc11c-pdf-\ucd9c\ub825"}},d={authorsImageUrls:[]},a=[{value:"1. \uac1c\uc694",id:"1-\uac1c\uc694",level:2},{value:"2. \uc124\uce58",id:"2-\uc124\uce58",level:2},{value:"2.1. libvirt qemu dnsmasq ebtables \uc124\uce58",id:"21-libvirt-qemu-dnsmasq-ebtables-\uc124\uce58",level:3},{value:"2.2. \ub85c\uadf8\uc778\ub41c \uacc4\uc815\uc744 kvm,libvir \uadf8\ub8f9\uc5d0 \ucd94\uac00",id:"22-\ub85c\uadf8\uc778\ub41c-\uacc4\uc815\uc744-kvmlibvir-\uadf8\ub8f9\uc5d0-\ucd94\uac00",level:3},{value:"2.3. /etc/libvirt/qemu.conf \ub0b4\uc6a9 \ucd94\uac00",id:"23-etclibvirtqemuconf-\ub0b4\uc6a9-\ucd94\uac00",level:3},{value:"2.4. libvirt \uadf8\ub8f8\uc0dd\uc131",id:"24-libvirt-\uadf8\ub8f8\uc0dd\uc131",level:3},{value:"2.5. root \uacc4\uc815\uc5d0\uc11c KVM driver binary \uc124\uce58",id:"25-root-\uacc4\uc815\uc5d0\uc11c-kvm-driver-binary-\uc124\uce58",level:3},{value:"2.6. libvirt networking \uc124\uc815",id:"26-libvirt-networking-\uc124\uc815",level:3},{value:"2.6.1 \ub124\ud2b8\uc6cc\ud06c \ud655\uc778",id:"261-\ub124\ud2b8\uc6cc\ud06c-\ud655\uc778",level:4},{value:"2.6.2 default libvirt network \uc2dc\uc791",id:"262-default-libvirt-network-\uc2dc\uc791",level:4},{value:"2.6.3 libvirt network \uc790\ub3d9\uc2dc\uc791 \uc124\uc815",id:"263-libvirt-network-\uc790\ub3d9\uc2dc\uc791-\uc124\uc815",level:4},{value:"2.3. minishift \uc124\uce58",id:"23-minishift-\uc124\uce58",level:3},{value:"3. minishift \uc2dc\uc791",id:"3-minishift-\uc2dc\uc791",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"1-\uac1c\uc694",children:"1. \uac1c\uc694"}),"\n",(0,n.jsx)(i.h2,{id:"2-\uc124\uce58",children:"2. \uc124\uce58"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html",children:"https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html"})," \ucc38\uace0"]}),"\n",(0,n.jsx)(i.h3,{id:"21-libvirt-qemu-dnsmasq-ebtables-\uc124\uce58",children:"2.1. libvirt qemu dnsmasq ebtables \uc124\uce58"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ sudo pacman -S libvirt qemu dnsmasq ebtables\n"})}),"\n",(0,n.jsx)(i.h3,{id:"22-\ub85c\uadf8\uc778\ub41c-\uacc4\uc815\uc744-kvmlibvir-\uadf8\ub8f9\uc5d0-\ucd94\uac00",children:"2.2. \ub85c\uadf8\uc778\ub41c \uacc4\uc815\uc744 kvm,libvir \uadf8\ub8f9\uc5d0 \ucd94\uac00"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ sudo usermod -a -G kvm,libvirt $(whoami)\n"})}),"\n",(0,n.jsx)(i.h3,{id:"23-etclibvirtqemuconf-\ub0b4\uc6a9-\ucd94\uac00",children:"2.3. /etc/libvirt/qemu.conf \ub0b4\uc6a9 \ucd94\uac00"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:'$ sudo sed -ri \'s/.?group\\s?=\\s?".+"/group = "kvm"/1\' /etc/libvirt/qemu.conf\n'})}),"\n",(0,n.jsx)(i.h3,{id:"24-libvirt-\uadf8\ub8f8\uc0dd\uc131",children:"2.4. libvirt \uadf8\ub8f8\uc0dd\uc131"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ newgrp libvirt\n"})}),"\n",(0,n.jsx)(i.h3,{id:"25-root-\uacc4\uc815\uc5d0\uc11c-kvm-driver-binary-\uc124\uce58",children:"2.5. root \uacc4\uc815\uc5d0\uc11c KVM driver binary \uc124\uce58"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"# curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-centos7 -o /usr/local/bin/docker-machine-driver-kvm\n# chmod +x /usr/local/bin/docker-machine-driver-kvm\n"})}),"\n",(0,n.jsx)(i.h3,{id:"26-libvirt-networking-\uc124\uc815",children:"2.6. libvirt networking \uc124\uc815"}),"\n",(0,n.jsx)(i.h4,{id:"261-\ub124\ud2b8\uc6cc\ud06c-\ud655\uc778",children:"2.6.1 \ub124\ud2b8\uc6cc\ud06c \ud655\uc778"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:" sudo virsh net-list --all\n \uc774\ub984              \uc0c1\ud0dc     \uc790\ub3d9 \uc2dc\uc791   Persistent\n----------------------------------------------------\n default           \ud65c\uc131\ud654   \uc608          \uc608\n docker-machines   \ud65c\uc131\ud654   \uc608          \uc608\n minikube-net      \ud65c\uc131\ud654   \uc608          \uc608\n\n"})}),"\n",(0,n.jsx)(i.h4,{id:"262-default-libvirt-network-\uc2dc\uc791",children:"2.6.2 default libvirt network \uc2dc\uc791"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ sudo virsh net-start default\n\n"})}),"\n",(0,n.jsx)(i.h4,{id:"263-libvirt-network-\uc790\ub3d9\uc2dc\uc791-\uc124\uc815",children:"2.6.3 libvirt network \uc790\ub3d9\uc2dc\uc791 \uc124\uc815"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ sudo virsh net-autostart default\n"})}),"\n",(0,n.jsx)(i.h3,{id:"23-minishift-\uc124\uce58",children:"2.3. minishift \uc124\uce58"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"image",src:t(4487).Z+"",width:"1001",height:"588"})}),"\n",(0,n.jsx)(i.h2,{id:"3-minishift-\uc2dc\uc791",children:"3. minishift \uc2dc\uc791"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"$ minishift start\n"})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4487:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/minishift-8f9669366ac4205d20e53ab9a4939bf7.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>s});var n=t(67294);const r={},l=n.createContext(r);function s(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);