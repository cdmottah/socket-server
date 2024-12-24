const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const userService = new UserService();
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await userService.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await userService.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await userService.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

