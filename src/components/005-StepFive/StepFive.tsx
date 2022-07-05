/* eslint-disable jsx-a11y/label-has-associated-control */

type StepFiveProps = {
  error: string
  onConsentChange: (value: string) => void
  onClickNext: () => void
  onClickBack: () => void
}

const StepFive = ({
  error, onConsentChange, onClickNext, onClickBack,
}: StepFiveProps) => {
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
          <li className="steps-completed">
            <div className="material-icons steps-icon"> check </div>
            Step two
            <div className="steps-sub-title"> Contact info </div>
          </li>
          <li className="steps-completed">
            <div className="material-icons steps-icon"> check </div>
            Step three
            <div className="steps-sub-title"> Description </div>
          </li>
          <li className="steps-completed">
            <div className="material-icons steps-icon"> check </div>
            Step four
            <div className="steps-sub-title"> Product </div>
          </li>
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 5 </div>
            Step five
            <div className="steps-sub-title"> Confirmation </div>
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
          <span className="h2"> Step five: Confirmation </span>
        </legend>

        <legend>
          I confirm that the information I have provided is true and can be verified.
        </legend>

        <div className="radio">
          <input
            type="checkbox"
            id="consent"
            onChange={(e) => { onConsentChange(e.target.value); }}
          />
          <label htmlFor="consent"> Yes! </label>
        </div>

        <div className="d-flex justify-content-between pt-156">
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

export default StepFive;
