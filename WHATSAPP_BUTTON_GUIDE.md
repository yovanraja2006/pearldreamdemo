# WhatsApp Button Configuration Guide

## 📱 WhatsApp Button Added Successfully!

A floating WhatsApp button has been added to the bottom-right corner of your website. It appears on all pages and is fully responsive.

## 🔧 How to Customize the Phone Number

Open `src/components/WhatsAppButton.jsx` and update line 5:

```javascript
const phoneNumber = '1234567890'; // Replace with your actual number
```

### Phone Number Format:
- **Format**: Country code + phone number (no spaces, no special characters)
- **Examples**:
  - India: `'919876543210'` (91 is country code)
  - USA: `'11234567890'` (1 is country code)
  - UK: `'447123456789'` (44 is country code)

## 💬 Customize the Default Message

Update line 6 in the same file:

```javascript
const message = 'Hello! I would like to know more about Pearl Dream courses and services.';
```

Change this to any message you want to appear when users click the button.

## 🎨 Design Features

### Desktop View:
- Shows WhatsApp icon + "Chat with us" text
- Green gradient background (#25D366 to #128C7E)
- Smooth hover animation with lift effect
- Pulsing icon animation

### Mobile View:
- Shows only the WhatsApp icon (circular button)
- Tooltip appears on hover: "Chat with us"
- Optimized size: 60x60px

## 📍 Position

The button is fixed at:
- **Desktop**: 30px from bottom, 30px from right
- **Mobile**: 20px from bottom, 20px from right

To change position, edit `src/components/WhatsAppButton.css`:

```css
.whatsapp-button {
  bottom: 30px;  /* Change this */
  right: 30px;   /* Change this */
}
```

## 🎭 Animations

The button includes:
1. **Bounce-in animation** on page load (after 1 second delay)
2. **Pulse animation** on the icon (continuous)
3. **Hover effect** - lifts up and scales slightly
4. **Shadow effect** - increases on hover

## 🎨 Color Customization

To change the button color, edit the gradient in `WhatsAppButton.css`:

```css
background: linear-gradient(135deg, #25D366, #128C7E);
```

Replace with your preferred colors while keeping the WhatsApp green theme.

## ✅ Features

- ✅ Appears on all pages
- ✅ Fully responsive (desktop & mobile)
- ✅ Opens WhatsApp Web/App with pre-filled message
- ✅ Smooth animations and hover effects
- ✅ High z-index (999) - always visible
- ✅ Accessible (aria-label included)
- ✅ Opens in new tab (target="_blank")

## 🧪 Testing

1. Visit your website: `http://localhost:5173`
2. Look for the green WhatsApp button in the bottom-right corner
3. Click it to test (it will open WhatsApp with your number)
4. Test on mobile view (resize browser or use DevTools)

## 📝 Example Configuration

For a business in India with phone number 98765 43210:

```javascript
const phoneNumber = '919876543210';
const message = 'Hi Pearl Dream! I saw your website and would like to inquire about your courses.';
```

---

**Note**: Make sure to replace `'1234567890'` with your actual WhatsApp business number before deploying!
