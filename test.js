import prisma from './src/controllers/_helpers/prisma.js'

// const test = async () => {
//   const tournament = await prisma.tournament.findFirst({
//     where: {
//       id: 11
//     },
//     include: {
//       groups: {
//         include: {
//           teamsOnGroups: {
//             include: {
//               team: {
//                 include: {
//                   confederation: true
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   })

const test = async () => {
  const tournament = await prisma.tournament.findMany({
    where: {
      // id: 11
      confederation: {
        code: 'FIFA'
      }
    },
    include: {
      confederation: true,
      groups: {
        include: {
          teamsOnGroups: {
            include: {
              team: {
                include: {
                  confederation: true
                }
              }
            }
          }
        }
      }
    }
  })

  console.log(tournament)
  console.log(tournament[0].groups[0].teamsOnGroups[0].team)
  console.log(tournament[0].groups[0].teamsOnGroups[1].team)
  console.log(tournament[0].groups[0].teamsOnGroups[2].team)
  console.log(tournament[0].groups[0].teamsOnGroups[3].team)
}

test()
