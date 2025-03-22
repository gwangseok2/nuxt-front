import axios from 'axios'
const { parse } = require('url')

module.exports = async (req, res) => {
  const { drwNo } = parse(req.url, true).query

  if (!drwNo) {
    res.statusCode = 400
    return res.end(
      JSON.stringify({ error: 'drwNo 쿼리 파라미터가 필요합니다.' })
    )
  }

  try {
    const response = await axios.get('https://www.dhlottery.co.kr/common.do', {
      params: {
        method: 'getLottoNumber',
        drwNo,
      },
    })

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(response.data))
  } catch (error) {
    res.statusCode = 500
    res.end(
      JSON.stringify({
        error: '로또 API 호출 실패',
        message: error.message,
      })
    )
  }
}
