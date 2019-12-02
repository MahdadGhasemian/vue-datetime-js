/*global getYear*/
/*eslint no-undef: ["error", { "typeof": true }] */

import jmoment from 'moment-jalaali'
import imoment from 'moment-hijri'

import fa from './moment.locale.fa'
import fr from './moment.locale.fr'
import ka from './moment.locale.ka'
import arSa from './moment.locale.ar-sa'
import utils from './utils'
// jmoment.updateLocale('en', {
//   weekdaysMin: 'S_M_T_W_T_F_S'.split('_')
// })

jmoment.updateLocale('fa', fa)
jmoment.updateLocale('fr', fr)
jmoment.updateLocale('ka', ka)
imoment.updateLocale('ar-sa', arSa)
jmoment.loadPersian({ dialect: 'persian-modern' })
jmoment.daysInMonth = function(year, month) {
  return jmoment({ year, month }).daysInMonth()
}
imoment.daysInMonth = function(year, month) {
  return imoment({ year, month }).daysInMonth()
}

//=====================================
//           CONFIG
//=====================================
const localMethods = {
  jalali: {
    daysInMonth: 'jDaysInMonth',
    year: 'jYear',
    month: 'jMonth',
    date: 'jDate',
    day: 'day'
  },
  gregory: {
    daysInMonth: 'daysInMonth',
    year: 'year',
    month: 'month',
    date: 'date',
    day: 'day'
  },
  hijri: {
    daysInMonth: 'iDaysInMonth',
    year: 'iYear',
    month: 'iMonth',
    date: 'iDate',
    day: 'day'
  }
}
const localesConfig = {
  jalali: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'شمسی',
      submit: 'تایید',
      cancel: 'انصراف',
      now: 'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل'
    }
  },
  gregory: {
    dow: 0,
    dir: 'ltr',
    displayFormat: null,
    lang: {
      label: 'میلادی',
      submit: 'Select',
      cancel: 'Cancel',
      now: 'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month'
    }
  },
  hijri: {
    dow: 6,
    dir: 'rtl',
    displayFormat: null,
    lang: {
      label: 'قمری',
      submit: 'حسنا',
      cancel: 'إلغاء',
      now: 'الآن',
      nextMonth: 'الشهر القادم',
      prevMonth: 'الشهر السابق'
    }
  },
}

const Core = function(defaultCalendarName, defaultLocaleName) {
  'use strict'

  const Instance = {
    moment: (defaultCalendarName === 'hijri') ? imoment : jmoment,
    calendar: defaultCalendarName,
    locale: { name: defaultLocaleName, config: {} },
    localesConfig: {},
    setLocalesConfig: null,
    changeLocale: null,
    getWeekArray: null,
    getYearsList: null,
    getMonthsList: null
  }

  //=====================================
  //           METHODS
  //=====================================
  let xDaysInMonth

  Instance.changeLocale = function changeLocale(
    localeCalendar = 'gregory',
    localeName = 'en',
    options = {}
  ) {
    let calendar = this.calendar
    let locale = this.locale
    let config = JSON.parse(
      JSON.stringify(localesConfig[localeCalendar] || localesConfig.gregory)
    )

    let methods = localMethods[localeCalendar] || localMethods.gregory

    options = options[localeCalendar] || {}
    locale.name = localeName
    locale.config = utils.extend(true, config, options)

    let moment = (calendar === 'hijri') ? imoment : jmoment;
    xDaysInMonth =  moment[methods.daysInMonth]

    function addMethods(date) {
      if (date === undefined) return

      const nameInLocale = name => {
        if (calendar === 'hijri') name = name.replace(/j/g, 'i')
        else if (calendar !== 'jalali') name = name.replace(/j/g, '')

        return name
      }

      date.xYear = moment.fn[methods.year]
      date.xMonth = moment.fn[methods.month]
      date.xDate = moment.fn[methods.date]

      date.xFormat = function(format) {
        return this.format(nameInLocale(format))
      }
      date.xStartOf = function(value) {
        return this.startOf(methods[value])
      }
      date.xEndOf = function(value) {
        return this.endOf(methods[value])
      }
      date.xAdd = function(amount, key) {
        return this.add(amount, methods[key])
      }
      date.clone = function() {
        return Instance.moment(this.toDate())
      }
    }

    this.moment = function() {
      let date = moment.apply(null, arguments)
      date.locale(locale.name)
      addMethods(date)
      return date
    }
  }

  Instance.setLocalesConfig = function(config) {
    let defaults = JSON.parse(JSON.stringify(localesConfig))
    this.localesConfig = utils.extend(true, defaults, config)
  }

  Instance.getWeekArray = function getWeekArray(d) {
    function addWeek(weekArray, week) {
      let emptyDays = 7 - week.length

      for (let i = 0; i < emptyDays; ++i) {
        week[weekArray.length ? 'push' : 'unshift'](null)
      }

      weekArray.push(week)
    }

    let moment = this.moment;
    let daysInMonth = xDaysInMonth(moment(d).xYear(), moment(d).xMonth())

    let dayArray = []
    for (let i = 1; i <= daysInMonth; i++) {
      dayArray.push(
        moment(d)
          .xDate(i)
          .toDate()
      )
    }

    let weekArray = []
    let week = []

    dayArray.forEach(day => {
      if (week.length > 0 && day.getDay() === this.locale.config.dow) {
        addWeek(weekArray, week)
        week = []
      }

      week.push(day)

      if (dayArray.indexOf(day) === dayArray.length - 1) {
        addWeek(weekArray, week)
      }
    })

    return weekArray
  }

  Instance.getYearsList = function getYearsList(from, to, range = false, date) {
    let years = []
    if (range) {
      let year = getYear(date)
      from = year - range
      to = year + range
    }
    for (let i = from; i <= to; i++) {
      years.push(i)
    }
    return years
  }

  Instance.getMonthsList = function getMonthsList(minDate, maxDate, date) {
    let list = [],
      min = minDate
        ? minDate
            .clone()
            .xStartOf('month')
            .unix()
        : -Infinity,
      max = maxDate
        ? maxDate
            .clone()
            .xEndOf('month')
            .unix()
        : Infinity
    for (let i = 0; i < 12; i++) {
      let month = date.clone().xMonth(i)
      let start = month
        .clone()
        .xStartOf('month')
        .unix()
      let end = month
        .clone()
        .xEndOf('month')
        .unix()
      month.disabled = start < min || end > max
      list.push(month)
    }
    return list
  }

  Instance.changeLocale(defaultCalendarName, defaultLocaleName)

  return Instance
}

export default Core

export { localesConfig }
