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

const token = process.env.GIT_TOKEN

console.log(token, 'token')
const instance = axios.create({
  baseURL: process.env.LOTTO_URL,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `token ${token}`,
  },
})

function addNumber() {
  randomNum = Math.floor(Math.random() * 45 + 1)
  if (!result.includes(randomNum)) {
    result.push(randomNum)
  }
}

// 재귀 함수에 호출 부분에 리턴을 꼭 붙일것!!
function bonusNumCall() {
  bonus = Math.floor(Math.random() * 45 + 1)
  if (!result.includes(bonus)) {
    return bonus
  }
  return bonusNumCall()
}

export async function lottoResult() {
  while (result.length < 6) {
    addNumber()
  }
  console.log(result, '로또 추첨 결과')
  resultArray.push({ [`${resultArray.length}회차`]: [...result] })
  bonus = bonusNumCall()
  console.log(bonus, '=보너스')
  const data = await saveLotto()
    .then(() => {
      const payload = result
      lottoClear()
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
    title: `${dateString} 로또 추첨 ${JSON.stringify(
      result
    )} 보너스번호 ${bonus}`,
    body: `로또번호 추첨결과: ${JSON.stringify(result)} \n 보너스번호 ${bonus}`,
    label: 'bug',
  })

  console.log(response, '스테이터스')
}

export const getData = async (count = 10) => {
  console.log('겟데이터 호출')
  try {
    const response = await instance.get(`/repos/gwangseok2/lotto-save/issues`, {
      params: {
        per_page: count,
      },
    })
    return response.data
  } catch (e) {
    console.error(e, 'getData error')
  }
}

// 로또반복
// lottoLoop(3);

// 로또추첨
// lottoResult()
