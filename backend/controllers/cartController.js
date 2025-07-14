const getCartModel = require('../models/cartModel');
const getMenuModel = require('../models/menuModel');

exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const Cart = await getCartModel();
    const Menu = await getMenuModel();
    const cart = await Cart.findAll({ where: { userId }, include: Menu });
    // Format cart items to include menu details
    const formattedCart = cart.map(item => ({
      id: item.menuId,
      name: item.Menu.name,
      price: item.Menu.price,
      image: item.Menu.image,
      quantity: item.quantity
    }));
    res.json({ success: true, cart: formattedCart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch cart' });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { menuId, quantity } = req.body;
    const Cart = await getCartModel();
    let cartItem = await Cart.findOne({ where: { userId, menuId } });
    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await Cart.create({ userId, menuId, quantity });
    }
    res.json({ cartItem });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add to cart' });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { menuId, quantity } = req.body;
    const Cart = await getCartModel();
    const cartItem = await Cart.findOne({ where: { userId, menuId } });
    if (cartItem) {
      cartItem.quantity = quantity;
      await cartItem.save();
      res.json({ cartItem });
    } else {
      res.status(404).json({ success: false, message: 'Cart item not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update cart' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { menuId } = req.body;
    const Cart = await getCartModel();
    await Cart.destroy({ where: { userId, menuId } });
    res.json({ message: 'Removed from cart' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to remove from cart' });
  }
};
