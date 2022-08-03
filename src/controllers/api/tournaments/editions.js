import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiTournamentsEditionsIndex = async (req, res) => {
  try {
    const { params: { code } } = req
    const foundTournament = await prisma.tournament.findMany({
      where: { code },
      orderBy: {
        year: 'desc'
      }
    })
    return res.status(200).json({
      tournaments: foundTournament
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsEditionsIndex
