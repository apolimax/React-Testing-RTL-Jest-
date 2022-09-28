function Application() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section I</h2>
      <p>All fields are mandatory</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">Unitad States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Application;
