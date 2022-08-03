import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiTournamentsShow = async (req, res) => {
  try {
    const { params: { id } } = req
    const foundTournament = await prisma.tournament.findFirst({
      where: {
        id: Number(id)
      },
      include: {
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
    return res.status(200).json(foundTournament)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiTournamentsShow
