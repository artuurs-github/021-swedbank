/* eslint-disable jsx-a11y/label-has-associated-control */

type StepTwoProps = {
  addressValue: string
  emailValue: string
  phoneValue: string
  error: string
  onAddressChange: (value: string) => void
  onEmailChange: (value: string) => void
  onPhoneChange: (value: string) => void
  onClickNext: () => void
  onClickBack: () => void
}

const StepTwo = ({
  addressValue, emailValue, phoneValue, error, onAddressChange, onEmailChange, onPhoneChange, onClickNext, onClickBack,
}: StepTwoProps) => {
  const a = 5;

  return (
    <form className="form-container">

      <div className="steps">
        <ol>
          <li className="steps-completed">
            <div className="material-icons steps-icon"> check </div>
            Step one
            <div className="steps-sub-title"> Introduction </div>
          </li>
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 2 </div>
            Step two
            <div className="steps-sub-title"> Contact info </div>
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
          <span className="h2"> Step two: Contact information </span>
        </legend>

        <div className="form-group mb-4">
          <label htmlFor="address"> Address (i.e., street, city, country, postal code) </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={addressValue}
            onChange={(e) => { onAddressChange(e.target.value); }}
          />
        </div>

        <div className="row mb-2">
          <div className="form-group col-12 col-sm-6">
            <label htmlFor="email"> E-mail </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={emailValue}
              onChange={(e) => { onEmailChange(e.target.value); }}
            />
          </div>

          <div className="form-group col-12 col-sm-6">
            <label htmlFor="phone"> Phone number </label>
            <input
              type="text"
              className="form-control"
              id="multi-form-example-2"
              value={phoneValue}
              onChange={(e) => { onPhoneChange(e.target.value); }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between pt-49">
          <div>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onClickBack}
            >
              <i className="material-icons" aria-hidden="true">arrow_back</i>
              <span>Back</span>
            </button>
          </div>

          <div>
            <span className="error">{error}</span>
            <button
              className="btn btn-primary"
              type="button"
              onClick={onClickNext}
            >
              Next step
            </button>
          </div>
        </div>

      </fieldset>
    </form>
  );
};

export default StepTwo;
