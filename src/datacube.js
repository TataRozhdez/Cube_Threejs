/*
              D
             +------------+
             | 19  22  25 |
             |            |
             | 20  23  26 |
             |            |
 R           | 21  24  27 | L            B
+------------+------------+------------+------------+
| 19  20  21 | 21  24  27 | 27  26  25 | 25  22  19 |
|            |            |            |            |
| 10  11  12 | 12  15  18 | 18  17  16 | 16  13  10 |
|            |            |            |            |
| 01  02  03 | 03  06  09 | 09  88  07 | 07  04  01 |
+------------+------------+------------+------------+
             | 03  06  09 |
             |            |
             | 02  05  08 |
             |            |
             | 01  04  07 |
           u +------------+

 CUBES ( id = number )
 0-0-0 = 01     1-0-0 = 10      2-0-0 = 19
 0-0-1 = 02     1-0-1 = 11      2-0-1 = 20
 0-0-2 = 03     1-0-2 = 12      2-0-2 = 21
 0-1-0 = 04     1-1-0 = 13      2-1-0 = 22
 0-1-1 = 05     1-1-1 = 14      2-1-1 = 23
 0-1-2 = 06     1-1-2 = 15      2-1-2 = 24
 0-2-0 = 07     1-2-0 = 16      2-2-0 = 25
 0-2-1 = 08     1-2-1 = 17      2-2-1 = 26
 0-2-2 = 09     1-2-2 = 18      2-2-2 = 27

 CENTER ( apiNumber = apiColor = myNumber)
 0 = U yellow = 05
 1 = R orange = 11
 2 = F green  = 15
 3 = D white  = 23
 4 = L red    = 17
 5 = B blue   = 13

 Reverse: exp.:
  | 0  1  2
__|_________
0 | U  R  F
1 | 2  0  1
2 | 1  2  0

*/

// corner
export const cubeNumCp = [
  {
    id: '0-0-2',
    myNumber: '03',
    apiNumber: 0,
    color: 'URF'
  },
  {
    id: '0-2-2',
    myNumber: '09',
    apiNumber: 1,
    color: 'UFL'
  },
  {
    id: '0-2-0',
    myNumber: '07',
    apiNumber: 2,
    color: 'ULB'
  },
  {
    id: '0-0-0',
    myNumber: '01',
    apiNumber: 3,
    color: 'UBR'
  },
  {
    id: '2-0-2',
    myNumber: '21',
    apiNumber: 4,
    color: 'DFR'
  },
  {
    id: '2-2-2',
    myNumber: '27',
    apiNumber: 5,
    color: 'DLF'
  },
  {
    id: '2-2-0',
    myNumber: '25',
    apiNumber: 6,
    color: 'DBL'
  },
  {
    id: '2-0-0',
    myNumber: '19',
    apiNumber: 7,
    color: 'DRB'
  }
]

// midpoint
export const cubeNumEp = [
  {
    id: '0-0-1',
    myNumber: '02',
    apiNumber: 0,
    color: 'UR'
  },
  {
    id: '0-1-2',
    myNumber: '06',
    apiNumber: 1,
    color: 'UF'
  },
  {
    id: '0-2-1',
    myNumber: '08',
    apiNumber: 2,
    color: 'UL'
  },
  {
    id: '0-1-0',
    myNumber: '04',
    apiNumber: 3,
    color: 'UB'
  },
  {
    id: '2-0-1',
    myNumber: '20',
    apiNumber: 4,
    color: 'DR'
  },
  {
    id: '2-1-2',
    myNumber: '24',
    apiNumber: 5,
    color: 'DF'
  },
  {
    id: '2-2-1',
    myNumber: '26',
    apiNumber: 6,
    color: 'DL'
  },
  {
    id: '2-1-0',
    myNumber: '22',
    apiNumber: 7,
    color: 'DB'
  },
  {
    id: '1-0-2',
    myNumber: '12',
    apiNumber: 8,
    color: 'FR'
  },
  {
    id: '1-2-2',
    myNumber: '18',
    apiNumber: 9,
    color: 'FL'
  },
  {
    id: '1-2-0',
    myNumber: '16',
    apiNumber: 10,
    color: 'BL'
  },
  {
    id: '1-0-0',
    myNumber: '10',
    apiNumber: 11,
    color: 'BR'
  }
]
