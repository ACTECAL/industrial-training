exports.handleError = (res, err, context) => {
  console.error(`❌ Error in ${context}:`, err.message);
  res.status(500).json({ success: false, message: 'Server error' });
};
