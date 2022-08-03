import { Router } from 'express'

const router = Router()

// CONFEDERATIONS
router.get('/api/confederations', (await import('./controllers/api/confederations/index.js')).default)

// TOURNAMENTS
router.get('/api/tournaments', (await import('./controllers/api/tournaments/index.js')).default)
router.get('/api/tournaments/editions/:code', (await import('./controllers/api/tournaments/editions.js')).default)
router.get('/api/tournaments/:id', (await import('./controllers/api/tournaments/show.js')).default)

export default router
