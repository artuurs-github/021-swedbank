// REQUIREMENTS:

// ! 1. The form has an intro part, 5 questions, and a summary part.
// TODO: Add an intro part.

// * 2. One question is visible at a time.
// * 3. All answers are mandatory. One moves to the next question only after answering the previous one.
// * 4. There is a possibility to move back to the previous question.

// ! 5. All of the following elements are used: radio button, checkbox, drop-down box, textarea.
// TODO: Style the checkbox!
// TODO: Style the select; remember select selection.
// TODO: Fix textarea wrap.
// TODO: Remember radio selections (w/ ~getElement + set(.checked)?).

// ! 6. A tooltip element is used at least once to explain one of the choices.
// TODO: Add better tooltip.

// * 7. The form has error messages.
// * 8. In the summary page all questions and answers are displayed. Data is not saved anywhere.
// * 9. Application form design should correspond to Swedbank’s design guidelines.

// ! 10. No pre-made frameworks or templates are used.
// TODO: Rework my own SCSS.
// TODO: Fix "steps-ongoing::after" linear gradient bug.

// ========== //

import { useState } from 'react';
import './App.scss';
import StepOne from './components/001-StepOne/StepOne';
import StepTwo from './components/002-StepTwo/StepTwo';
import StepThree from './components/003-StepThree/StepThree';
import StepFour from './components/004-StepFour/StepFour';
import StepFive from './components/005-StepFive/StepFive';
import StepSix from './components/006-StepSix/StepSix';
import ThankYouPage from './components/007-ThankYouPage/ThankYouPage';

const initialFormData = {
  firstName: '',
  lastName: '',
  gender: '',
  address: '',
  email: '',
  phone: '',
  description: '',
  product: '',
  consent: '',
};

const App = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handleClickNext = () => {
    setPage(page + 1);
  };

  const handleClickBack = () => {
    setPage(page - 1);
  };

  return (
    <div>

      {page === 1 && (
      <StepOne
        firstNameValue={formData.firstName}
        lastNameValue={formData.lastName}
        error={error}
        onFirstNameChange={(value) => setFormData({ ...formData, firstName: value })}
        onLastNameChange={(value) => setFormData({ ...formData, lastName: value })}
        onGenderChange={(value) => {
          setFormData({ ...formData, gender: value });
        }}
        gender={formData.gender}
        onClickNext={() => {
          setError('');
          if (!formData.firstName || !formData.lastName || !formData.gender) {
            setError('All fields are mandatory!');
            return;
          }
          handleClickNext();
        }}
      />
      )}

      {page === 2 && (
      <StepTwo
        addressValue={formData.address}
        emailValue={formData.email}
        phoneValue={formData.phone}
        error={error}
        onAddressChange={(value) => setFormData({ ...formData, address: value })}
        onEmailChange={(value) => setFormData({ ...formData, email: value })}
        onPhoneChange={(value) => setFormData({ ...formData, phone: value })}
        onClickNext={() => {
          setError('');
          if (!formData.address || !formData.email || !formData.phone) {
            setError('All fields are mandatory!');
            return;
          }
          handleClickNext();
        }}
        onClickBack={handleClickBack}
      />
      )}

      {page === 3 && (
      <StepThree
        descriptionValue={formData.description}
        error={error}
        onDescriptionChange={(value) => setFormData({ ...formData, description: value })}
        onClickNext={() => {
          setError('');
          if (!formData.description) {
            setError('All fields are mandatory!');
            return;
          }
          handleClickNext();
        }}
        onClickBack={handleClickBack}
      />
      )}

      {page === 4 && (
      <StepFour
        error={error}
        onProductChange={(value) => setFormData({ ...formData, product: value })}
        onClickNext={() => {
          setError('');
          if (!formData.product) {
            setError('All fields are mandatory!');
            return;
          }
          handleClickNext();
        }}
        onClickBack={handleClickBack}
      />
      )}

      {page === 5 && (
      <StepFive
        error={error}
        onConsentChange={(value) => setFormData({ ...formData, consent: value })}
        onClickNext={() => {
          setError('');
          if (!formData.consent) {
            setError('All fields are mandatory!');
            return;
          }
          handleClickNext();
        }}
        onClickBack={handleClickBack}
      />
      )}

      {page === 6 && (
      <StepSix
        firstName={formData.firstName}
        lastName={formData.lastName}
        gender={formData.gender}
        address={formData.address}
        email={formData.email}
        phone={formData.phone}
        description={formData.description}
        plan={formData.product}
        consent={formData.consent}
        onClickNext={handleClickNext}
        onClickBack={handleClickBack}
      />
      )}

      {page === 7 && (
      <ThankYouPage
        email={formData.email}
      />
      )}

    </div>

  );
};

export default App;
