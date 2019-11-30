<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      VUE DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">
      A vue plugin to select date and time
    </h5>

    <card title="Simple example">
      <date-picker v-model="date" :clearable="true" :locale="'ar-sa'"/>
      <br />
      <date-picker v-model="date2" :clearable="true" :locale="'en'"/>
      <br />
      <date-picker v-model="date3" :clearable="true" :locale="'fa'"/>
      <br />
      <!--<date-picker v-model="datetime" type="datetime" />-->
      <br />
      <!--<date-picker v-model="time" type="time" />-->
      <br />
      <!--<date-picker v-model="yearMonth" type="year-month" />-->
      <br />
      <!--<date-picker v-model="year" type="year" min="1350" max="1410" />-->
      <br />
      <!--<date-picker v-model="month" type="month" />-->
      <br />
      <!--<date-picker locale="en,fa" format="YYYY/M/D" />-->

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :clearable="true" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :clearable="true" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :clearable="true" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="datetime" type="datetime" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="time" type="time" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="yearMonth" type="year-month" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="year" type="year" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="month" type="month" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker locale="en,fa" format="YYYY/M/D" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        date: '',
        date2: '',
        date3: '',
        time: '',
        yearMonth: '',
        datetime: '',
        year: '',
        month: ''
      }
    },
    watch: {
      date() {
        console.log(this.date);
      },
      date2() {
        console.log(this.date2);
      },
      date3() {
        console.log(this.date3);
      }
    }
  }
</script>
