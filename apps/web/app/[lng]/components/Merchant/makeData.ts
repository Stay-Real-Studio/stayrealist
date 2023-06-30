import { faker } from '@faker-js/faker'

export type Person = {
  merchantName?: string
  coin?: string
  price?: number
  volumn?: number
  // firstName: string
  // lastName: string
  // age: number
  // visits: number
  // progress: number
  // status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    merchantName: faker.person.prefix(),
    coin: faker.person.prefix(),
    price: faker.number.int(40),
    volumn: faker.number.int(40),
    // firstName: faker.person.prefix(),
    // lastName: faker.person.lastName(),
    // age: faker.number.int(40),
    // visits: faker.number.int(1000),
    // progress: faker.number.int(100),
    // status: faker.helpers.shuffle<Person['status']>([
    //   'relationship',
    //   'complicated',
    //   'single',
    // ])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
