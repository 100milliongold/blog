"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[1293],{10172:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=a(85893),i=a(11151);const s={title:"Vagrant \uc0ac\uc6a9\ubc95",date:new Date("2018-12-15T18:15:30.000Z"),tags:["vagrant","server"]},r="Vagrant",d={permalink:"/blog/post/Vagrant-\uc0ac\uc6a9\ubc95",source:"@site/blog/Vagrant-\uc0ac\uc6a9\ubc95.mdx",title:"Vagrant \uc0ac\uc6a9\ubc95",description:"\ubca0\uc774\uadf8\ub7f0\ud2b8(Vagrant)\ub294 \ud3ec\ud130\ube14 \uac00\uc0c1\ud654 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud658\uacbd (\uc608: \uac1c\ubc1c \uc0dd\uc0b0\uc131 \uc99d\uac00\ub97c \uc704\ud574 \uac00\uc0c1\ud654\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uad00\ub9ac\uc758 \ub2e8\uc21c\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ubc84\ucd94\uc5bc\ubc15\uc2a4, \ud558\uc774\ud37c-V, \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108, VM\uc6e8\uc5b4, AWS)\uc758 \uc0dd\uc131 \ubc0f \uc720\uc9c0\ubcf4\uc218\ub97c \uc704\ud55c \uc624\ud508 \uc18c\uc2a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\uc758 \ud558\ub098\uc774\ub2e4. \ubca0\uc774\uadf8\ub7f0\ud2b8\ub294 \ub8e8\ube44 \uc5b8\uc5b4\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uc9c0\ub9cc \uc0dd\ud0dc\uacc4\ub294 \uba87 \uac00\uc9c0 \uc5b8\uc5b4\ub85c \uac1c\ubc1c\uc744 \uc9c0\uc6d0\ud55c\ub2e4. - \uc704\ud0a4\ubc31\uacfc)",date:"2018-12-15T18:15:30.000Z",formattedDate:"2018\ub144 12\uc6d4 15\uc77c",tags:[{label:"vagrant",permalink:"/blog/post/tags/vagrant"},{label:"server",permalink:"/blog/post/tags/server"}],readingTime:3.81,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Vagrant \uc0ac\uc6a9\ubc95",date:"2018-12-15T18:15:30.000Z",tags:["vagrant","server"]},unlisted:!1,prevItem:{title:"Vagrant Disk Change",permalink:"/blog/post/Vagrant-Disk-Change"},nextItem:{title:"react.js + spring boot",permalink:"/blog/post/react-js-spring-boot"}},l={authorsImageUrls:[]},o=[{value:"\uc124\uce58\ud658\uacbd",id:"\uc124\uce58\ud658\uacbd",level:2},{value:"\uc124\uce58\uc808\ucc28",id:"\uc124\uce58\uc808\ucc28",level:2},{value:"vagrant snapshot list",id:"vagrant-snapshot-list",level:2},{value:"vagrant snapshot save [name]",id:"vagrant-snapshot-save-name",level:2},{value:"vagrant snapshot resotere [name]",id:"vagrant-snapshot-resotere-name",level:2},{value:"vagrant init [name [url]]",id:"vagrant-init-name-url",level:2},{value:"vagrant up [name|id]",id:"vagrant-up-nameid",level:2},{value:"vagrant reload [name|id]",id:"vagrant-reload-nameid",level:2},{value:"vagrant halt [name|id]",id:"vagrant-halt-nameid",level:2},{value:"vagrant suspend [name|id]",id:"vagrant-suspend-nameid",level:2},{value:"vagrant status [name|id]",id:"vagrant-status-nameid",level:2},{value:"vagrant ssh [name|id] [-- extra_ssh_args]",id:"vagrant-ssh-nameid----extra_ssh_args",level:2},{value:"vagrant destroy [name|id]",id:"vagrant-destroy-nameid",level:2}];function v(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ubca0\uc774\uadf8\ub7f0\ud2b8(Vagrant)\ub294 \ud3ec\ud130\ube14 \uac00\uc0c1\ud654 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud658\uacbd (\uc608: \uac1c\ubc1c \uc0dd\uc0b0\uc131 \uc99d\uac00\ub97c \uc704\ud574 \uac00\uc0c1\ud654\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uad6c\uc131 \uad00\ub9ac\uc758 \ub2e8\uc21c\ud654\ub97c \uc2dc\ub3c4\ud558\ub294 \ubc84\ucd94\uc5bc\ubc15\uc2a4, \ud558\uc774\ud37c-V, \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108, VM\uc6e8\uc5b4, AWS)\uc758 \uc0dd\uc131 \ubc0f \uc720\uc9c0\ubcf4\uc218\ub97c \uc704\ud55c \uc624\ud508 \uc18c\uc2a4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\uc758 \ud558\ub098\uc774\ub2e4. \ubca0\uc774\uadf8\ub7f0\ud2b8\ub294 \ub8e8\ube44 \uc5b8\uc5b4\ub85c \uc791\uc131\ub418\uc5b4 \uc788\uc9c0\ub9cc \uc0dd\ud0dc\uacc4\ub294 \uba87 \uac00\uc9c0 \uc5b8\uc5b4\ub85c \uac1c\ubc1c\uc744 \uc9c0\uc6d0\ud55c\ub2e4. - ",(0,t.jsx)(n.a,{href:"https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EA%B7%B8%EB%9F%B0%ED%8A%B8_(%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4)",children:"\uc704\ud0a4\ubc31\uacfc"})]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,t.jsx)(n.h2,{id:"\uc124\uce58\ud658\uacbd",children:"\uc124\uce58\ud658\uacbd"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"virtualbox \uc124\uce58"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ucd94\uac00 virtualbox \ud655\uc7a5\uc124\uce58"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Hyper-V \uc124\uc815"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc124\uce58\uc808\ucc28",children:"\uc124\uce58\uc808\ucc28"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\uc6b0\ubd84\ud22c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"   sudo apt install virtualbox\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\uc708\ub3c4\uc6b0\uc988"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download ",(0,t.jsx)(n.a,{href:"https://releases.hashicorp.com/vagrant/2.2.2/vagrant_2.2.2_x86_64.msi",children:"https://releases.hashicorp.com/vagrant/2.2.2/vagrant_2.2.2_x86_64.msi"})]}),"\n",(0,t.jsx)(n.li,{children:"install package"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\ub9e5"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://releases.hashicorp.com/vagrant/2.2.2/vagrant_2.2.2_x86_64.dmg",children:"https://releases.hashicorp.com/vagrant/2.2.2/vagrant_2.2.2_x86_64.dmg"})}),"\n",(0,t.jsx)(n.li,{children:"install package"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"vagrantfile",children:"Vagrantfile"}),"\n",(0,t.jsx)(n.p,{children:"Vagrantfile \ub0b4\uc6a9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ruby",children:'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\n# vagrant \ubc84\uc7cc \uc124\uc815\nVagrant.configure("2") do |config|\n\n  # box \uc774\ub984 \uc9c0\uc815\n  # https://app.vagrantup.com/boxes/search \uc5d0\uc11c \uac80\uc0c9\uac00\ub2a5\n  config.vm.box = "CentosBox/Centos7-v7.3-Minimal"\n\n  # vagrant \uac00\uc0c1\uba38\uc2e0 \uc774\ub984\uc9c0\uc815\n config.vm.define :node01 do |node01|\n   # \ud638\uc2a4\ud2b8\uc774\ub984 \uc9c0\uc815\n   node01.vm.hostname = "node01"\n   # \ub124\ud2b8\uc6cc\ud06c \uc124\uc815 (\ube0c\ub9bf\uc9c0 \ub124\ud2b8\uc6cc\ud06c)\n   node01.vm.network :"public_network", ip: "192.168.1.195", bridge: "enp6s0"\n   # virtualbox \uc124\uc815\n   node01.vm.provider "virtualbox" do |vb|\n     # \uba54\ubaa8\ub9ac \uc124\uc815\n     vb.customize ["modifyvm", :id, "--memory", 1024*2]\n     vb.customize ["modifyvm", :id, "--name", "node01"]\n\n     # \ub514\uc2a4\ud06c \uc124\uc815\n     # \ub9cc\uc57d\uc5d0 \ud30c\uc77c\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744\uacbd\uc6b0 \ub514\uc2a4\ud06c \ud30c\uc77c \uc0dd\uc131\n     if !File.exist?("mst01.vdi")\n       vb.customize ["createhd", "--filename", "mst01.vdi", "--size", 1024*10, "--variant", "Fixed"]\n       vb.customize ["modifyhd", "mst01.vdi", "--type", "shareable"]\n     end\n     # \ud574\ub2f9 \ud30c\uc77c \ubcd1\uc73c\ub85c \ub514\uc2a4\ud06c \ucd94\uac00\n     vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 1, "--device", 0, "--type", "hdd", "--medium", "mst01.vdi"]\n     if !File.exist?("mst02.vdi")\n       vb.customize ["createhd", "--filename", "mst02.vdi", "--size", 1024*4, "--variant", "Fixed"]\n       vb.customize ["modifyhd", "mst02.vdi", "--type", "shareable"]\n     end\n     vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 2, "--device", 0, "--type", "hdd", "--medium", "mst02.vdi"]\n     if !File.exist?("mst03.vdi")\n       vb.customize ["createhd", "--filename", "mst03.vdi", "--size", 1024*4, "--variant", "Fixed"]\n       vb.customize ["modifyhd", "mst03.vdi", "--type", "shareable"]\n     end\n     vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 3, "--device", 0, "--type", "hdd", "--medium", "mst03.vdi"]\n   end\n end\n\n  config.vm.define :node02 do |node02|\n    node02.vm.hostname = "node02"\n    node02.vm.network :"public_network", ip: "192.168.1.196", bridge: "enp6s0"\n    node02.vm.provider "virtualbox" do |vb|\n      vb.customize ["modifyvm", :id, "--memory", 1024*2]\n      vb.customize ["modifyvm", :id, "--name", "node02"]\n      if !File.exist?("ost1.vdi")\n        vb.customize ["createhd", "--filename", "ost1.vdi", "--size", 1024*10, "--variant", "Fixed"]\n        vb.customize ["modifyhd", "ost1.vdi", "--type", "shareable"]\n      end\n      vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 1, "--device", 0, "--type", "hdd", "--medium", "ost1.vdi"]\n      if !File.exist?("ost2.vdi")\n        vb.customize ["createhd", "--filename", "ost2.vdi", "--size", 1024*4, "--variant", "Fixed"]\n        vb.customize ["modifyhd", "ost2.vdi", "--type", "shareable"]\n      end\n      vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 2, "--device", 0, "--type", "hdd", "--medium", "ost2.vdi"]\n      if !File.exist?("ost3.vdi")\n        vb.customize ["createhd", "--filename", "ost3.vdi", "--size", 1024*4, "--variant", "Fixed"]\n        vb.customize ["modifyhd", "ost3.vdi", "--type", "shareable"]\n      end\n      vb.customize ["storageattach", :id, "--storagectl", "SATA", "--port", 3, "--device", 0, "--type", "hdd", "--medium", "ost3.vdi"]\n   end\n  end\nend\n\n'})}),"\n",(0,t.jsx)(n.h1,{id:"\uae30\ubcf8\uba85\ub839\uc5b4",children:"\uae30\ubcf8\uba85\ub839\uc5b4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-snapshot-list",children:"vagrant snapshot list"}),"\n",(0,t.jsx)(n.p,{children:"\ud604\uc7ac \uc2a4\ub0c5\uc0f7 \ubaa9\ub85d\uc744 \ubd88\ub824\uc628\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-snapshot-save-name",children:"vagrant snapshot save [name]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uc2a4\ub0c5\uc0f7 \uc774\ub984\uc73c\ub85c \uc800\uc7a5\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-snapshot-resotere-name",children:"vagrant snapshot resotere [name]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uc2a4\ub0c5\uc0f7 \uc774\ub984\uc73c\ub85c \ubcf5\uad6c\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-init-name-url",children:"vagrant init [name [url]]"}),"\n",(0,t.jsx)(n.p,{children:"\ud604\uc7ac \ub514\ub809\ud130\ub9ac\ub8f0 Vagrant \ud658\uacbd\uc73c\ub85c \ucd08\uae30\ud654\ud55c\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:" vagrant init ubuntu/trusty64\n vagrant up\n"})}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-up-nameid",children:"vagrant up [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uba85\ub839\uc740 Vagrant \ud30c\uc77c\uc5d0 \ub530\ub77c \uac00\uc0c1\uba38\uc2e0\uc744 \uc0dd\uc131 \ubc0f \uad6c\uc131\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-reload-nameid",children:"vagrant reload [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0\uc744 \uc885\ub8cc\ud558\uace0 \ub2e4\uc2dc \uc2e4\ud589\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-halt-nameid",children:"vagrant halt [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0\uc744 \uc885\ub8cc\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-suspend-nameid",children:"vagrant suspend [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0\uc744 \uc77c\uc2dc\uc911\uc9c0 \ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-status-nameid",children:"vagrant status [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\ud604\uc7ac \uac00\uc0c1\uba38\uc2e0\ub4e4\uc758 \uc0c1\ud0dc\ub97c \ud45c\uc2dc\ud55c\ub2e4"}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-ssh-nameid----extra_ssh_args",children:"vagrant ssh [name|id] [-- extra_ssh_args]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0\uc73c\ub85c ssh \uc811\uc18d\uc744 \ud55c\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"vagrant-destroy-nameid",children:"vagrant destroy [name|id]"}),"\n",(0,t.jsx)(n.p,{children:"\ud574\ub2f9 \uac00\uc0c1\uba38\uc2e0\uc744 \uc0ad\uc81c\ud55c\ub2e4."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var t=a(67294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);