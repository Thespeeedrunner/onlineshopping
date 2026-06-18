/**
 * ShopHub - Configuration File
 * Adjust these settings to customize your store
 */

// ============================================
// STORE CONFIGURATION
// ============================================

const STORE_CONFIG = {
  // Store Name & Branding
  storeName: "ShopHub",
  storeTagline: "Your Online Store",

  // Currency Settings
  currency: "$",
  currencyCode: "CAD",

  // Tax Configuration
  taxRate: 0.1, // 10% - Change to 0.08 for 8%, 0.05 for 5%, etc.
  taxLabel: "Tax (10%)",

  // Shipping Configuration
  shippingCost: 10.0,
  shippingLabel: "Shipping",

  // Contact Information (for future use)
  contact: {
    email: "support@shophub.com",
    phone: "+1-800-SHOP-HUB",
    address: "123 Shopping Street, Commerce City, CC 12345",
  },

  // Colors & Branding
  colors: {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    error: "#e74c3c",
    warning: "#f39c12",
    dark: "#333",
    light: "#f9f9f9",
  },
};

// ============================================
// PAYMENT METHODS
// ============================================

const PAYMENT_METHODS = [
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: "fa-credit-card",
    enabled: true,
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: "fa-paypal",
    enabled: true,
  },
  // Add more payment methods here
];

// ============================================
// PRODUCT CATEGORIES
// ============================================

const CATEGORIES = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "fa-laptop",
  },
  {
    id: "clothing",
    name: "Clothing",
    icon: "fa-shirt",
  },
  {
    id: "home",
    name: "Home & Garden",
    icon: "fa-home",
  },
  {
    id: "sports",
    name: "Sports",
    icon: "fa-dumbbell",
  },
];

// ============================================
// EMAIL TEMPLATES (for future implementation)
// ============================================

const EMAIL_TEMPLATES = {
  orderConfirmation: `
    Dear {CUSTOMER_NAME},
    
    Thank you for your order! Your order number is {ORDER_NUMBER}.
    
    Order Total: {TOTAL_AMOUNT}
    Estimated Delivery: {DELIVERY_DATE}
    
    Best regards,
    ShopHub Team
  `,

  orderShipped: `
    Dear {CUSTOMER_NAME},
    
    Your order {ORDER_NUMBER} has been shipped!
    
    Tracking Number: {TRACKING_NUMBER}
    Estimated Delivery: {DELIVERY_DATE}
    
    Best regards,
    ShopHub Team
  `,
};

// ============================================
// NOTIFICATION MESSAGES
// ============================================

const NOTIFICATIONS = {
  addedToCart: "{PRODUCT_NAME} added to cart!",
  removedFromCart: "{PRODUCT_NAME} removed from cart",
  emptyCart: "Your cart is empty",
  invalidForm: "Please fill in all required fields",
  orderPlaced: "Order placed successfully!",
  orderNumber: "Order Number: #{ORDER_NUMBER}",
  totalAmount: "Total Amount: {TOTAL_AMOUNT}",
};

// ============================================
// ANALYTICS & TRACKING (future use)
// ============================================

const ANALYTICS_CONFIG = {
  enabled: false,
  googleAnalyticsId: "UA-XXXXXXXXX-X",
  trackPageViews: true,
  trackAddToCart: true,
  trackCheckout: true,
  trackPurchase: true,
};

// ============================================
// FEATURE FLAGS
// ============================================

const FEATURES = {
  wishlist: false, // Add wishlist functionality
  productReviews: false, // Allow customer reviews
  recommendations: false, // Show product recommendations
  searchFunctionality: false, // Add search bar
  userAccounts: false, // Customer login/signup
  orderHistory: false, // Track past orders
  emailNotifications: false, // Send emails
  loyaltyProgram: false, // Points/rewards system
  chatSupport: false, // Live chat support
};

// ============================================
// BUSINESS HOURS & POLICIES (for future use)
// ============================================

const POLICIES = {
  businessHours: {
    monday: { open: "09:00", close: "17:00" },
    tuesday: { open: "09:00", close: "17:00" },
    wednesday: { open: "09:00", close: "17:00" },
    thursday: { open: "09:00", close: "17:00" },
    friday: { open: "09:00", close: "17:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { open: "closed", close: "closed" },
  },

  returnPolicy: {
    daysForReturn: 30,
    restockingFee: 0.15, // 15% restocking fee
    freeReturnsForDefective: true,
  },

  shipping: {
    minOrderForFreeShipping: 100.0,
    estimatedDelivery: "3-5 business days",
    internationalAvailable: false,
  },
};

// ============================================
// EXPORT FOR USE IN OTHER FILES
// ============================================

// For HTML/CSS use: Include this in script.js as reference
// Example: STORE_CONFIG.currency, STORE_CONFIG.colors.primary

console.log("ShopHub Configuration Loaded");
console.log("Store:", STORE_CONFIG.storeName);
console.log("Tax Rate:", STORE_CONFIG.taxRate * 100 + "%");
console.log(
  "Shipping Cost:",
  STORE_CONFIG.currency + STORE_CONFIG.shippingCost,
);
