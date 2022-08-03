import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiTournamentsEditionsIndex = async (req, res) => {
  try {
    const { params: { id } } = req
    const foundTournament = await prisma.tournament.findFirst({
      where: {
        id: Number(id)
      },
      select: {
        
      }
    })
    return res.status(200).json(foundTournament)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsEditionsIndex
