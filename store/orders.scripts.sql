CREATE TABLE IF NOT EXISTS orders(
    order_number uuid DEFAULT uuid_generate_v4(),
    due_date DATE,
    customer_name TEXT,
    customer_address TEXT,
    customer_phone TEXT,
    order_total TEXT,
    PRIMARY KEY (order_number)
);
