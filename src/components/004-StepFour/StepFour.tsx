/* eslint-disable jsx-a11y/label-has-associated-control */

type StepFourProps = {
  error: string
  onProductChange: (value: string) => void
  onClickNext: () => void
  onClickBack: () => void
}

const StepFour = ({
  error, onProductChange, onClickNext, onClickBack,
}: StepFourProps) => {
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
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 4 </div>
            Step four
            <div className="steps-sub-title"> Product </div>
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
          <span className="h2"> Step four: Product </span>
        </legend>

        <legend> Choose the Budget Evaluation Plan® </legend>

        <div className="form-group mb-4">
          <select
            className="select"
            name="product"
            id="product"
            defaultValue="default"
            onChange={(e) => { onProductChange(e.target.value); }}
          >
            <option value="default" disabled> --- </option>
            <option value="Common (9.99 €)"> Common (9.99 €) </option>
            <option value="Rare (29.99 €)"> Rare (29.99 €) </option>
            <option value="Legendary (49.99 €)"> Legendary (49.99 €) </option>
          </select>
        </div>

        <div className="d-flex justify-content-between pt-147">
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

export default StepFour;
