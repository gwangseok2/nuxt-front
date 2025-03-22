const express = require('express')
const axios = require('axios')
const app = express()

app.get('/lotto', async (req, res) => {
  const { drwNo } = req.query

  try {
    const response = await axios.get('https://www.dhlottery.co.kr/common.do', {
      params: {
        method: 'getLottoNumber',
        drwNo,
      },
    })

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: '로또 API 호출 실패' })
  }
})

module.exports = app
