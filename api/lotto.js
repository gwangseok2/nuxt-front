import axios from 'axios'
let result = []
let randomNum
let bonus
const resultArray = []
const today = new Date()

const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

const token1 = 'ghp_dOux2U4g5ucgzf'
const token2 = 'sjr2UtKDJLuqAhF10NMCFz'

const instance = axios.create({
  baseURL: process.env.LOTTO_URL,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `token ${token1}${token2}`,
  },
})

console.log(process.env.LOTTO_URL, '--lotoURL')

function addNumber() {
  randomNum = Math.floor(Math.random() * 45 + 1)
  if (!result.includes(randomNum)) {
    result.push(randomNum)
  }
}

function bonusNumCall() {
  bonus = Math.floor(Math.random() * 45 + 1)
  if (!result.includes(bonus)) {
    return bonus
  } else {
    bonusNumCall()
  }
}

export function lottoResult() {
  while (result.length < 6) {
    addNumber()
  }
  console.log(result, '로또 추첨 결과')
  resultArray.push({ [`${resultArray.length}회차`]: [...result] })

  const data = saveLotto()
    .then(() => {
      const payload = result
      const bonus = bonusNumCall()
      lottoClear()
      console.log(payload, '--')
      return { resultList: payload, bonus }
    })
    .catch((e) => console.log(e))
  return data
}

// 로또초기화
function lottoClear() {
  result = []
}

// 반복기능
// function lottoLoop(loopCount) {
//   if (!loopCount || typeof loopCount !== 'number') return
//   for (let i = 0; i < loopCount; i++) {
//     lottoResult()
//   }
// }

// 로또저장API
async function saveLotto() {
  const response = await instance.post(`/repos/gwangseok2/lotto-save/issues`, {
    title: `${dateString} 로또 추첨 ${JSON.stringify(result)}`,
    body: `로또번호 추첨결과: ${JSON.stringify(
      result
    )} \n 보너스번호 ${JSON.stringify(result[result.length - 1])}`,
    label: 'bug',
  })
  console.log(response, '스테이터스')
}

// 로또반복
// lottoLoop(3);

// 로또추첨
// lottoResult()
