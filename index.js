const core = require('@actions/core')
const holidayJP = require('@holiday-jp/holiday_jp')

try {
  const today = new Date()
  const isHoliday = holidayJP.isHoliday(today)
  const holiday = holidayJP.between(today, today)

  core.setOutput('isHoliday', isHoliday)
  core.setOutput('holiday', holiday)
} catch (error) {
  core.setFailed(error.message)
}
