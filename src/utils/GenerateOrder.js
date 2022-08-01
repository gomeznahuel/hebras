const GeneratedOrder = (buyer, cart, total) => {
  return { buyer, cart, total, createdAt: new Date().toLocaleString() };
};

export default GeneratedOrder;
