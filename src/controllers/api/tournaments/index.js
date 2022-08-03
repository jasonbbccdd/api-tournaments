import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiTournamentsIndex = async (req, res) => {
  try {
    const foundTournaments = await prisma.tournament.findMany({
      distinct: ['code'],
      select: {
        code: true,
        name: true
      },
      orderBy: {
        code: 'desc'
      }
    })

    return res.status(200).json({
      tournaments: foundTournaments
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsIndex
