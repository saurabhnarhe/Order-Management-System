const { getClientAsync } = require("./dbHelper");

const getAllAsync = async () => {
  const client = await getClientAsync();
  const res = await client.query("SELECT * FROM orders;");
  return res.rows;
};

const getByIdAsync = async (id) => {
  const client = await getClientAsync();
  let res = null;
  try {
    res = await client.query("SELECT * FROM orders WHERE order_number=$1;", [
      id,
    ]);
  } catch (ex) {
    // "22P02" = NotFound
    if (ex.code === "22P02") {
      res = null;
    }
  }

  return res?.rows?.length > 0 ? res.rows[0] : null;
};

const createAsync = async (order) => {
  const client = await getClientAsync();
  await client.query(
    "INSERT INTO orders(due_date, customer_name, customer_address, customer_phone, order_total) VALUES($1, $2, $3, $4, $5);",
    [
      order.due_date,
      order.customer_name,
      order.customer_address,
      order.customer_phone,
      order.order_total,
    ]
  );
};

const updateAsync = async (id, updatedOrder) => {
  const client = await getClientAsync();
  await client.query(
    "UPDATE orders SET due_date=$1, customer_name=$2, customer_address=$3, customer_phone=$4, order_total=$5 WHERE order_number=$6;",
    [
      updatedOrder.due_date,
      updatedOrder.customer_name,
      updatedOrder.customer_address,
      updatedOrder.customer_phone,
      updatedOrder.order_total,
      id,
    ]
  );
};

const deleteByIdAsync = async (id) => {
  const client = await getClientAsync();
  await client.query("DELETE FROM orders WHERE order_number=$1;", [id]);
};

module.exports = {
  getAllAsync,
  getByIdAsync,
  createAsync,
  updateAsync,
  deleteByIdAsync,
};
