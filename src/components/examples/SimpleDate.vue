<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      VUE DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">
      A vue plugin to select date and time
    </h5>

    <card title="Simple example">
      <date-picker v-model="date" :locale="'ar-sa'" :calendar="'hijri'"/>
      <br />
      <date-picker v-model="date2" :locale="'en'" :calendar="'gregory'"/>
      <br />
      <date-picker v-model="date3" :locale="'fa'" :calendar="'jalali'"/>
      <br />
      <date-picker v-model="date4" :locale="'fr'" :calendar="'jalali'"/>
      <br />
      <date-picker v-model="date5" :locale="'fr'" :calendar="'gregory'"/>
      <br />
      <date-picker v-model="datetime" type="datetime" />
      <br />
      <date-picker v-model="time" type="time" />
      <br />
      <date-picker v-model="yearMonth" type="year-month" />
      <br />
      <date-picker v-model="year" type="year" min="1350" max="1410" />
      <br />
      <date-picker v-model="month" type="month" />
      <br />
      <!--<date-picker locale="en,fa" format="YYYY/M/D" />-->

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :locale="'ar-sa'" :calendar="'hijri'"/&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date2" :locale="'en'" :calendar="'gregory'"/&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date3" :locale="'fa'" :calendar="'jalali'"/&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date3" :locale="'fr'" :calendar="'jalali'"/&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date3" :locale="'fr'" :calendar="'gregory'"/&gt;
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
        date4: '',
        date5: '',
        date6: '',
        date7: '',
        time: '',
        yearMonth: '',
        datetime: '',
        year: '',
        month: ''
      }
    }
  }
</script>
