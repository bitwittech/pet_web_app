import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pet/css/form.css';

// image
import vendor from '../pet/images/dog.svg'
import vendor2 from '../pet/images/cat.svg'
import vendor3 from '../pet/images/bear.svg'

const VendorDetailsForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    contactDetail: '',
    companyDetail: '',
    socialMediaHandles: '',
    gallery: '',
    description: '',
    rateCard: '',
    kyc: '',
    address: '',
    coordinates: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="container mt-5 d-flex position-relative">
      <div className='position-absolute vector-1'><img src={vendor} className='img-fluid' alt='vendor'></img></div>
      <div className='position-absolute vector-2'><img src={vendor2} className='img-fluid' alt='vendor'></img></div>
      <div className='position-absolute vector-3'><img src={vendor3} className='img-fluid' alt='vendor'></img></div>
      <form className="p-4 m-auto w-50  shadow-sm rounded bg-light" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4" style={{ color: '#ff7e67' }}>
          Vendor Details Form
        </h2>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            placeholder="Enter vendor type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter vendor name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Contact Detail</label>
          <input
            type="text"
            name="contactDetail"
            className="form-control"
            placeholder="Enter contact detail"
            value={formData.contactDetail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Company Detail</label>
          <input
            type="text"
            name="companyDetail"
            className="form-control"
            placeholder="Enter company detail"
            value={formData.companyDetail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Social Media Handles</label>
          <input
            type="text"
            name="socialMediaHandles"
            className="form-control"
            placeholder="Enter social media handles"
            value={formData.socialMediaHandles}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Gallery</label>
          <input
            type="text"
            name="gallery"
            className="form-control"
            placeholder="Enter gallery link"
            value={formData.gallery}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Description</label>
          <textarea
            style={{ resize: 'none' }}
            name="description"
            className="form-control"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Rate Card</label>
          <input
            type="text"
            name="rateCard"
            className="form-control"
            placeholder="Enter rate card link"
            value={formData.rateCard}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">KYC</label>
          <input
            type="text"
            name="kyc"
            className="form-control"
            placeholder="Enter KYC information"
            value={formData.kyc}
            onChange={handleChange}
          />
        </div>

        {/* Additional fields with bold labels */}
        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label className="fs-md text-muted mb-2 fw-semibold">Coordinates</label>
          <input
            type="text"
            name="coordinates"
            className="form-control"
            placeholder="Enter coordinates"
            value={formData.coordinates}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn mt-2 btn-primary btn-block justify-end"
          style={{ backgroundColor: '#37d5d6', borderColor: '#37d5d6' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VendorDetailsForm;
