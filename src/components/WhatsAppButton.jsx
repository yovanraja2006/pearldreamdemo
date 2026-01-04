import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Replace with your actual WhatsApp number (format: country code + number, no spaces or special characters)
    const phoneNumber = '1234567890'; // Example: '919876543210' for India
    const message = 'Hello! I would like to know more about Pearl Dream courses and services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
        >
            <svg
                className="whatsapp-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.408-5.234-0.321-0.525c-1.342-2.201-2.050-4.717-2.050-7.287 0-7.589 6.178-13.767 13.767-13.767s13.767 6.178 13.767 13.767-6.178 13.767-13.767 13.767zM21.713 18.461c-0.296-0.148-1.738-0.858-2.007-0.956-0.269-0.099-0.464-0.148-0.66 0.148s-0.759 0.956-0.93 1.152c-0.172 0.197-0.344 0.222-0.64 0.074-0.296-0.148-1.249-0.46-2.378-1.467-0.879-0.784-1.473-1.753-1.645-2.049s-0.018-0.456 0.13-0.603c0.134-0.133 0.296-0.345 0.444-0.518 0.148-0.172 0.197-0.296 0.296-0.493 0.099-0.197 0.049-0.37-0.025-0.518s-0.66-1.591-0.905-2.179c-0.239-0.573-0.481-0.495-0.66-0.504-0.172-0.008-0.37-0.010-0.567-0.010s-0.518 0.074-0.789 0.37c-0.271 0.296-1.034 1.010-1.034 2.463s1.058 2.857 1.206 3.054c0.148 0.197 2.084 3.181 5.050 4.461 0.705 0.306 1.256 0.488 1.686 0.625 0.709 0.227 1.354 0.195 1.864 0.118 0.569-0.085 1.738-0.711 1.983-1.397 0.246-0.687 0.246-1.276 0.172-1.397-0.074-0.123-0.271-0.197-0.567-0.345z"
                />
            </svg>
            <span className="whatsapp-text">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
