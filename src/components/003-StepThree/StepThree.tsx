/* eslint-disable jsx-a11y/label-has-associated-control */
import Tooltip from '../../images/icon-tooltip.png';

type StepThreeProps = {
  descriptionValue: string
  error: string
  onDescriptionChange: (value: string) => void
  onClickNext: () => void
  onClickBack: () => void
}

const StepThree = ({
  descriptionValue, error, onDescriptionChange, onClickNext, onClickBack,
}: StepThreeProps) => {
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
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 3 </div>
            Step three
            <div className="steps-sub-title"> Description </div>
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
          <span className="h2"> Step three: Description </span>
        </legend>

        <div className="form-group mb-4">
          <label htmlFor="description">
            Please describe all of your monetary operations in the last month.
            <div className="tooltip">
              <img src={Tooltip} alt="tooltip" />
              <div className="tooltiptext">
                <p> The more, the better! </p>
              </div>
            </div>
          </label>
          <textarea
            id="description"
            cols={78}
            rows={8}
            value={descriptionValue}
            onChange={(e) => { onDescriptionChange(e.target.value); }}
          />
        </div>

        <div className="d-flex justify-content-between pt-1">
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

export default StepThree;
