/* eslint-disable jsx-a11y/label-has-associated-control */

type StepOneProps = {
  firstNameValue: string
  lastNameValue: string
  error: string
  gender: string
  onFirstNameChange: (value: string) => void
  onLastNameChange: (value: string) => void
  onGenderChange: (value: string) => void
  onClickNext: () => void
}

const StepOne = ({
  firstNameValue, lastNameValue, error, gender,
  onFirstNameChange, onLastNameChange, onGenderChange, onClickNext,
}: StepOneProps) => {
  const a = 5;

  return (
    <form className="form-container">

      <div className="steps">
        <ol>
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 1 </div>
            Step one
            <div className="steps-sub-title"> Introduction </div>
          </li>
          <li>
            <div className="steps-number"> 2 </div>
            Step two
          </li>
          <li>
            <div className="steps-number"> 3 </div>
            Step three
          </li>
          <li>
            <div className="steps-number"> 4 </div>
            Step four
          </li>
          <li>
            <div className="steps-number"> 5 </div>
            Step five
          </li>
          <li>
            <div className="steps-number"> 6 </div>
            Step six
          </li>
        </ol>
      </div>

      {/* ============================== */}

      <fieldset>

        <legend>
          <span className="h2"> Step one: Introduction </span>
        </legend>

        <div className="row mb-2">
          <div className="form-group col-12 col-sm-6">
            <label htmlFor="firstName"> First name </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstNameValue}
              onChange={(e) => { onFirstNameChange(e.target.value); }}
              required
            />
          </div>

          <div className="form-group col-12 col-sm-6">
            <label htmlFor="lastName"> Last name </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastNameValue}
              onChange={(e) => { onLastNameChange(e.target.value); }}
              required
            />
          </div>
        </div>

        <legend>
          Gender
        </legend>

        <div className="radio">
          <input
            type="radio"
            id="Male"
            name="gender-options"
            value="Male"
            onChange={(e) => { onGenderChange(e.target.value); }}
            checked={gender === 'Male'}
          />
          <label htmlFor="Male"> Male </label>
        </div>

        <div className="radio">
          <input
            type="radio"
            id="Female"
            name="gender-options"
            value="Female"
            onChange={(e) => { onGenderChange(e.target.value); }}
            checked={gender === 'Female'}
          />
          <label htmlFor="Female"> Female </label>
        </div>

        <div className="d-flex justify-content-right pt-2">
          <span className="error">{error}</span>
          <button
            className="btn btn-primary"
            type="button"
            onClick={onClickNext}
          >
            Next step
          </button>
        </div>

      </fieldset>
    </form>
  );
};

export default StepOne;
