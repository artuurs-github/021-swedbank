/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */

type StepSixProps = {
  firstName: string,
  lastName: string,
  gender: string,
  address: string,
  email: string,
  phone: string,
  description: string,
  plan: string,
  consent: string,
  onClickNext: () => void
  onClickBack: () => void
}

const StepSix = ({
  firstName, lastName, gender, address, email, phone, description, plan, consent, onClickNext, onClickBack,
}: StepSixProps) => {
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
          <li className="steps-completed">
            <div className="material-icons steps-icon"> check </div>
            Step five
            <div className="steps-sub-title"> Consent </div>
          </li>
          <li className="steps-ongoing steps-selected">
            <div className="steps-number"> 6 </div>
            Step six
            <div className="steps-sub-title"> Summary </div>
          </li>
        </ol>
      </div>

      {/* ============================== */}

      <fieldset>

        <legend>
          <span className="h2"> Step six: Summary </span>
        </legend>

        <div>
          <p> First name:
            <span className="summary__text">
              {' '}{firstName}
            </span>
          </p>
          <p> Last name:
            <span className="summary__text">
              {' '}{lastName}
            </span>
          </p>
          <p> Gender:
            <span className="summary__text">
              {' '}{gender}
            </span>
          </p>
          <p> Address:
            <span className="summary__text">
              {' '}{address}
            </span>
          </p>
          <p> E-mail:
            <span className="summary__text">
              {' '}{email}
            </span>
          </p>
          <p> Phone:
            <span className="summary__text">
              {' '}{phone}
            </span>
          </p>
          <p> Description:
            <span className="summary__text">
              {' '}{description}
            </span>
          </p>
          <p> Budget evaluation plan:
            <span className="summary__text">
              {' '}{plan}
            </span>
          </p>
          <p> Consent:
            <span className="summary__text">
              {' '} Yes
            </span>
          </p>
        </div>
        <br />

        <div className="d-flex justify-content-between pt-0">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={onClickBack}
          >
            <i className="material-icons" aria-hidden="true">arrow_back</i>
            <span>Back</span>
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={onClickNext}
          >
            Submit
          </button>
        </div>

      </fieldset>
    </form>
  );
};

export default StepSix;
