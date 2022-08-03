import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiConfederationsIndex = async (req, res) => {
  try {
    // Filters
    const orderBy = 'code'
    const sortBy = 'desc'
    const foundConfederations = await prisma.confederation.findMany({
      distinct: [orderBy],
      // select: {
      //   code: true
      // },
      orderBy: {
        [orderBy]: sortBy
      }
    })

    return res.status(200).json({
      confederations: foundConfederations
    })
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiConfederationsIndex
