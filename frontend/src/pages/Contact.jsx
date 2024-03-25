import "./contact.css";

function Contact() {
  return (
    <div className="bodyContact">
      <div className="card">
        <h2>Nous contacter</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="inputLastName">Prénom</label>
              <input id="inputLastName" type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="inputName">Nom</label>
              <input id="inputName" type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input id="inputEmail" type="text" />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label htmlFor="messageTextArea">Message</label>
              <textarea id="messageTextArea" />
            </div>
          </div>

          <div className="col">
            <input
              id="button-home-connect"
              className="comic-button"
              type="submit"
              value="Envoyer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
