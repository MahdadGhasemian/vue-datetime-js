# vue-datetime-js

[![npm version](https://badge.fury.io/js/vue-datetime-js.svg)](https://www.npmjs.com/package/vue-datetime-js)

> This is a Forked from vue-persian-datetime-picker (v2.1.2) mohammad talkhabi

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker)


## Installation
### browser
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/moment"></script>
<script src="https://cdn.jsdelivr.net/npm/moment-jalaali@0.7.4/build/moment-jalaali.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-persian-datetime-picker/dist/vue-persian-datetime-picker-browser.js"></script>
<div id="app">
    <date-picker v-model="date"></date-picker>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            date: '1397/02/02'
        },
        components: {
            DatePicker: VuePersianDatetimePicker
        }
    });
</script>
```

### npm
```bash
npm install vue-persian-datetime-picker --save
```

webpack.config.js:
```javascript
/**
 * configuration for moment to ignore loading locales
 */
module.exports.plugins = [
    //...
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    //...
]
```

### Usage

main.js
```javascript
//...
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);
//...
```
Or in component
```html
<template>
    <div>
        <date-picker v-model="date"></date-picker>
    </div>
</template>
 
<script>
    import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
    export default {
        data(){
            return {
                date: ''
            }
        },
        components: {
            datePicker: VuePersianDatetimePicker
        }
    }
</script>
```


## You can also set default values: 
main.js
```javascript
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.use(VuePersianDatetimePicker, {
    name: 'custom-date-picker',
    props: {
        inputFormat: 'YYYY-MM-DD HH:mm',
        format: 'jYYYY-jMM-jDD HH:mm',
        editable: false,
        inputClass: 'form-control my-custom-class-name',
        placeholder: 'Please select a date',
        altFormat: 'YYYY-MM-DD HH:mm',
        color: '#00acc1',
        autoSubmit: false,
        //...  
        //... And whatever you want to set as default 
        //... 
    }
});
```
Then use in component
```html
<custom-date-picker v-model="date"></custom-date-picker>
```

### [Click to see full documentation and demo](https://talkhabi.github.io/vue-persian-datetime-picker)

## Built With
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [moment-jalaali](https://github.com/jalaali/moment-jalaali) - A Jalaali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js.


## License

This project is licensed under the MIT License


## Change log

### 1.0.1 (2019-11-28)

  * Fix Readme file

### 1.0.0 (2019-11-28)

  * For from vue-persian-datetime-picker
