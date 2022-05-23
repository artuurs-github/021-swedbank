/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */

type ThankYouPageProps = {
  email: string
}

const ThankYouPage = ({ email }: ThankYouPageProps) => {
  const a = 5;

  return (
    <form className="form-container">

      <fieldset>

        <legend>
          <span className="h2"> Thank you for your submition! </span>
          <p> Your personalized Budget Evaluation Plan® will be sent to your email: <br /> {email} </p>
        </legend>

      </fieldset>
    </form>
  );
};

export default ThankYouPage;
