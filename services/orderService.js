const orderStore = require("../store/orderStore");
const { NotFound } = require("../errors");

const getAllAsync = async () => {
  return orderStore.getAllAsync();
};

const getByIdAsync = async (id) => {
  const order = await orderStore.getByIdAsync(id);
  if (!order) throw new NotFound(`Order not found with id: '${id}'`);
  return order;
};

const createAsync = async (order) => {
  return orderStore.createAsync(order);
};

const updateAsync = async (id, updatedOrder) => {
  await getByIdAsync(id);
  return orderStore.updateAsync(id, updatedOrder);
};

const deleteByIdAsync = async (id) => {
  await getByIdAsync(id);
  return orderStore.deleteByIdAsync(id);
};

module.exports = {
  getAllAsync,
  getByIdAsync,
  createAsync,
  updateAsync,
  deleteByIdAsync,
};
