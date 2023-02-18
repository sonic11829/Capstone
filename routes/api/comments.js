const router = require('express').Router()
const dataController = require('../../controllers/api/comments')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Index for comments
router.get('/', dataController.index)
// Delete a comment
router.delete('/:id', ensureLoggedIn, dataController.delete)
// Update a comment
router.put('/:id', ensureLoggedIn, dataController.update)
// Create a comment
router.post('/', ensureLoggedIn, dataController.create)
// Show a comment
router.get('/:id', dataController.show)

module.exports = router