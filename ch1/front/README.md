# Nuxt

## pages 디렉토리

디렉토리 내의 *.vue 파일을 라우터로 변환해준다. 

## script

```js
export default {
  layout: 'admin',
  head(){
      return {
          title: '프로필',
      }
  }
}
```

layout 

head : `<head>` 태그의 타이틀 부분을 변경할 수 있다. 페이지에 헤드가 없고, 레이아웃 설정이 되어있으면 레이아웃의 헤드를 취한다.

## nuxt.config.js

### modules

buildModule - nuxt v2.9 이상에서 사용이 가능하고 개발환경에서 사용하는 모듈을 말하는 것..!

## vuetify

리액트는 [앤트디자인(ant design)](https://ant.design/)이 유명하다고 한다.  

### 아이콘 

[MaterialDesignIcon](https://materialdesignicons.com/)을 사용할 수 있다. 여기에 있는 머터리얼 아이콘을 사용하기 위해서는 `mdi-`를 전치사(?)처럼 앞에 붙여줘야한다. 


```html
<v-icon>mdi-anchor</v-icon> 
<v-icon>fas fa-search</v-icon> // font-awsome
```

```html
<v-text-field
    label="Prepend inner"
    prepend-inner-icon="place"
></v-text-field>
```

다른 곳에 props로 설정가능. 

## 그 외

### Eslint

```js
{
    "parserOptions":{
        "ecmaVersion":2019,
        "sourceType": "module"
    },
    "env":{
        "browser": true,
        "node": true
    },
    "extends":[
        "plugin:vue/recommended"
    ],
    "plugins" :[],
    "rules": {

    }
}
```

### 머터리얼 디자인

### SEO

Search Engine Optimization