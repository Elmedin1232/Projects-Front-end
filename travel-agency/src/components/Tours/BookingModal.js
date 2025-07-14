import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Tour Styles/BookingModal.css";

//const BookingContext = createContext();

const useBookingForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV number is required";
    } else if (
      !/^\d{3}$/.test(formData.cvv.replace(/\s/g, "")) &&
      !/^\d{4}$/.test(formData.cvv.replace(/\s/g, ""))
    ) {
      newErrors.cvv = "Card number must be 3 or 4 digits";
    }

    if (!formData.date) {
      newErrors.date = "Please select a booking date";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      // Format card number with spaces every 4 digits
      const formatted =
        value
          .replace(/\s/g, "")
          .match(/.{1,4}/g)
          ?.join(" ") || value;
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData,
    setErrors,
  };
};

export function BookingModal({
  isOpen,
  onClose,
  tourTitle,
  location,
  price,
  duration,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStartDate, setActiveStartDate] = useState(new Date(2025, 7, 1));
  const {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData,
    setErrors,
  } = useBookingForm({
    fullName: "",
    email: "",
    cardNumber: "",
    cvv: "",
    date: null,
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    if (errors.date) {
      setErrors({ ...errors, date: "" });
    }
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically handle the payment processing
      setIsSubmitted(true);
    }
  };

  const tileDisabled = ({ date, view }) => {
    if (view === "month") {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      // Enable dates from July 15th, 2025
      if (year === 2025) {
       // if (month === 6) {
          // July
      //    return day !== 15;
      //  }
        if (month === 7 || month === 8) {
          // August, September
          return day !== 1 && day !== 15;
        }
      }
      return true;
    }
    return false;
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && formData.date) {
      const tourDuration = parseInt(duration.split(" ")[0], 10);
      const startDate = new Date(formData.date);
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + tourDuration);

      if (date >= startDate && date < endDate) {
        return "tour-duration";
      }
    }
    return null;
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="book-tour">Book Your Tour</h2>
            <h3 className="book-tour-title">{tourTitle}</h3>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>Select Booking Date</label>
                <Calendar
                  onChange={handleDateChange}
                  value={formData.date}
                  tileDisabled={tileDisabled}
                  tileClassName={tileClassName}
                  minDate={new Date(2025, 7, 1)}
                  maxDate={new Date(2025, 8, 30)}
                  activeStartDate={activeStartDate}
                  onActiveStartDateChange={handleActiveStartDateChange}
                  className="booking-calendar"
                />
                {errors.date && (
                  <span className="error-message">{errors.date}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "error" : ""}
                />
                {errors.fullName && (
                  <span className="error-message">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label className="card-number" htmlFor="cardNumber">
                  <FontAwesomeIcon icon={faCreditCard} className="card-icon" />
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className={errors.cardNumber ? "error" : ""}
                />
                {errors.cardNumber && (
                  <span className="error-message">{errors.cardNumber}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="CVV">CVV/CNC Number</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="4"
                  className={errors.cvv ? "error" : ""}
                />
                {errors.cvv && (
                  <span className="error-message">{errors.cvv}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="price">Price for the tour</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={price}
                  readOnly
                />
              </div>

              <button type="submit" className="submit-button">
                Book Now
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon-wrapper">
              <FontAwesomeIcon icon={faCheck} className="success-icon" />
            </div>
            <h3>Booking Confirmed!</h3>
            <p>
              You booked the tour for {location} for {price} on{" "}
              {formData.date.toLocaleDateString()}.
            </p>
            <p>We will send you confirmation on email.</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
                // Reset form data for next booking
                setFormData({
                  fullName: "",
                  email: "",
                  cardNumber: "",
                  date: null,
                });
                setErrors({});
              }}
              className="submit-button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
