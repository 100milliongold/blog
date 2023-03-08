"use strict";(self.webpackChunkmyblog_2_0=self.webpackChunkmyblog_2_0||[]).push([[7068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={date:"2023-03-06 10:00",authors:["100milliongold"],tags:["front-end","react"]},l="yup + react-hoot-form \uc73c\ub85c \uc5f0\ub3d9\ud558\uae30",i={permalink:"/blog/post/2023/03/06/yup\uacfc-react-hoot-form-\uc73c\ub85c-\uc5f0\ub3d9\ud558\uae30",source:"@site/blog/2023-03-06-yup\uacfc-react-hoot-form-\uc73c\ub85c-\uc5f0\ub3d9\ud558\uae30/index.mdx",title:"yup + react-hoot-form \uc73c\ub85c \uc5f0\ub3d9\ud558\uae30",description:"1. install package",date:"2023-03-06T10:00:00.000Z",formattedDate:"2023\ub144 3\uc6d4 6\uc77c",tags:[{label:"front-end",permalink:"/blog/post/tags/front-end"},{label:"react",permalink:"/blog/post/tags/react"}],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"100milliongold",title:"developer",url:"https://sebastienlorber.com",imageURL:"https://avatars.githubusercontent.com/u/13652711?s=400&u=0a1092b8b1170f71ae883d098f8721c12ce39e9e&v=4",key:"100milliongold"}],frontMatter:{date:"2023-03-06 10:00",authors:["100milliongold"],tags:["front-end","react"]},prevItem:{title:"\uc774\ubca4\ud2b8 \ub8e8\ud504\uc640 \ud0dc\uc2a4\ud06c \ud050 (\ub9c8\uc774\ud06c\ub85c \ud0dc\uc2a4\ud06c, \ub9e4\ud06c\ub85c \ud0dc\uc2a4\ud06c)",permalink:"/blog/post/2023/03/08/\uc774\ubca4\ud2b8-\ub8e8\ud504\uc640-\ud0dc\uc2a4\ud06c-\ud050"},nextItem:{title:"Bun-\uc73c\ub85c-React-\uc2dc\uc791\ud558\uae30",permalink:"/blog/post/2023/02/21/Bun-\uc73c\ub85c-React-\uc2dc\uc791\ud558\uae30"}},s={authorsImageUrls:[void 0]},u=[{value:"1. install package",id:"1-install-package",level:2},{value:"2. react-hook-form setting",id:"2-react-hook-form-setting",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-install-package"},"1. install package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install yup react-hook-form @hookform/resolvers\n")),(0,o.kt)("h2",{id:"2-react-hook-form-setting"},"2. react-hook-form setting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescriptreact"},"import React from 'react'\nimport {\n  FormProvider,\n  useForm,\n  SubmitHandler,\n  SubmitErrorHandler,\n  useFormContext,\n  useFieldArray\n} from 'react-hook-form'\nimport { yupResolver } from '@hookform/resolvers/yup'\nimport * as yup from 'yup'\n\n\ntype LIST_ITEM = {\n    data : string\n}\n\ntype EXAMPLE_TYPE = {\n    name : string,\n    tag: number,\n    list: LIST_ITEM[]\n}\n\ndeclare module 'yup' {\n  interface ArraySchema<TIn, TContext, TDefault, TFlags> {\n    unique(\n      message: string,\n      mapper?: (value: TIn, index?: number, list?: TIn[]) => TIn[]\n    ): ArraySchema<TIn, TContext, TDefault, TFlags>\n  }\n}\n\nyup.addMethod(\n  yup.array,\n  'unique',\n  function (message, mapper = (a: unknown) => a) {\n    return this.test('unique', message, (list = []) => {\n      return list.length === new Set(list.map(mapper)).size\n    })\n  }\n)\n\n\nexport default function Example() {\n  const resolver = React.useMemo(\n    () =>\n      yupResolver(\n        yup.object().shape({\n          name: yup\n            .string()\n            .required('\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694')\n          tag: yup\n            .number()\n            .required('\ud0dc\uadf8\ub97c \uc785\ub825\ud558\uc138\uc694')\n            .typeError('\uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694')\n          list: yup.array().of(\n            yup.object().shape({\n                data: yup\n                  .string()\n                  .required('\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694')\n\n            })\n          )\n          .unique('\uc911\ubcf5', (val: any) => val.data),\n      ),\n    []\n  )\n\n  const methods = useForm<EXAMPLE_TYPE>({\n    defaultValues: {\n        name: '',\n        tag: 0,\n        list: []\n    },\n    resolver,\n  })\n\n  const { reset, handleSubmit, register, control } = methods\n\n  const onError: SubmitErrorHandler<EXAMPLE_TYPE> = (errors, event) => {\n    console.error(errors, event)\n  }\n\n  const onSubmit: SubmitHandler<EXAMPLE_TYPE> = (data) => {\n    console.log(data)\n  }\n\n  const { control, setValue, clearErrors } = useFormContext()\n\n  const { fields, append, remove } = useFieldArray(\n    {\n      control,\n      name: \"list\"\n    }\n  );\n\n  const repositoryType = useController({ \n    control, \n    name: \"repositoryType\", \n    rules: { required: { value: true, message: 'required.' }} \n  })\n\n\n  return(\n    <div>\n        <FormProvider {...methods}>\n            <form onSubmit={handleSubmit(onSubmit, onError)}>\n                <input type=\"text\" placeholder=\"name\" {...register(\"name\", {})} />\n                <input type=\"text\" placeholder=\"tag\" {...register(\"tag\", {})} />\n\n                <ul>\n                    {fields.map((item, index) => {\n                        return (\n                            <li key={item.id}>\n                                <input\n                                    name={`list[${index}].data`}\n                                    defaultValue={`${item.data}`} \n                                    ref={register()}\n                                />\n                                <button type=\"button\" onClick={() => remove(index)}>\n                                    Delete\n                                </button>\n                            </li>\n                        );\n                    })}\n                </ul>\n                <section>\n                    <button\n                        type=\"button\"\n                        onClick={() => {\n                            append({ data: '' });\n                        }}\n                    >\n                        append\n                    </button>\n                </section>\n                <input type=\"submit\" />\n            </form>\n        </FormProvider>\n    </div>\n  )\n\n}\n")))}m.isMDXComponent=!0}}]);