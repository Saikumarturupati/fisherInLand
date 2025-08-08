const ContactUs = () => {
  return (
    <div>
      <div className="contract-details">
        <h1>Contract details</h1>
        <div className="main-contract">
          <div>
            License-Revenue-Collection <input type="text" />
          </div>
          <div>
            Contract-Approval
            <input type="text" />
          </div>
        </div>
        <div className="main-contract">
          <div>
            Contract-method
            <input type="text" />
          </div>
          <div>
            Conteactor-name
            <input type="text" />
          </div>
        </div>
        <div className="main-contract">
          <div>
            Number-of-contractors
            <input type="text" />
          </div>
          <div>
            Contract-period-start-year
            <input type="text" />
          </div>
        </div>
        <div className="main-contract">
          <div>
            Conract-period-end-year
            <input type="text" />
          </div>
          <div>
            Contract-government-order
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
