interface KeyElementValues {
  date: string
  value: number
}

interface LineElement {
  key: string
  values: Array<KeyElementValues>
}

interface DataSource extends Array<LineElement> {}

const basicData = [
  {
    date: '2020-03-09',
    value: 0
  },
  {
    date: '2020-03-10',
    value: 13
  },
  {
    date: '2020-03-11',
    value: 21
  },
  {
    date: '2020-03-12',
    value: 27
  },
  {
    date: '2020-03-13',
    value: 43
  },
  {
    date: '2020-03-14',
    value: 57
  },
  {
    date: '2020-03-15',
    value: 72
  },
  {
    date: '2020-03-16',
    value: 85
  },
  {
    date: '2020-03-17',
    value: 110
  },
  {
    date: '2020-03-18',
    value: 173
  },
  {
    date: '2020-03-19',
    value: 260
  },
  {
    date: '2020-03-20',
    value: 394
  },
  {
    date: '2020-03-21',
    value: 581
  },
  {
    date: '2020-03-22',
    value: 627
  },
  {
    date: '2020-03-23',
    value: 627
  }
]

export const _dataSource: Array<{ key: string; values: Array<{ date: string; value: number }> }> = [
  // {
  //   key: 'Upperbound',
  //   values: [
  //     ...basicData.map(d => {
  //       return { date: d.date, value: d.value += 40 }
  //     })
  //   ]
  // },
  {
    key: 'Prediction',
    values: [
      ...basicData.map(d => {
        return { date: d.date, value: d.value -= 15 }
      })
    ]
  }
  // {
  //   key: 'Lowerbound',
  //   values: [
  //     ...basicData.map(d => {
  //       return { date: d.date, value: d.value -= 30 }
  //     })
  //   ]
  // }
]

//
const tempData = [
  {
    '': 0,
    p_infected: 0.1,
    p_infected_and_recovered: 0.1,
    p_infected_and_recovered_comm1: 0.03,
    p_infected_and_recovered_comm2: 0.11,
    p_infected_and_recovered_comm3: 0.16,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.16,
    time: 0
  },
  {
    '': 1,
    p_infected: 0.10666666666666667,
    p_infected_and_recovered: 0.10666666666666667,
    p_infected_and_recovered_comm1: 0.03,
    p_infected_and_recovered_comm2: 0.11,
    p_infected_and_recovered_comm3: 0.18,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.18,
    time: 1
  },
  {
    '': 2,
    p_infected: 0.13,
    p_infected_and_recovered: 0.13,
    p_infected_and_recovered_comm1: 0.09,
    p_infected_and_recovered_comm2: 0.12,
    p_infected_and_recovered_comm3: 0.18,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.12,
    p_infected_comm3: 0.18,
    time: 2
  },
  {
    '': 3,
    p_infected: 0.14,
    p_infected_and_recovered: 0.14,
    p_infected_and_recovered_comm1: 0.09,
    p_infected_and_recovered_comm2: 0.14,
    p_infected_and_recovered_comm3: 0.19,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.14,
    p_infected_comm3: 0.19,
    time: 3
  },
  {
    '': 4,
    p_infected: 0.16,
    p_infected_and_recovered: 0.16,
    p_infected_and_recovered_comm1: 0.11,
    p_infected_and_recovered_comm2: 0.17,
    p_infected_and_recovered_comm3: 0.2,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0.17,
    p_infected_comm3: 0.2,
    time: 4
  },
  {
    '': 5,
    p_infected: 0.17,
    p_infected_and_recovered: 0.17,
    p_infected_and_recovered_comm1: 0.13,
    p_infected_and_recovered_comm2: 0.18,
    p_infected_and_recovered_comm3: 0.2,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.18,
    p_infected_comm3: 0.2,
    time: 5
  },
  {
    '': 6,
    p_infected: 0.18333333333333332,
    p_infected_and_recovered: 0.18333333333333332,
    p_infected_and_recovered_comm1: 0.15,
    p_infected_and_recovered_comm2: 0.18,
    p_infected_and_recovered_comm3: 0.22,
    p_infected_comm1: 0.15,
    p_infected_comm2: 0.18,
    p_infected_comm3: 0.22,
    time: 6
  },
  {
    '': 7,
    p_infected: 0.19,
    p_infected_and_recovered: 0.19,
    p_infected_and_recovered_comm1: 0.15,
    p_infected_and_recovered_comm2: 0.2,
    p_infected_and_recovered_comm3: 0.22,
    p_infected_comm1: 0.15,
    p_infected_comm2: 0.2,
    p_infected_comm3: 0.22,
    time: 7
  },
  {
    '': 8,
    p_infected: 0.11,
    p_infected_and_recovered: 0.21000000000000002,
    p_infected_and_recovered_comm1: 0.2,
    p_infected_and_recovered_comm2: 0.2,
    p_infected_and_recovered_comm3: 0.23,
    p_infected_comm1: 0.17,
    p_infected_comm2: 0.09,
    p_infected_comm3: 0.07,
    time: 8
  },
  {
    '': 9,
    p_infected: 0.11666666666666667,
    p_infected_and_recovered: 0.22333333333333333,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22,
    p_infected_and_recovered_comm3: 0.22999999999999998,
    p_infected_comm1: 0.19,
    p_infected_comm2: 0.11,
    p_infected_comm3: 0.05,
    time: 9
  },
  {
    '': 10,
    p_infected: 0.09666666666666666,
    p_infected_and_recovered: 0.22666666666666668,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22,
    p_infected_and_recovered_comm3: 0.24,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.1,
    p_infected_comm3: 0.06,
    time: 10
  },
  {
    '': 11,
    p_infected: 0.08666666666666667,
    p_infected_and_recovered: 0.22666666666666668,
    p_infected_and_recovered_comm1: 0.22,
    p_infected_and_recovered_comm2: 0.22000000000000003,
    p_infected_and_recovered_comm3: 0.24,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.08,
    p_infected_comm3: 0.05,
    time: 11
  },
  {
    '': 12,
    p_infected: 0.08333333333333333,
    p_infected_and_recovered: 0.24333333333333335,
    p_infected_and_recovered_comm1: 0.24,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.13,
    p_infected_comm2: 0.06,
    p_infected_comm3: 0.06,
    time: 12
  },
  {
    '': 13,
    p_infected: 0.07666666666666666,
    p_infected_and_recovered: 0.24666666666666667,
    p_infected_and_recovered_comm1: 0.25,
    p_infected_and_recovered_comm2: 0.22999999999999998,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.05,
    p_infected_comm3: 0.06,
    time: 13
  },
  {
    '': 14,
    p_infected: 0.07,
    p_infected_and_recovered: 0.2533333333333333,
    p_infected_and_recovered_comm1: 0.27,
    p_infected_and_recovered_comm2: 0.22999999999999998,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.05,
    p_infected_comm3: 0.04,
    time: 14
  },
  {
    '': 15,
    p_infected: 0.07,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.14,
    p_infected_comm2: 0.03,
    p_infected_comm3: 0.04,
    time: 15
  },
  {
    '': 16,
    p_infected: 0.05,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.03,
    p_infected_comm3: 0.03,
    time: 16
  },
  {
    '': 17,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.26,
    p_infected_and_recovered_comm1: 0.29000000000000004,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.07,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.03,
    time: 17
  },
  {
    '': 18,
    p_infected: 0.04,
    p_infected_and_recovered: 0.26666666666666666,
    p_infected_and_recovered_comm1: 0.31,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.02,
    time: 18
  },
  {
    '': 19,
    p_infected: 0.05,
    p_infected_and_recovered: 0.27666666666666667,
    p_infected_and_recovered_comm1: 0.33999999999999997,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.26,
    p_infected_comm1: 0.12,
    p_infected_comm2: 0.01,
    p_infected_comm3: 0.02,
    time: 19
  },
  {
    '': 20,
    p_infected: 0.04,
    p_infected_and_recovered: 0.2833333333333333,
    p_infected_and_recovered_comm1: 0.35,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 20
  },
  {
    '': 21,
    p_infected: 0.04,
    p_infected_and_recovered: 0.2866666666666667,
    p_infected_and_recovered_comm1: 0.36,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.11,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 21
  },
  {
    '': 22,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.29000000000000004,
    p_infected_and_recovered_comm1: 0.37,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.1,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 22
  },
  {
    '': 23,
    p_infected: 0.03333333333333333,
    p_infected_and_recovered: 0.29333333333333333,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 23
  },
  {
    '': 24,
    p_infected: 0.03333333333333333,
    p_infected_and_recovered: 0.29333333333333333,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.27,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 24
  },
  {
    '': 25,
    p_infected: 0.03666666666666667,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.09,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 25
  },
  {
    '': 26,
    p_infected: 0.03,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.07,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 26
  },
  {
    '': 27,
    p_infected: 0.02,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.04,
    p_infected_comm2: 0,
    p_infected_comm3: 0.02,
    time: 27
  },
  {
    '': 28,
    p_infected: 0.013333333333333334,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.03,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 28
  },
  {
    '': 29,
    p_infected: 0.01,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.02,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 29
  },
  {
    '': 30,
    p_infected: 0.006666666666666667,
    p_infected_and_recovered: 0.29666666666666663,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0.01,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 30
  },
  {
    '': 31,
    p_infected: 0.0033333333333333335,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 31
  },
  {
    '': 32,
    p_infected: 0.0033333333333333335,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0.01,
    time: 32
  },
  {
    '': 33,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 33
  },
  {
    '': 34,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 34
  },
  {
    '': 35,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 35
  },
  {
    '': 36,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 36
  },
  {
    '': 37,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 37
  },
  {
    '': 38,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 38
  },
  {
    '': 39,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 39
  },
  {
    '': 40,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 40
  },
  {
    '': 41,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 41
  },
  {
    '': 42,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 42
  },
  {
    '': 43,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 43
  },
  {
    '': 44,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 44
  },
  {
    '': 45,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 45
  },
  {
    '': 46,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 46
  },
  {
    '': 47,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 47
  },
  {
    '': 48,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 48
  },
  {
    '': 49,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 49
  },
  {
    '': 50,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 50
  },
  {
    '': 51,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 51
  },
  {
    '': 52,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 52
  },
  {
    '': 53,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 53
  },
  {
    '': 54,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 54
  },
  {
    '': 55,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 55
  },
  {
    '': 56,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 56
  },
  {
    '': 57,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 57
  },
  {
    '': 58,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 58
  },
  {
    '': 59,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 59
  },
  {
    '': 60,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 60
  },
  {
    '': 61,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 61
  },
  {
    '': 62,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 62
  },
  {
    '': 63,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 63
  },
  {
    '': 64,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 64
  },
  {
    '': 65,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 65
  },
  {
    '': 66,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 66
  },
  {
    '': 67,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 67
  },
  {
    '': 68,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 68
  },
  {
    '': 69,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 69
  },
  {
    '': 70,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 70
  },
  {
    '': 71,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 71
  },
  {
    '': 72,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 72
  },
  {
    '': 73,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 73
  },
  {
    '': 74,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 74
  },
  {
    '': 75,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 75
  },
  {
    '': 76,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 76
  },
  {
    '': 77,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 77
  },
  {
    '': 78,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 78
  },
  {
    '': 79,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 79
  },
  {
    '': 80,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 80
  },
  {
    '': 81,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 81
  },
  {
    '': 82,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 82
  },
  {
    '': 83,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 83
  },
  {
    '': 84,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 84
  },
  {
    '': 85,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 85
  },
  {
    '': 86,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 86
  },
  {
    '': 87,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 87
  },
  {
    '': 88,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 88
  },
  {
    '': 89,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 89
  },
  {
    '': 90,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 90
  },
  {
    '': 91,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 91
  },
  {
    '': 92,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 92
  },
  {
    '': 93,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 93
  },
  {
    '': 94,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 94
  },
  {
    '': 95,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 95
  },
  {
    '': 96,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 96
  },
  {
    '': 97,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 97
  },
  {
    '': 98,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 98
  },
  {
    '': 99,
    p_infected: 0,
    p_infected_and_recovered: 0.2966666666666667,
    p_infected_and_recovered_comm1: 0.38,
    p_infected_and_recovered_comm2: 0.23,
    p_infected_and_recovered_comm3: 0.28,
    p_infected_comm1: 0,
    p_infected_comm2: 0,
    p_infected_comm3: 0,
    time: 9
  }
]
//

// export const dataSource: Array<{ key: string; values: Array<{ date: number; value: number }> }> = [
//   {
//     key: 'p_infected',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm1',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm1'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm2',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm2'] }
//     })
//   },
//   {
//     key: 'p_infected_and_recovered_comm3',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_and_recovered_comm3'] }
//     })
//   },
//   {
//     key: 'p_infected_comm1',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm1'] }
//     })
//   },
//   {
//     key: 'p_infected_comm2',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm2'] }
//     })
//   },
//   {
//     key: 'p_infected_comm3',
//     values: tempData.map(d => {
//       return { date: d['time'], value: d['p_infected_comm3'] }
//     })
//   }
// ]

const dt = [
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 444
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 444
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 549
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 761
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1058
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1423
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 151
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 3554
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 143
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 207
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 152
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 206
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 3554
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 200
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 278
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 182
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 4903
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 158
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 354
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-30T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 237
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 352
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 240
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 211
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 5806
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 332
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 436
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-01-31T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 297
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 422
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 599
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 202
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 207
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 286
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 247
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 7153
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 389
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 206
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 535
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 340
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 493
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 661
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 236
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 191
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 231
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 300
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 11177
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 116
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 463
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 230
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 182
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 632
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 408
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 566
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 724
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 271
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 212
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 391
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 13522
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 179
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 521
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 259
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 203
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 725
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-03T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 675
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 829
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 308
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 228
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 282
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 476
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 366
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 16678
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 194
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 593
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 275
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 219
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 813
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-04T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 530
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 764
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 895
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 150
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 341
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 301
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 548
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 389
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 19665
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 165
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 205
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 661
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 243
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 190
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 895
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-05T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 591
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 851
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 954
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 373
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 274
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 321
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 600
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 411
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 22112
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 215
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 711
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 347
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 157
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 257
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 227
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 970
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 665
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 914
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1006
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 408
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 297
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 344
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 661
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 426
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 24953
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 224
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 772
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 386
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1034
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 733
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 981
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1048
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 183
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 439
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 315
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 364
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 698
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 27100
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 239
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 803
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 416
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 286
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 295
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1095
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-08T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1131
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 779
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1033
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1075
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 468
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 326
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 386
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 740
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 468
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 29631
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 208
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 250
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 838
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 444
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 206
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-09T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1159
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 830
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1073
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1092
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 210
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 492
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 405
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 771
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 486
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 31728
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 213
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 261
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 879
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 466
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 218
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 299
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 331
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-10T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1177
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 860
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1105
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1117
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 215
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 515
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 417
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 804
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 505
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 33366
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 219
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 912
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 487
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 239
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 303
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 360
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 153
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-11T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1219
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 889
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1135
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1131
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 222
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 543
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 352
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 436
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 844
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 518
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 33366
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 157
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 272
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 946
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 497
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 116
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 378
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 154
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-12T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1241
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 910
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1169
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1145
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 222
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 570
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 366
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 451
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 872
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 529
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 48206
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 229
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 157
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 279
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 968
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 509
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 265
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 315
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 395
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 156
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-13T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1261
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1184
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1155
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 226
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 593
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 372
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 463
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 900
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 537
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 54406
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 230
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 281
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 988
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 523
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 283
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 419
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 218
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-14T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1294
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 950
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1212
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1162
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 235
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 604
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 375
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 470
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 143
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 913
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 544
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 56249
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 232
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 285
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1001
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 532
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 291
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 326
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 425
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 285
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-15T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1316
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 962
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1231
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1167
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 237
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 617
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 380
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 925
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 551
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 58182
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 236
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 287
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1004
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 537
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 300
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 328
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 445
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-16T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1322
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 973
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1246
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1171
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 626
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 381
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 495
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 930
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 553
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 59989
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 240
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 163
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 290
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1006
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 541
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 301
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 457
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 454
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-17T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1328
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 982
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1257
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1172
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 242
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 629
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 387
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 508
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 933
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 555
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 61682
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 240
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 163
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 292
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1007
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 543
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 306
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 464
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 542
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-18T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1331
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 986
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1262
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1174
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 244
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 393
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 514
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 560
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 62031
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 242
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1008
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 544
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 306
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 470
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 621
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-19T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 476
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1332
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 987
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1265
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1175
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 395
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 520
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 567
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 62442
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1010
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 546
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 334
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 634
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-20T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 479
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1333
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 988
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1267
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1203
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 396
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 525
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 572
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 62662
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1011
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 749
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 308
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 334
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 634
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 204
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-21T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 479
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1339
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1270
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 399
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 526
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 573
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 64084
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 750
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 309
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1013
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 335
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 634
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 433
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-22T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1342
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1271
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 399
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 526
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 575
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 64084
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 754
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1016
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 335
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 691
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 602
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1345
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1271
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 399
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 527
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 64287
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 755
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1016
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 335
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 229
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 691
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 833
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1347
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1271
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 400
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 529
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 64786
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 294
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 756
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1016
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 336
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 322
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 170
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 691
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 977
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1347
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1271
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 400
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 531
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 65187
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 294
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 756
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 312
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1016
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 453
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1261
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-26T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1347
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 989
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 410
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 534
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 65596
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 756
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 317
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1017
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 655
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1766
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-27T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1348
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 410
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 65914
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 756
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1017
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 388
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 888
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 228
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2337
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-28T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1349
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 411
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 66337
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 756
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 593
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1128
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 241
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3150
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-02-29T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1349
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1205
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 413
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 66907
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 978
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1694
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 256
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3736
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-01T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1350
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1206
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 414
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 67103
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 191
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1501
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2036
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 274
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 4335
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-02T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 338
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1350
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1213
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 414
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 67217
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 204
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2336
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2502
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 706
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 5186
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 165
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-03T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 338
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1350
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1213
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 418
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 67332
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 285
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 262
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2922
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3089
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 331
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 706
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 5621
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 222
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-04T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 339
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1351
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 418
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 67466
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 377
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3513
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3858
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 360
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 706
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 6088
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 259
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-05T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1352
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 422
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 67592
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 653
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 670
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4747
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4636
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 420
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 6593
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 400
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-06T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1352
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 426
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 67666
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 949
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 799
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5823
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5883
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 461
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 188
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 7041
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 500
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 268
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-07T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 200
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1352
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 67707
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1126
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1040
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6566
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7375
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 502
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 265
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 150
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7314
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 673
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 203
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-08T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 239
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1352
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 67743
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1209
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1176
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7161
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 9172
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 511
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 321
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 205
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 150
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7478
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1073
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 374
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-09T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 182
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 344
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1353
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1272
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 429
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 67760
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 758
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 262
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1784
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1457
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 8042
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 10149
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 581
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 382
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 400
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7513
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 160
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1695
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 491
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-10T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 314
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 67773
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1356
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 435
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 344
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 442
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2281
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1908
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9000
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 12462
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 639
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7755
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 503
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 598
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 262
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 178
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2277
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 500
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 652
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 798
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 456
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 366
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 220
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-11T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 302
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 314
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 67781
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1356
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 435
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 344
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 615
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2281
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2078
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10075
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 12462
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 639
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 7869
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 503
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 702
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 262
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 178
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2277
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 599
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 652
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 456
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 442
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 328
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-12T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 504
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 559
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 151
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1215
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 67786
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1356
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 436
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 346
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 801
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3661
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3675
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 190
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 11364
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17660
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 701
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 7979
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 197
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 804
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 996
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 320
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 200
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5232
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 814
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1139
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 798
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 421
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 568
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 282
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-13T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 655
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 210
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 689
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 151
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 67790
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1356
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1227
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 437
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 353
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 827
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4469
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4585
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 228
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 156
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 12729
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 193
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 21157
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 773
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 8086
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 959
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1090
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 212
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 181
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6391
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 961
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1359
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1140
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 572
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 525
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 340
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-14T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 860
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 886
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 67794
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 353
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1360
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 174
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1231
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 442
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 864
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 244
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4499
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 5795
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 331
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 13938
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 116
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24747
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 839
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 8162
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1135
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1221
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 401
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 226
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 219
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7798
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1022
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2200
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1140
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 164
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 732
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 643
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 426
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-15T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1058
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 200
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 539
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 67798
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1361
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1231
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 760
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 452
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 298
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 914
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 150
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 205
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6633
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7272
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 331
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 180
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 14991
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 255
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 27980
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 825
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8236
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 566
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1413
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1333
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 331
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 439
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 158
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 243
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 9942
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1103
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 2200
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1543
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 967
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 904
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 557
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 197
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 178
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 160
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-16T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 210
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1332
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 228
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1243
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 321
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 185
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 67799
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1364
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1232
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 761
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 540
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 456
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 358
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 696
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 396
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 977
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 321
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7652
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 9257
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 387
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 220
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 16169
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 154
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 223
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 337
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 31506
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 878
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8320
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 130
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 673
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1705
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1463
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 236
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 448
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 439
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 266
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 275
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11748
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1190
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2700
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1950
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 160
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1706
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1076
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 698
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 218
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 216
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-17T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 59
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1646
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 256
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1486
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 372
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 186
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 97
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 361
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 181
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1232
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 761
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1370
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 540
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 482
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 469
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 464
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1057
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 258
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 336
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 9043
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 12327
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 418
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 250
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 156
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 227
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 17361
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 164
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 292
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 433
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 35713
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 889
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 8413
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 203
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 790
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2051
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1550
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 299
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 202
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 448
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 452
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 260
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 147
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 313
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 275
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 116
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 13910
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1279
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3028
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 212
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2626
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 314
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 257
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 218
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 199
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 152
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2495
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1014
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 751
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-18T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 97
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2013
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 278
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1795
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 621
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 257
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 231
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1378
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1233
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 761
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 540
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 483
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 363
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 208
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 105
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 694
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1151
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 199
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 256
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 400
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 10871
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 15320
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 418
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 330
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 194
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 18407
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 192
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 557
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 677
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 41035
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 924
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 8565
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 148
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 157
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 335
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 900
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2460
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1746
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 454
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 234
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 217
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 785
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 460
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 199
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 274
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 345
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 286
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 150
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 17963
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1439
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 4075
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 108
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 272
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 192
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2689
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 5365
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1376
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 952
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 742
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 422
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 417
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 392
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 334
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 328
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 287
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 260
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 206
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 154
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 119
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-19T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 353
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 121
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2388
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 285
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2257
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 793
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 308
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 271
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 434
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 299
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 256
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 247
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1395
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1234
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 762
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 541
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 491
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 371
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 833
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1255
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 367
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 285
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 283
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 450
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 12612
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 19848
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 495
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 409
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 244
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 369
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 19644
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 208
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 683
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 705
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 47021
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 963
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 8652
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 163
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1030
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 164
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2994
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1914
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 501
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 234
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 230
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 425
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1020
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 470
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 308
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 344
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 385
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 341
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 202
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 20410
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1639
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 5294
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 322
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 359
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3983
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 363
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 303
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 233
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 207
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 194
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 8310
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1524
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1177
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 890
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 585
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 563
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 552
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 538
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 420
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 413
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 394
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-20T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 158
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 160
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 436
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 229
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2814
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 305
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2815
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1021
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 163
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 424
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 377
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 181
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 537
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1400
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1236
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 764
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 542
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 504
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 380
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 303
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 273
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 935
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 206
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 995
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1326
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 506
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 294
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 306
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 523
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14282
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 22213
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 530
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 473
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 330
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 450
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 20610
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 785
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 883
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53578
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1007
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 8799
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 670
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1183
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 203
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3631
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2118
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 730
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 200
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 536
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1280
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 481
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 367
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 306
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 392
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 432
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 178
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 383
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 240
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 25374
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1763
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6575
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 153
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 411
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 670
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 153
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 5018
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 156
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1793
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1364
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1327
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 128
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 788
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 753
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 659
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 585
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 581
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 525
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 507
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 396
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 390
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 371
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 282
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 194
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 193
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 171
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 11710
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-21T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 194
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 533
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 296
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3244
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 332
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3401
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1593
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 425
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 259
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 424
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 219
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 632
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 577
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 543
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 514
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 394
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 319
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 317
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 307
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1273
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 137
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1407
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1237
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 936
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 766
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 633
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 231
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1120
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1395
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 202
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 789
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 327
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 326
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 626
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 16018
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 24873
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 624
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 568
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 396
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 514
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 21638
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 233
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 906
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1071
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 59138
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1086
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 8897
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 188
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 798
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1306
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 115
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 4204
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2383
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 776
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 363
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 380
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 634
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1600
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 494
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 433
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 367
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 160
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 511
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 222
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 455
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 185
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 414
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 274
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 28768
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1934
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 7245
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 599
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1236
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 153
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 5683
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 600
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 83
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 509
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 505
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 476
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 381
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 302
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 244
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 223
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 15793
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 207
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 196
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 190
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1996
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1914
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 181
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1642
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 165
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 152
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1049
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1037
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 837
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 830
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 646
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 627
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-22T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 230
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 266
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 235
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 355
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 140
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 669
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 319
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4474
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 377
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3743
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1924
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 301
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 472
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 503
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 628
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 746
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1238
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 577
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 133
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 543
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 537
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 313
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1415
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 319
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1274
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 356
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 67800
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 633
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 936
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 768
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 404
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 158
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 315
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 116
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1236
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1450
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 245
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 981
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 366
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 352
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 700
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 19874
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29056
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 695
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 167
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 588
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 499
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 579
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23049
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 266
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1125
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1442
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 63927
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1128
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8961
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 180
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 267
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 179
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 875
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1518
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 316
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 143
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4749
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2621
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 875
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 313
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 395
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 462
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 749
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2060
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 501
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 576
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 438
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 562
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 509
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 186
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 442
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 402
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 35136
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 97
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2046
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8795
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 721
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1529
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 198
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6650
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 158
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 139
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2442
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 148
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 97
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 536
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 389
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 78
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12305
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 609
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 567
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 263
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 922
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 190
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 131
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 273
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 638
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 278
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 164
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 232
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 210
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 126
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 270
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 204
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 419
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1170
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 302
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 54
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 61
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 329
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 144
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2894
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 592
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 519
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 154
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 238
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1458
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-23T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 123
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 264
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 164
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 387
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 170
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 411
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 818
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 397
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5283
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 392
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4269
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 166
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2247
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 104
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 218
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 359
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 617
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 588
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1013
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 922
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 545
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1240
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 558
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 578
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1428
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 319
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1274
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 386
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 67801
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 636
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 936
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 768
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 414
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 378
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 382
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1394
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1591
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 312
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1082
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 402
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 369
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 792
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 62
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22304
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 70
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32986
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 743
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 648
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 536
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 686
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24811
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 316
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1329
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1930
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 69176
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1193
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 154
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9037
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 191
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 197
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 318
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 209
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1099
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1624
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 110
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 367
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 125
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 170
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5560
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 155
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 148
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2863
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 972
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 345
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 416
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 552
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 901
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2362
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 526
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 794
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 495
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 767
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 303
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 558
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 204
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 554
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39885
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2286
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9877
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 215
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 827
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1872
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 97
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 248
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8077
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 162
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2869
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 148
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 142
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 152
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 662
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 498
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 212
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 167
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14904
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 701
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 675
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 141
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 107
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 100
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 311
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 114
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 169
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 88
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 159
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1194
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 252
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 234
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 226
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 152
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 876
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 338
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 90
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 253
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 304
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 135
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 277
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 161
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 63
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 293
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 95
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 138
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 384
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 85
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 103
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 243
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 645
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 184
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1170
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 204
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 375
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 112
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 71
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 428
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 124
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 82
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3891
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 180
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 92
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 246
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 671
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 216
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 614
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 234
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 288
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1880
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 91
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 199
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-24T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 302
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 188
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 387
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 265
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 443
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 170
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 466
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 175
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1029
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5588
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 419
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 86
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4937
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 32
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2554
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 109
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 242
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 68
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 688
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1342
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 72
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 358
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 617
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 35
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1142
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 250
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 769
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 433
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 134
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 547
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 76
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 176
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1241
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 990
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 561
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 578
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 322
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 136
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1433
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 254
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 146
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 168
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 319
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 484
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1274
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 410
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 67801
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1018
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 638
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 936
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 94
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 470
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 201
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 80
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 442
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 57
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1654
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 132
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1724
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 712
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 392
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1173
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 456
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 404
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 880
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 25233
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 111
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 73
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 66
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 37323
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 821
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 226
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 737
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 657
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 790
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27017
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 346
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1564
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2369
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 74386
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1307
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 172
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9137
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 195
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 221
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 274
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1333
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1796
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 129
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 405
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 149
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 52
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 225
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6412
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 205
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 177
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3084
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1063
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 443
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 480
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 636
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1051
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2995
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 537
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 906
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 658
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 41
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 208
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 900
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 99
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 384
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 631
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 216
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 528
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 709
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 49515
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 102
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2526
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10897
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 235
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 934
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 60
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 173
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2433
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 145
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 333
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9529
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 189
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 50
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 45
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 74
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 543
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4691
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 153
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 84
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 56
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 222
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 48
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 120
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 31
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 75
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 30
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 64
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 262
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 968
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 49
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 255
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 634
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 342
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 313
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2260
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 106
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 44
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 69
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 101
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 117
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 93
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 55
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 251
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 34
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3285
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 214
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 87
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 47
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 89
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 65
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 53
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 36
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 122
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 42
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 170
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 226
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 118
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 16
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 25
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 81
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 33
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 28
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 58
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 51
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 22
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 21
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 98
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 37
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 23
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 14
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 187
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 812
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 77
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 19
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 96
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 11
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 43
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 29
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 15
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 17
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 638
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 79
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 40
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 8
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 46
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 26
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 27
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 39
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 67
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 249
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 20
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 127
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 13
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 3
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 24
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 10
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 113
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 5
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 7
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 4
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 38
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 2
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 6
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 18
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 9
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 0
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 12
  },
  {
    Date: '2020-03-25T00:00:00Z',
    Cases: 1
  },
  {
    Cases: 206
  },
  {
]