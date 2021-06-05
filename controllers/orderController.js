const { orderService } = require("../services");

const getAllAsync = async (req, res) => {
  const result = await orderService.getAllAsync(req.body);
  res.send(result);
};

const getByIdAsync = async (req, res) => {
  const result = await orderService.getByIdAsync(req.params.id);
  res.send(result);
};

const createAsync = async (req, res) => {
  const result = await orderService.createAsync(req.body);
  res.send(result);
};

const updateAsync = async (req, res) => {
  const result = await orderService.updateAsync(req.params.id, req.body);
  res.send(result);
};

const deleteByIdAsync = async (req, res) => {
  const result = await orderService.deleteByIdAsync(req.params.id);
  res.send(result);
};

module.exports = {
  getAllAsync,
  getByIdAsync,
  createAsync,
  updateAsync,
  deleteByIdAsync,
};
